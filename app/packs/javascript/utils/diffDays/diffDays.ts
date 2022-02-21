export const diffDays = (startDate, endDate) => {
  const parsedStartDate = (typeof startDate === 'string') ? new Date(startDate) : startDate;
  const parsedEndDate = (typeof endDate === 'string') ? new Date(endDate) : endDate;

  const diffTime = parsedEndDate.getTime() - parsedStartDate.getTime();
  return diffTime / (1000 * 3600 * 24);
};
