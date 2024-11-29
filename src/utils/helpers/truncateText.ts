export const truncateText = (text: string): string => {
  const maxLength = 57;
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};
