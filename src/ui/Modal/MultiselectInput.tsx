/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

import { useGetTripMembers } from '@hooks/trip/useGetTripMembers';
import React, { useState, useEffect } from 'react';

interface IOption {
  label: string;
  value: string;
}

interface IMultiSelectInputProps {
  id: number; // id 값이 숫자로 들어옴
  onChange: (selectedValues: string[]) => void; // 선택된 값 전달 콜백
}

const MultiSelectInput = ({ id, onChange }: IMultiSelectInputProps) => {
  const { data: tripMembers, isLoading } = useGetTripMembers(id);
  const [options, setOptions] = useState<IOption[]>([]);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // id 값에 따라 옵션 변경
    if (tripMembers && tripMembers.result) {
      const newOptions = tripMembers!.result.map((member) => {
        return { label: member.username, value: member.email };
      });
      setOptions(newOptions);
      setSelectedValues([]); // id 변경 시 선택 초기화
    }
  }, [tripMembers, id]);

  const handleSelect = (value: string) => {
    setSelectedValues((prev) => {
      const isSelected = prev.includes(value);
      const updatedValues = isSelected
        ? prev.filter((v) => v !== value)
        : [...prev, value];
      onChange(updatedValues);
      return updatedValues;
    });
  };

  const handleRemove = (value: string) => {
    setSelectedValues((prev) => {
      const updatedValues = prev.filter((v) => v !== value);
      onChange(updatedValues);
      return updatedValues;
    });
  };

  return (
    <>
      {!isLoading && (
        <>
          <header className="my-5 text-base font-semibold text-slate-800">
            담당자
          </header>
          <div className="relative w-full">
            {/* Selected Values */}
            <div
              className="flex flex-wrap items-center gap-2 rounded border px-2 py-1"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              {selectedValues.map((value) => (
                <div
                  key={value}
                  className="flex items-center rounded bg-blue-100 px-2 py-1 text-blue-800"
                >
                  <span>
                    {options.find((option) => option.value === value)?.label}
                  </span>
                  <button
                    type="button"
                    className="ml-1 text-red-500 focus:outline-none"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemove(value);
                    }}
                  >
                    ×
                  </button>
                </div>
              ))}
              {selectedValues.length === 0 && (
                <span className="text-gray-500">담당자를 선택하세요.</span>
              )}
            </div>

            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="absolute top-full z-10 mt-1 w-full rounded border bg-white shadow-md">
                {options.map((option) => (
                  <div
                    key={option.value}
                    className={`cursor-pointer px-4 py-2 hover:bg-blue-100 ${selectedValues.includes(option.value) ? 'bg-blue-50' : ''}`}
                    onClick={() => handleSelect(option.value)}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default MultiSelectInput;
