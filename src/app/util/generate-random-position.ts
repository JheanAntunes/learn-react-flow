export const generateRandomPosition = () => {
  const x = Math.floor(Math.random() * 400);
  const y = Math.floor(Math.random() * 400);
  return { x, y };
};
