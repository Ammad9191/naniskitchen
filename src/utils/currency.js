import { business } from '../config/business';

const formatter = new Intl.NumberFormat(business.locale, {
  style: 'decimal',
  maximumFractionDigits: 0,
});

export const formatPKR = (amount) => `PKR ${formatter.format(Number(amount) || 0)}`;
