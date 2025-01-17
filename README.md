# react-loan-forms

# Инструкция по запуску проекта

---

## Описание проекта

Тестовое задание - форма сбора информации о пользователе и оформление займа

---

## Использованные библиотеки

1. **React**
2. **Formik** — формы и их валидация
3. **Yup** — валидация схем форм
4. **Material-UI** — готовый ui kit
5. **Axios** — запросы
6. **React Router** — навигация

---

### Почему именно так:

- **Почему нет Bootstrap?**  
  Вся стилизация идет под капотом Material UI, если бы на руках был дизайн или референс, то Bootstap использовался бы для
  более точной верстке компонентов и страниц

- **Почему сессионное хранилище, а не MobX или Redux?**  
  Для этого небольшого проекта с несколькими формами сессионное хранилище оказалось наиболее удобным решением. Нет необходимости в глобальном состоянии данных, а только в временном хранении между страницами

---

## Как запустить проект

1. Клонируем репозиторий через SSH
2. Устанавливаем зависимости (npm run install)
3. Фиксим зависимости после установки (если вдруг у хоста выброс радиации и пакеты долетели не полностью) (npm audit fix)
4. Запускаем проект (npm run start)

## Сколько было потрачено времени

Было потрачено около 3-4 часов
1-2 часа на верстку страниц и подключение библиотек
Остаток времени багфикс, отлавливание исключений и обработка ошибок

## Анекдот (даже если не свяжемся после, то хотя бы улыбнет)

Журналист:

- Сколько молока дают эти коровы?
  Фермер:
- Которая? Черная или коричневая?
- Коричневая.
- Пять литров в день.
- А черная?
- Пять литров в день.
- Понятно. Чем вы их кормите?
- Которую? Черную или коричневую?
- Черную.
- Она ест траву.
- А вторая?
- Траву.
  –..!!! Почему вы продолжаете спрашивать "Которую" когда ответы одинаковы!
- Потому что черная моя.
- Да, а коричневая?
- Тоже моя...
