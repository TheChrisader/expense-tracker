import * as Yup from "yup";

export const initialValues = {
  amount: "",
  remark: "",
  thing: "",
};

export const validationSchema = Yup.object().shape({
  amount: Yup.number()
    .typeError("Invalid Input")
    .required("You must fill in the amount field"),
  remark: Yup.string().required("- All fields must be filled."),
  thing: Yup.string().required("- All fields must be filled."),
});
