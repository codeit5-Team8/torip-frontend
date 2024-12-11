export const removeHtmlTags = (text: string) => {
  return text.replace(/<[^>]*>?/gm, '');
};

export const removeFrontAndBackSpaces = (text: string) => {
  return text.replace(/^\s+|\s+$/g, '');
};

export const removeSpaces = (text: string) => {
  return text.replace(/\s+/g, ' ');
};

export const isEmptyText = ({
  value,
  hasHtml,
}: {
  value: string;
  hasHtml: boolean;
}) => {
  return hasHtml ? removeSpaces(removeHtmlTags(value)) : removeSpaces(value);
};

export const saveToLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};
