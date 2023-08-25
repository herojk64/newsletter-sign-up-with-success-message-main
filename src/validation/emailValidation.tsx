import * as Yup from "yup";

export interface emailFormValidation {
  email: string;
}

const emailValidationSchema: Yup.ObjectSchema<emailFormValidation> = Yup.object({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Valid email required"
    )
    .required("Email is required"),
});

export default emailValidationSchema;
