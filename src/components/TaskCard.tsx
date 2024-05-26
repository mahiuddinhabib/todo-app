import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea, Chip } from "@mui/material";
import { ITask } from "@/types";

export default function TaskCard({
  setOpen,
  task,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  task: ITask;
}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardActionArea onClick={() => setOpen(true)}>
        <CardContent>
          <Chip label={task.status} variant="outlined" size="small" />
          <Typography variant="h5" component="div" marginTop={1}>
            {task.title}
          </Typography>
          <Typography variant="body2" marginTop={1}>
            {task.description}
          </Typography>

          {
            task.dueDate && (
              <Box marginTop={1}>
                <Typography variant="body2" color="text.secondary">
                  Due Date: {task.dueDate}
                </Typography>
              </Box>
            )
          }
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
