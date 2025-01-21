export const calculateORP = (word: string): number => {
  const length = word.length;
  if (length <= 1) return 0;
  if (length <= 5) return 1;
  if (length <= 9) return 2;
  if (length <= 13) return 3;
  return Math.floor(length / 3);
};

export const splitIntoWords = (text: string): string[] => {
  return text
    .trim()
    .split(/\s+/)
    .filter(word => word.length > 0);
};

export const calculateDelay = (wordsPerMinute: number): number => {
  return 60000 / wordsPerMinute;
};