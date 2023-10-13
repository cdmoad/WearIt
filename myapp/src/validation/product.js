import * as yup from 'yup';


export const validationSchema = yup.object().shape({
    title:yup.string().required('Title is required').min(8, 'Title must be at least 8 characters').max(60,"Title must be at least 8 characters"),
    description: yup.string().required('Description is required') ,
    price: yup.string().required('Price is required') ,
    color: yup.string(). required('Color is required'),
    discount: yup.string().required('Discount is required') ,
    
});