const PHONE_PATTERN = /^(\+92|92|0)?3\d{9}$/;

export const normalizePhone = (value) => String(value || '').replace(/[\s-]/g, '');

export const isValidPakistaniMobile = (value) => PHONE_PATTERN.test(normalizePhone(value));

export const validateCheckout = ({ name, phone, address, area, items }) => {
  const errors = {};

  if (!name?.trim()) errors.name = 'Please enter your full name.';
  if (!phone?.trim()) errors.phone = 'Please enter a WhatsApp or phone number.';
  else if (!isValidPakistaniMobile(phone)) {
    errors.phone = 'Enter a valid Pakistani mobile number, such as 0326-1222735.';
  }
  if (!address?.trim()) errors.address = 'Please enter your delivery address.';
  if (!area?.trim()) errors.area = 'Please share your Lahore area or neighborhood.';
  if (!items?.length) errors.items = 'Add at least one item before placing an order.';

  return errors;
};

export const validateContact = ({ name, phone, message }) => {
  const errors = {};
  if (!name?.trim()) errors.name = 'Please enter your name.';
  if (!phone?.trim()) errors.phone = 'Please enter a WhatsApp or phone number.';
  else if (!isValidPakistaniMobile(phone)) {
    errors.phone = 'Enter a valid Pakistani mobile number.';
  }
  if (!message?.trim()) errors.message = 'Please write a short message.';
  return errors;
};
