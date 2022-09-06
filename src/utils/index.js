export const getPercentageByTwoNumbers = (number, total) => {
  total = (number * 100) / total;
  return total.toFixed(2);
};
