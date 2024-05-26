import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Chip } from "@mui/material";
import { ITask } from "@/types";
import { useDispatch } from "react-redux";
import { setOpen, setSelectedTask } from "@/redux/slices/dialogSlice";

export default function TaskCard({ task }: { task: ITask }) {
  const dispatch = useDispatch();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardActionArea
        onClick={() => {
          dispatch(setOpen(true));
          dispatch(setSelectedTask(task));
        }}
      >
        <CardContent>
          <Chip label={task.status} variant="outlined" size="small" color="primary" />
          <Typography variant="h5" component="div" marginTop={1}>
            {task.title}
          </Typography>
          <Typography variant="body2" marginTop={1}>
            {task.description}
          </Typography>

          {task.dueDate && (
            <Box marginTop={1}>
              <Typography variant="body2" color="text.secondary">
                Due Date: {task.dueDate}
              </Typography>
            </Box>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
