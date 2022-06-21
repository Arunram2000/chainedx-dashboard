import * as Yup from "yup";

export const faqValidationSchema = Yup.object({
  question: Yup.string()
    .min(10, "minimum 10 characters required")
    .max(100, "maximum 100 characters only")
    .required("This field is required"),
  answer: Yup.string()
    .min(30, "minimum 30 characters required")
    .max(100, "maximum 250 characters only")
    .required("This field is required"),
});
