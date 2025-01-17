import React, { JSX, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Slider, Button, Typography, Modal } from '@mui/material';

type PersonalInfo = {
	firstName: string;
	lastName: string;
};

const LoanParams = (): JSX.Element => {
	const navigate = useNavigate();
	const [loanAmount, setLoanAmount] = useState<number>(200); // Сумма займа
	const [loanDays, setLoanDays] = useState<number>(10); // Срок займа
	const [modalOpen, setModalOpen] = useState<boolean>(false); // Открытие модального окна
	const [userName, setUserName] = useState<string>(''); // Полное имя пользователя для отображения

	// Обработчик отправки заявки
	const handleSubmit = () => {
		try {
			// Получение данных из sessionStorage
			const personalInfo: PersonalInfo | null = JSON.parse(
				sessionStorage.getItem('personalInfo') || 'null'
			);

			// Проверка на корректность данных
			if (!personalInfo || !personalInfo.firstName || !personalInfo.lastName) {
				throw new Error('Данные о пользователе отсутствуют');
			}

			// Установка полного имени для отображения
			setUserName(`${personalInfo.firstName} ${personalInfo.lastName}`);
			setModalOpen(true);
		} catch (error) {
			console.error('Ошибка обработки данных:', error);
			alert('Произошла ошибка. Проверьте введенные данные.');
		}
	};

	return (
		<Box
			sx={{
				width: '300px',
				margin: 'auto',
				marginTop: '50px',
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
			}}
		>
			<Typography>Сумма займа: ${loanAmount}</Typography>
			<Slider
				value={loanAmount}
				min={200}
				max={1000}
				step={100}
				onChange={(e, value) => setLoanAmount(value as number)}
			/>
			<Typography>Срок займа: {loanDays} дней</Typography>
			<Slider
				value={loanDays}
				min={10}
				max={30}
				step={1}
				onChange={(e, value) => setLoanDays(value as number)}
			/>
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Button onClick={() => navigate(-1)} variant='outlined'>
					Назад
				</Button>
				<Button onClick={handleSubmit} variant='contained'>
					Подать заявку
				</Button>
			</Box>
			<Modal open={modalOpen} onClose={() => setModalOpen(false)}>
				<Box
					sx={{
						width: '400px',
						margin: 'auto',
						marginTop: '200px',
						background: 'white',
						padding: '20px',
						borderRadius: '8px',
						boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
					}}
				>
					<Typography variant='h6' align='center' gutterBottom>
						Поздравляем!
					</Typography>
					<Typography align='center'>
						{userName}, вам одобрен займ ${loanAmount} на {loanDays} дней.
					</Typography>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							marginTop: '20px',
						}}
					>
						<Button variant='contained' onClick={() => setModalOpen(false)}>
							Закрыть
						</Button>
					</Box>
				</Box>
			</Modal>
		</Box>
	);
};

export default LoanParams;

