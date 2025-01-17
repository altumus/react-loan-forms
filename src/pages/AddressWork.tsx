import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, MenuItem, Box, Typography } from '@mui/material';
import axios from 'axios';

const AddressWork = () => {
	const navigate = useNavigate();
	const [categories, setCategories] = useState<
		{ slug: string; name: string; url: string }[]
	>([]);

	useEffect(() => {
		axios
			.get('https://dummyjson.com/products/categories')
			.then((response) => setCategories(response.data))
			.catch((error) => console.error('Ошибка загрузки категорий', error));
	}, []);

	const formik = useFormik({
		initialValues: {
			workPlace: '',
			address: '',
		},
		validationSchema: Yup.object({
			workPlace: Yup.string().required('Обязательно'),
			address: Yup.string().required('Обязательно'),
		}),
		onSubmit: (values) => {
			sessionStorage.setItem('addressWork', JSON.stringify(values));
			navigate('/loan-params');
		},
	});

	return (
		<Box
			component='form'
			onSubmit={formik.handleSubmit}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
				width: '300px',
				margin: 'auto',
				marginTop: '50px',
			}}
		>
			<TextField
				select
				label='Место работы'
				name='workPlace'
				value={formik.values.workPlace}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				error={formik.touched.workPlace && Boolean(formik.errors.workPlace)}
				helperText={formik.touched.workPlace && formik.errors.workPlace}
			>
				{categories.map((category) => (
					<MenuItem key={category.slug} value={category.slug}>
						<Typography>{category.name}</Typography>
					</MenuItem>
				))}
			</TextField>
			<TextField
				label='Адрес проживания'
				name='address'
				value={formik.values.address}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				error={formik.touched.address && Boolean(formik.errors.address)}
				helperText={formik.touched.address && formik.errors.address}
			/>
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Button onClick={() => navigate(-1)} variant='outlined'>
					Назад
				</Button>
				<Button type='submit' variant='contained'>
					Далее
				</Button>
			</Box>
		</Box>
	);
};

export default AddressWork;

