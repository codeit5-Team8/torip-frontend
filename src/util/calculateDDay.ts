export const calculateDDday = (date: string) => {
  const today = new Date();
  const targetDate = new Date(date);

  const diffInMs = targetDate.getTime() - today.getTime();

  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays > 0) {
    return `D-${diffInDays}`;
  } else if (diffInDays === 0) {
    return 'D-Day';
  } else {
    return `D+${Math.abs(diffInDays)}`;
  }
};
