"use client";

import TaskCard from "@/components/TaskCard";
import TaskDialog from "@/components/ui/TaskDialog";
import { Task } from "@mui/icons-material";
import { Box, Container, CssBaseline } from "@mui/material";
import React from "react";

export default function Home() {
  const [open, setOpen] = React.useState(false);

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
            <TaskCard setOpen={setOpen} />
            <TaskCard setOpen={setOpen} />
            <TaskCard setOpen={setOpen} />
            <TaskCard setOpen={setOpen} />
          </Box>
        </div>
      </Container>

      <TaskDialog open={open} setOpen={setOpen} />
    </main>
  );
}
