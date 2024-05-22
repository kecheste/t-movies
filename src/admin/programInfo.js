import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useMemo } from "react";
import SearchIcon from "@mui/icons-material/Search";
import IosShareIcon from "@mui/icons-material/IosShare";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

function ProgramInfo({ openAddProgram, programs }) {
  const data = useMemo(
    () =>
      programs.map((program) => {
        return {
          id: program.id,
          title: program.title,
          duration: program.duration,
          description: program.description,
          status: program.status,
        };
      }),
    [programs]
  ); // Use useMemo to memoize the data array

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "Id",
        muiTableHeadCellProps: { sx: { color: "red" } },
        Header: <strong style={{ color: "green", fontSize: 20 }}>Id</strong>,
      },
      {
        accessorFn: (row) => row.title,
        id: "title",
        header: "Title",
        Header: <strong style={{ color: "grey", fontSize: 20 }}>Title</strong>,
      },
      {
        accessorFn: (row) => row.duration,
        id: "duration",
        header: "Duration",
        Header: (
          <strong style={{ color: "grey", fontSize: 20 }}>Duration</strong>
        ),
      },
      {
        accessorFn: (row) => row.description,
        id: "description",
        header: "Description",
        Header: (
          <strong style={{ color: "grey", fontSize: 20 }}>Description</strong>
        ),
      },
      {
        accessorFn: (row) => row.status,
        id: "status",
        header: "Status",
        Header: <strong style={{ color: "grey", fontSize: 20 }}>Status</strong>,
      },
      {
        id: "action",
        header: "action",
        Header: <strong style={{ color: "grey", fontSize: 20 }}>Action</strong>,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    data,
    columns,
  });

  return (
    <Box
      sx={{
        bgcolor: "white",
        height: "auto",
        borderRadius: 3,
        boxShadow:
          "0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 6px 0 rgba(0, 0, 0, 0.05)",
        px: 8,
        py: 3,
        pb: 10,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextField
          hiddenLabel
          variant="filled"
          type="text"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton edge="start">
                  <SearchIcon sx={{ fontSize: 30, pl: 2 }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            width: "60%",
            borderRadius: 2,
            "& .MuiFilledInput-root": {
              backgroundColor: "#f0f0f5",
              borderRadius: 2,
              "&:before": {
                borderBottom: "none",
              },
              "&:after": {
                borderBottom: "none",
              },
              "&:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
              "&.Mui-focused": {
                borderBottom: "none",
              },
            },
            "& .MuiInputBase-input": {
              paddingLeft: 0,
            },
            "& .MuiInputAdornment-root": {
              marginRight: 0,
            },
            "& .MuiIconButton-root": {
              padding: 0,
            },
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "30%",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton edge="start">
              <IosShareIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <Typography variant="h5" sx={{ fontSize: 20 }}>
              Export
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton edge="start">
              <FilterListIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <Typography variant="h5" sx={{ fontSize: 20 }}>
              Add Filter
            </Typography>
          </Box>
          <Button
            onClick={openAddProgram}
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "#131524",
              px: 3,
              py: 1,
              borderRadius: 2,
              cursor: "pointer",
              color: "white",
              "&:hover": {
                bgcolor: "grey",
                color: "white",
              },
            }}
          >
            Add Program
          </Button>
        </Box>
      </Box>
      <Divider sx={{ mt: 3, mb: 3, p: 0.1 }} color="#ccc" />
      <MaterialReactTable table={table} />
    </Box>
  );
}

export default ProgramInfo;
