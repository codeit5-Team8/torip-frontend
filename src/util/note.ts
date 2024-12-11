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
