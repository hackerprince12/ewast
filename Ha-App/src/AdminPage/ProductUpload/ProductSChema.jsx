import * as Yup from 'yup';

export const ProductSchema=Yup.object({
  category:Yup.string().min(2).max(25).required("Please enter category name!"),
  name:Yup.string().min(2).max(25).required("Please enter product name!"),
  model:Yup.string().min(2).max(25).required("please enter product's model!"),

   discription:Yup.string().min(6).max(100).required("Please enter product discription!"),
   image:Yup.string().min(2).max(100000).required("enter img url!")
})

