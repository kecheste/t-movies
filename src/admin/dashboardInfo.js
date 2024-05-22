import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import IosShareIcon from "@mui/icons-material/IosShare";
import FilterListIcon from "@mui/icons-material/FilterList";
import GroupIcon from "@mui/icons-material/Group";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import CircleIcon from "@mui/icons-material/Circle";

function DashboardInfo() {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const lineData = [
    {
      name: "MON",
      recommended: 23,
      popular: 14,
      featured: 43,
      favorites: 23,
      later: 32,
    },
    {
      name: "TUE",
      recommended: 15,
      popular: 53,
      featured: 26,
      favorites: 65,
      later: 34,
    },
    {
      name: "WED",
      recommended: 54,
      popular: 34,
      featured: 23,
      favorites: 54,
      later: 73,
    },
    {
      name: "THUR",
      recommended: 52,
      popular: 34,
      featured: 52,
      favorites: 62,
      later: 15,
    },
    {
      name: "FRI",
      recommended: 62,
      popular: 26,
      featured: 16,
      favorites: 53,
      later: 23,
    },
    {
      name: "SAT",
      recommended: 23,
      popular: 71,
      featured: 26,
      favorites: 16,
      later: 33,
    },
    {
      name: "SUN",
      recommended: 24,
      popular: 23,
      featured: 15,
      favorites: 16,
      later: 43,
    },
  ];
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "#131524",
              px: 3,
              py: 1,
              borderRadius: 2,
            }}
          >
            <Typography variant="h5" sx={{ fontSize: 20, color: "white" }}>
              Add Filter
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ mt: 3, mb: 3, p: 0.1 }} color="#ccc" />
      {/* SYSTEM INFO */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: 350,
            borderRadius: 2,
            p: 5,
            boxShadow:
              "0 2px 2px 1px rgba(0, 0, 0, 0.2), 0 2px 2px 2px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5" sx={{ fontSize: 25, fontWeight: 500 }}>
              System User
            </Typography>
            <GroupIcon
              sx={{
                fontSize: 35,
                color: "white",
                bgcolor: "#131524",
                p: 1,
                borderRadius: 2,
              }}
            />
          </Box>
          <Typography
            variant="h5"
            sx={{ fontSize: 30, mt: 2, fontWeight: 600 }}
          >
            37
          </Typography>
          <Typography variant="h5" sx={{ fontSize: 25, mt: 1 }}>
            +12% This Month
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: 350,
            borderRadius: 2,
            p: 5,
            boxShadow:
              "0 2px 2px 1px rgba(0, 0, 0, 0.2), 0 2px 2px 2px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5" sx={{ fontSize: 25, fontWeight: 500 }}>
              Program
            </Typography>
            <GroupIcon
              sx={{
                fontSize: 35,
                color: "white",
                bgcolor: "#131524",
                p: 1,
                borderRadius: 2,
              }}
            />
          </Box>
          <Typography
            variant="h5"
            sx={{ fontSize: 30, mt: 2, fontWeight: 600 }}
          >
            37
          </Typography>
          <Typography variant="h5" sx={{ fontSize: 25, mt: 1 }}>
            +12% This Month
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: 350,
            borderRadius: 2,
            p: 5,
            boxShadow:
              "0 2px 2px 1px rgba(0, 0, 0, 0.2), 0 2px 2px 2px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5" sx={{ fontSize: 25, fontWeight: 500 }}>
              Channel
            </Typography>
            <GroupIcon
              sx={{
                fontSize: 35,
                color: "white",
                bgcolor: "#131524",
                p: 1,
                borderRadius: 2,
              }}
            />
          </Box>
          <Typography
            variant="h5"
            sx={{ fontSize: 30, mt: 2, fontWeight: 600 }}
          >
            37
          </Typography>
          <Typography variant="h5" sx={{ fontSize: 25, mt: 1 }}>
            +12% This Month
          </Typography>
        </Box>
      </Box>
      {/* PIE CHART */}
      <Box
        sx={{
          mt: 8,
          width: "700px",
          height: "350px",
          borderRadius: 2,
          position: "relative",
          display: "flex",
          boxShadow:
            "0 2px 2px 1px rgba(0, 0, 0, 0.2), 0 2px 2px 2px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            bgcolor: "black",
            borderRadius: 2,
            position: "absolute",
            color: "white",
            fontSize: 30,
            py: 2,
            px: 3,
            top: -30,
            left: 30,
          }}
        >
          Program with Category
        </Typography>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            innerRadius={80}
            outerRadius={110}
            fill="#8884d8"
            paddingAngle={10}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <Box sx={{ display: "flex", flexDirection: "column", mt: 10 }}>
          {data.map((entry, index) => (
            <Box
              key={`cell-${index}`}
              sx={{ display: "flex", alignItems: "center", mb: 1 }}
            >
              <CircleIcon
                sx={{ color: `${COLORS[index % COLORS.length]}`, fontSize: 30 }}
              />
              <Typography
                variant="h5"
                sx={{ fontSize: 20, fontWeight: 500, ml: 1 }}
              >
                {entry.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      {/* LINE GRAPH */}
      <Box
        sx={{
          mt: 8,
          width: "1000px",
          height: "400px",
          borderRadius: 2,
          position: "relative",
          display: "flex",
          boxShadow:
            "0 2px 2px 1px rgba(0, 0, 0, 0.2), 0 2px 2px 2px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            bgcolor: "black",
            borderRadius: 2,
            position: "absolute",
            color: "white",
            fontSize: 30,
            py: 2,
            px: 3,
            top: -30,
            left: 30,
          }}
        >
          Program with Type
        </Typography>
        <ResponsiveContainer width="80%" height="100%">
          <LineChart
            layout="horizontal"
            width={500}
            height={300}
            data={lineData}
            margin={{
              top: 60,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis dataKey="recommended" />
            <Tooltip />
            <Legend />
            <Line dataKey="recommended" stroke="#8884d8" />
            <Line dataKey="popular" stroke="#0088FE" />
            <Line dataKey="featured" stroke="#FF8042" />
            <Line dataKey="favorites" stroke="#FFBB28" />
            <Line dataKey="later" stroke="#00C49F" />
          </LineChart>
        </ResponsiveContainer>
        <Box sx={{ display: "flex", flexDirection: "column", mt: 10 }}>
          {lineData.map((entry, index) => (
            <Box
              key={`cell-${index}`}
              sx={{ display: "flex", alignItems: "center", mb: 1 }}
            >
              <CircleIcon
                sx={{ color: `${COLORS[index % COLORS.length]}`, fontSize: 30 }}
              />
              <Typography
                variant="h5"
                sx={{ fontSize: 20, fontWeight: 500, ml: 1 }}
              >
                {entry.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardInfo;
