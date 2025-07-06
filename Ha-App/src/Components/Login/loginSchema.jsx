import * as Yup from 'yup';

export const signupSchema=Yup.object({
  name:Yup.string().min(2).max(25).required("Please enter your name!"),
  email:Yup.string().email().required("please enter email!"),
   password:Yup.string().min(6).required("Please enter password!")
})

export const loginSchema=Yup.object({
  email:Yup.string().email().required("please enter email!"),
   password:Yup.string().min(6).required("Please enter password!")
})