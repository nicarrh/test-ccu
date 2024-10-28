import * as Yup from 'yup';

const validationLoginSchema = Yup.object().shape({
  username: Yup.string().min(2).max(50).required('Nombre de usuario es requerido'),
  password: Yup.string().min(5).max(50).required('Contraseña es requerida'),
});

export default { validationLoginSchema };
