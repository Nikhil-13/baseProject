import React from 'react';
import * as Yup from 'yup';

const fields = {
  email: {
    placeholder: 'PLACEHOLDERS.EMAIL',
    type: 'email',
  },
  password: {
    placeholder: 'PLACEHOLDERS.PASSWORD',
    type: 'password',
    isPassword: true,
  },
  phoneNumber: {
    placeholder: 'PLACEHOLDERS.PHONE_NUMBER',
    type: 'phoneNumber',
    keyboardType: 'phone-pad',
  },
};

const schemas = {
  stringRequired: Yup.string().required('Required'),
  stringRequired2: Yup.string()
    .trim()
    .min(2, 'Must be at least 2 characters')
    .required('Required'),
  stringOptional: Yup.string()
    .trim()
    .min(2, 'Must be at least 2 characters')
    .optional()
    .nullable(),
  email: Yup.string()
    .required('Required')
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Please provide a valid email',
    ),
  emailOptional: Yup.string().email().optional(),
  phoneRequired: Yup.string().length(10).required('Required'),
  phoneOptional: Yup.string().length(10).optional().nullable(),
  pincode: Yup.string()
    .matches(/\b\d{5}\b/g, 'Pincode is not valid')
    .required('Required')
    .nullable(),
  numberInput: Yup.number().optional(),
  oldPassword: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
  password: Yup.string()
    // .min(8, 'Must be at least 8 characters')
    .required('Required'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Password must match')
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
  newPassword: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), ''], 'Password must match')
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
};

export default {
  LOGIN: {
    fields: [fields.email, fields.password],
    schema: Yup.object().shape({
      email: schemas.email,
      password: schemas.password,
    }),
  },
  LOGIN_WTIH_PHONE: {
    fields: [fields.phoneNumber],
    schema: Yup.object().shape({
      phoneNumber: schemas.phoneRequired,
    }),
  },
  FORGOT_PASSWORD: {
    fields: [fields.email],
    schema: Yup.object().shape({
      email: schemas.email,
    }),
  },
};
