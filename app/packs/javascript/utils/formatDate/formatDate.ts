import dayjs from 'dayjs';

export const formatDate: (date: Date) => string = (date) => (
  dayjs(date)
    .format('DD MMM YYYY')
);
