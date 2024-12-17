import { parseISO, format } from 'date-fns';

export const removeHtmlTags = (text: string = '') => {
  return text.replace(/<[^>]*>?/gm, '');
};

export const removeSpaces = (text: string = '') => {
  return text.replace(/\s+/g, '');
};

export const isEmptyText = ({
  value,
  hasHtml,
}: {
  value: string;
  hasHtml: boolean;
}): boolean => {
  const valueWithoutSpaces = hasHtml
    ? removeHtmlTags(removeSpaces(value))
    : removeSpaces(value);
  return valueWithoutSpaces === '';
};

export const saveToLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const formatIsoDateToYYYYMMDD = (isoDate: string) => {
  const date = parseISO(isoDate);
  return format(date, 'yyyy.MM.dd');
};
