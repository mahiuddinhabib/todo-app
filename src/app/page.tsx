"use client";

import React from "react";
import TaskCard from "@/components/TaskCard";
import TaskDialog from "@/components/ui/TaskDialog";
import { Box, Container, CssBaseline } from "@mui/material";
import { useGetAllTasksQuery } from "@/redux/api/taskApi";
import { ITask } from "@/types";

export default function Home() {
  const [open, setOpen] = React.useState(false);

  const { data, isLoading } = useGetAllTasksQuery({});

  console.log(data, isLoading);

  return (
    <main>
      <CssBaseline />
      <Container maxWidth="lg">
        <div style={{ width: "100%", marginTop: "10px" }}>
          <Box
            sx={{
              display: "grid",
              gap: 2,
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            {data?.map((task: ITask) => (
              <TaskCard key={task.id} task={task} setOpen={setOpen} />
            ))}
          </Box>
        </div>
      </Container>

      <TaskDialog open={open} setOpen={setOpen} />
    </main>
  );
}
