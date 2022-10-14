import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  amount: Yup.number()
    .typeError("Invalid Input")
    .required("- You must fill in the amount field"),
  remark: Yup.string().min(3).required("- All fields must be filled."),
  cashType: Yup.string().required("- Please select an option"),
  category: Yup.string().required("- Please select an option"),
});
