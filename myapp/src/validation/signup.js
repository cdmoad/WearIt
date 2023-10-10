import * as yup from 'yup';


export const validationSchema = yup.object().shape({
    name:yup.string().required('Name is required').min(8, 'Name must be at least 8 characters').max(40,"Name must be at least 8 characters"),
    email: yup.string().required('Email is required').email('Invalid email address'),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
    password_confirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
});