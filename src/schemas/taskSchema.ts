import * as yup from "yup";

export const taskSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  status: yup.string().optional(),
  dueDate: yup.string().optional(),
});
