import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea, Chip } from "@mui/material";

export default function TaskCard({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardActionArea onClick={()=>setOpen(true)}>
        <CardContent>
          <Chip label="In Progress" variant="outlined" size="small" />
          <Typography variant="h5" component="div" marginTop={1}>
            A Task Title
          </Typography>
          <Typography variant="body2" marginTop={1}>
            Task Description goes here. This is a task description that is a bit
            longer than the title. It should be a bit more detailed.
          </Typography>

          <Typography variant="body2" marginTop={1}>
            Due Date: 12/12/2021
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
