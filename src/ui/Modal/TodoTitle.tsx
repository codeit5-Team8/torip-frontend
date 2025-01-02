import { Input } from '@ui/common/Input';

interface ITodoTitle {
  todoTitle: string;
  setTodoTitle: React.Dispatch<React.SetStateAction<string>>;
}
export default function TodoTitle({ todoTitle, setTodoTitle }: ITodoTitle) {
  const handleTodoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };

  return (
    <div>
      <header className="mb-2 text-base font-semibold text-slate-800">
        제목
      </header>
      <Input
        type="text"
        value={todoTitle}
        onChange={handleTodoTitle}
        placeholder="할 일을 적어주세요"
      />
    </div>
  );
}
