import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ITask } from "@/types";
import Form from "./forms/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { taskSchema } from "@/schemas/taskSchema";
import { FormInputText } from "./forms/FormInputText";
import { FormSelect } from "./forms/FormSelect";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setOpen, setSelectedTask } from "@/redux/slices/dialogSlice";
import {
  useAddTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "@/redux/api/taskApi";
import { DatePickerField } from "./forms/DatePicerField";

export default function TaskDialogForm() {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.dialog.open);
  const selectedTask = useSelector(
    (state: RootState) => state.dialog.selectedTask
  );

  const [addTask] = useAddTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  const onSubmit = async (data: ITask) => {
    if (selectedTask) {
      // Edit Task
      try {
        const res = await updateTask({
          id: selectedTask.id,
          body: data,
        }).unwrap();
        if (res?.id) {
          console.log("Task updated successfully");
          dispatch(setOpen(false));
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      // Add Task
      try {
        const res = await addTask(data).unwrap();
        if (res?.id) {
          console.log("Task added successfully");
          dispatch(setOpen(false));
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDelete = async () => {
    try {
      const res = await deleteTask(selectedTask?.id).unwrap();
      if (res?.id) {
        console.log("Task deleted successfully");
        dispatch(setOpen(false));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    dispatch(setOpen(false));
    dispatch(setSelectedTask(null));
  };

  const statusOptions = [
    { value: "pending", label: "Pending" },
    { value: "in_progress", label: "In Progress" },
    { value: "completed", label: "Completed" },
  ];

  const defaultValues = {
    title: selectedTask?.title || "",
    description: selectedTask?.description || "",
    status: selectedTask?.status || "",
    dueDate: selectedTask?.dueDate || "",
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {selectedTask ? "Edit Task" : "Add Task"}
      </DialogTitle>
      <Form
        submitHandler={onSubmit}
        defaultValues={defaultValues}
        resolver={yupResolver(taskSchema)}
      >
        <DialogContent>
          <FormInputText
            label="title"
            name="title"
            placeholder="Enter task title here"
            required
          />

          <FormInputText
            label="description"
            name="description"
            placeholder="Enter task description here"
            required
          />
          <FormSelect
            label="status"
            name="status"
            selectOptions={statusOptions}
            fullWidth
            required
          />
          {/* <FormInputText
            label="Due Date"
            name="dueDate"
            placeholder="DD/MM/YYYY"
          /> */}
          <DatePickerField label="Due Date" name="dueDate" />
        </DialogContent>
        <DialogActions sx={{gap:2, margin:2}}>
          <Button type="submit" variant="outlined" autoFocus>
            {selectedTask ? "Update" : "Add"}
          </Button>
          {selectedTask && (
            <Button onClick={handleDelete} variant="outlined">
              Delete
            </Button>
          )}
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
        </DialogActions>
      </Form>
    </Dialog>
  );
}
