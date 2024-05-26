"use client";

import React from "react";
import TaskCard from "@/components/TaskCard";
import { Box, Container, CssBaseline, Fab } from "@mui/material";
import { useGetAllTasksQuery } from "@/redux/api/taskApi";
import { ITask } from "@/types";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { setOpen } from "@/redux/slices/dialogSlice";

export default function PendingPage() {
  const { data, isLoading } = useGetAllTasksQuery({ status: "pending" });
  const dispatch = useDispatch();

  return (
    <div>
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
              <TaskCard key={task.id} task={task} />
            ))}
          </Box>
        </div>
      </Container>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: 40, right: 40 }}
        onClick={() => dispatch(setOpen(true))}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}
