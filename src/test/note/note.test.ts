import {
  isEmptyText,
  removeHtmlTags,
  removeSpaces,
  saveToLocalStorage,
} from 'src/util/note';

describe('removeHtmlTags', () => {
  it('should remove all HTML tags from the text', () => {
    expect(removeHtmlTags('<div>Hello <b>World</b></div>')).toBe('Hello World');
    expect(removeHtmlTags('<p>Line 1</p><br><p>Line 2</p>')).toBe(
      'Line 1Line 2',
    );
    expect(removeHtmlTags('No tags here')).toBe('No tags here');
  });
});

describe('removeSpaces', () => {
  it('should replace multiple spaces with a single space', () => {
    expect(removeSpaces('Hello    World')).toBe('HelloWorld');
    expect(removeSpaces(' Multiple   spaces  in   text ')).toBe(
      'Multiplespacesintext',
    );
    expect(removeSpaces('NoExtraSpaces')).toBe('NoExtraSpaces');
  });
});

describe('isEmptyText', () => {
  it('should handle text with HTML tags when hasHtml is true', () => {
    expect(isEmptyText({ value: '<div>  </div>', hasHtml: true })).toBe(true);
    expect(isEmptyText({ value: '<p>Hello</p>', hasHtml: true })).toBe(false);
  });

  it('should handle plain text when hasHtml is false', () => {
    expect(isEmptyText({ value: '   ', hasHtml: false })).toBe(true);
    expect(isEmptyText({ value: 'Hello', hasHtml: false })).toBe(false);
  });
});

describe('saveToLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should save a value to localStorage as a JSON string', () => {
    const key = 'testKey';
    const value = { name: 'Test', age: 30 };

    saveToLocalStorage(key, value);
    const storedValue = localStorage.getItem(key);

    expect(storedValue).toBe(JSON.stringify(value));
  });

  it('should overwrite existing key with new value', () => {
    const key = 'testKey';
    const firstValue = { name: 'First' };
    const secondValue = { name: 'Second' };

    saveToLocalStorage(key, firstValue);
    saveToLocalStorage(key, secondValue);

    const storedValue = localStorage.getItem(key);
    expect(storedValue).toBe(JSON.stringify(secondValue));
  });
});
