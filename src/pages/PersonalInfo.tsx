import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, MenuItem, Box } from '@mui/material';

const PersonalInfo = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      phone: '',
      firstName: '',
      lastName: '',
      gender: '',
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .matches(/^0\d{3}\s\d{3}\s\d{3}$/, 'Введите корректный номер (0XXX XXX XXX)')
        .required('Обязательно'),
      firstName: Yup.string().required('Обязательно'),
      lastName: Yup.string().required('Обязательно'),
      gender: Yup.string().required('Обязательно'),
    }),
    onSubmit: (values) => {
      sessionStorage.setItem('personalInfo', JSON.stringify(values));
      navigate('/address-work');
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '300px', margin: 'auto', marginTop: '50px' }}>
      <TextField
        label="Телефон"
        name="phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
      />
      <TextField
        label="Имя"
        name="firstName"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        helperText={formik.touched.firstName && formik.errors.firstName}
      />
      <TextField
        label="Фамилия"
        name="lastName"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        helperText={formik.touched.lastName && formik.errors.lastName}
      />
      <TextField
        select
        label="Пол"
        name="gender"
        value={formik.values.gender}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.gender && Boolean(formik.errors.gender)}
        helperText={formik.touched.gender && formik.errors.gender}
      >
        <MenuItem value="Мужской">Мужской</MenuItem>
        <MenuItem value="Женский">Женский</MenuItem>
      </TextField>
      <Button type="submit" variant="contained">Далее</Button>
    </Box>
  );
};

export default PersonalInfo;