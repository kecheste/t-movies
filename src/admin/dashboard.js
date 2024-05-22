import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WifiChannelIcon from "@mui/icons-material/WifiChannel";
import AirplayIcon from "@mui/icons-material/Airplay";
import DashboardInfo from "./dashboardInfo";
import ChannelInfo from "./channelInfo";
import ProgramInfo from "./programInfo";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [selectedTab, setSelectedTab] = useState("dashboard");
  const [addChannelOpened, setAddChannelOpened] = useState(false);
  const [addProgramOpened, setAddProgramOpened] = useState(false);
  const [authenticated, setAuthenticated] = useState(null);

  const [category, setCategory] = useState("");
  const [channel, setChannel] = useState("");
  const [type, setType] = useState("");

  const [channelName, setCHannelName] = useState("");
  const [channels, setChannels] = useState([
    {
      id: 1,
      name: "ABC TV",
      status: "active",
    },
  ]);
  const [programs, setPrograms] = useState([
    {
      id: 2,
      title: "Vikings",
      duration: 4789,
      description: "Medieval fantasy drama",
      status: 0,
    },
  ]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleChannelChange = (event) => {
    setChannel(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("token");
    if (loggedInUser) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  const handleSelectedTab = (tab) => {
    setSelectedTab(tab);
  };

  const openAddChannel = () => {
    setAddChannelOpened(true);
  };

  const handleAddChannel = async (event) => {
    event.preventDefault();
    if (channelName !== "") {
      try {
        const response = await axios.post("http://localhost:3002/channel", {
          name: channelName,
        });
        channels.push(response.data);
      } catch (error) {
        console.error("Error adding channel:", error);
      }
    }
  };

  const openAddProgram = () => {
    setAddProgramOpened(true);
  };

  if (!authenticated) {
    navigate("/admin");
  }

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get("http://localhost:3002/program"); // Replace with your API endpoint
        const data = response.data;
        setPrograms(data);
      } catch (error) {
        console.error("Error fetching programs:", error);
      }
    };
    const fetchChannels = async () => {
      try {
        const response = await axios.get("http://localhost:3002/channel"); // Replace with your API endpoint
        const data = response.data;
        setChannels(data);
      } catch (error) {
        console.error("Error fetching channels:", error);
      }
    };

    fetchChannels();
    fetchPrograms();
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      {addChannelOpened && (
        <Box
          sx={{
            position: "absolute",
            height: 500,
            width: 1200,
            bgcolor: "white",
            borderRadius: 4,
            p: 5,
            zIndex: 1000,
            top: "20%",
            left: "18%",
            boxShadow:
              "0 0 10px 0 rgba(0, 0, 0, 0.2), 0 8px 8px 0 rgba(0, 0, 0, 0.05)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: 10,
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 600 }}>
            Add Channel
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", my: 3 }}>
            <Typography variant="h5" sx={{ my: 3 }}>
              Name
            </Typography>
            <TextField
              value={channelName}
              onChange={(e) => setCHannelName(e.target.value)}
              variant="filled"
              sx={{
                width: 400,
                "& .MuiFilledInput-root": {
                  borderRadius: 2,
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#e0e0eb",
                  },
                },
                "& .MuiInputBase-input": {
                  fontSize: "1.2rem",
                  padding: "12px 15px",
                },
                "& .MuiFormLabel-root": {
                  fontSize: "1.1rem",
                  color: "#757575",
                  "&.Mui-focused": {
                    color: "#3f51b5",
                  },
                },
              }}
            />
          </Box>

          <Box sx={{ alignSelf: "flex-end", display: "flex", mt: 3 }}>
            <Button
              onClick={() => setAddChannelOpened(false)}
              sx={{
                bgcolor: "#fff",
                border: "2px solid #131524",
                fontSize: 20,
                color: "#131524",
                mr: 2,
                px: 4,
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleAddChannel}
              sx={{
                bgcolor: "#131524",
                color: "white",
                fontSize: 20,
                ml: 2,
                px: 4,
                "&:hover": {
                  bgcolor: "grey",
                  color: "white",
                },
              }}
            >
              Add
            </Button>
          </Box>
        </Box>
      )}
      {addProgramOpened && (
        <Box
          sx={{
            position: "absolute",
            height: 500,
            width: 1200,
            bgcolor: "white",
            borderRadius: 4,
            p: 5,
            zIndex: 1000,
            top: "20%",
            left: "18%",
            boxShadow:
              "0 0 10px 0 rgba(0, 0, 0, 0.2), 0 8px 8px 0 rgba(0, 0, 0, 0.05)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: 10,
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 600 }}>
            Add Program
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 10,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", my: 3 }}>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Video URL
              </Typography>
              <TextField
                variant="filled"
                sx={{
                  width: 400,
                  "& .MuiFilledInput-root": {
                    borderRadius: 2,
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#e0e0eb",
                    },
                  },
                  "& .MuiInputBase-input": {
                    fontSize: "1.2rem",
                    padding: "12px 15px",
                  },
                  "& .MuiFormLabel-root": {
                    fontSize: "1.1rem",
                    color: "#757575",
                    "&.Mui-focused": {
                      color: "#3f51b5",
                    },
                  },
                }}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", my: 3 }}>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Title
              </Typography>
              <TextField
                variant="filled"
                sx={{
                  width: 400,
                  "& .MuiFilledInput-root": {
                    borderRadius: 2,
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#e0e0eb",
                    },
                  },
                  "& .MuiInputBase-input": {
                    fontSize: "1.2rem",
                    padding: "12px 15px",
                  },
                  "& .MuiFormLabel-root": {
                    fontSize: "1.1rem",
                    color: "#757575",
                    "&.Mui-focused": {
                      color: "#3f51b5",
                    },
                  },
                }}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 10 }}>
            <Box sx={{ display: "flex", flexDirection: "column", my: 1 }}>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Duration
              </Typography>
              <TextField
                variant="filled"
                sx={{
                  width: 400,
                  "& .MuiFilledInput-root": {
                    borderRadius: 2,
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#e0e0eb",
                    },
                  },
                  "& .MuiInputBase-input": {
                    fontSize: "1.2rem",
                    padding: "12px 15px",
                  },
                  "& .MuiFormLabel-root": {
                    fontSize: "1.1rem",
                    color: "#757575",
                    "&.Mui-focused": {
                      color: "#3f51b5",
                    },
                  },
                }}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", my: 1 }}>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Category
              </Typography>
              <FormControl variant="filled" sx={{ width: 400 }}>
                <Select
                  labelId="category"
                  id="category"
                  value={category}
                  onChange={handleCategoryChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 10 }}>
            <Box sx={{ display: "flex", flexDirection: "column", my: 1 }}>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Channel
              </Typography>
              <FormControl variant="filled" sx={{ width: 400 }}>
                <Select
                  labelId="category"
                  id="category"
                  value={channel}
                  onChange={handleChannelChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", my: 1 }}>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Type
              </Typography>
              <FormControl variant="filled" sx={{ width: 400 }}>
                <Select
                  labelId="category"
                  id="category"
                  value={type}
                  onChange={handleTypeChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box sx={{ alignSelf: "flex-end", display: "flex", mt: 3 }}>
            <Button
              onClick={() => setAddProgramOpened(false)}
              sx={{
                bgcolor: "#fff",
                border: "2px solid #131524",
                fontSize: 20,
                color: "#131524",
                mr: 2,
                px: 4,
              }}
            >
              Cancel
            </Button>
            <Button
              sx={{
                bgcolor: "#131524",
                color: "white",
                fontSize: 20,
                ml: 2,
                px: 4,
                "&:hover": {
                  bgcolor: "grey",
                  color: "white",
                },
              }}
            >
              Add
            </Button>
          </Box>
        </Box>
      )}
      <Grid
        container
        spacing={0}
        sx={{
          filter: `${addChannelOpened || addProgramOpened ? "blur(2px)" : ""}`,
          opacity: `${addChannelOpened || addProgramOpened ? "0.5" : "1"}`,
        }}
      >
        <Grid
          item
          xs={2.5}
          sx={{
            display: "flex",
            flexDirection: "column",
            bgcolor: "#fff",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pl: 6,
              height: 70,
              mb: 2,
              boxShadow: "0 4px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              src="./logo.png"
              alt="logo"
              width={60}
              height={60}
              style={{
                objectFit: "contain",
              }}
            />
            <Typography
              variant="h2"
              sx={{ fontSize: 30, mx: 1, fontWeight: 500 }}
            >
              T-Movie
            </Typography>
          </Box>
          <Box
            onClick={() => handleSelectedTab("dashboard")}
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              bgcolor: `${selectedTab === "dashboard" ? "#131524" : "#fff"}`,
              pl: 4,
              py: 1,
            }}
          >
            <DashboardIcon
              sx={{
                fontSize: 30,
                color: `${selectedTab === "dashboard" ? "white" : "black"}`,
              }}
            />
            <Typography
              variant="h3"
              sx={{
                fontSize: 30,
                mx: 1,
                color: `${selectedTab === "dashboard" ? "white" : "black"}`,
              }}
            >
              Dashboard
            </Typography>
          </Box>
          <Box
            onClick={() => handleSelectedTab("channel")}
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              pl: 4,
              py: 1,
              bgcolor: `${selectedTab === "channel" ? "#131524" : "#fff"}`,
            }}
          >
            <WifiChannelIcon
              sx={{
                fontSize: 30,
                color: `${selectedTab === "channel" ? "white" : "black"}`,
              }}
            />
            <Typography
              variant="h3"
              sx={{
                fontSize: 30,
                mx: 1,
                color: `${selectedTab === "channel" ? "white" : "black"}`,
              }}
            >
              Channel
            </Typography>
          </Box>
          <Box
            onClick={() => handleSelectedTab("program")}
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              pl: 4,
              py: 1,
              bgcolor: `${selectedTab === "program" ? "#131524" : "#fff"}`,
            }}
          >
            <AirplayIcon
              sx={{
                fontSize: 30,
                color: `${selectedTab === "program" ? "white" : "black"}`,
              }}
            />
            <Typography
              variant="h3"
              sx={{
                fontSize: 30,
                mx: 1,
                color: `${selectedTab === "program" ? "white" : "black"}`,
              }}
            >
              Program
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={9.5}
          sx={{
            height: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ bgcolor: "#131524", py: 1.8, px: 10 }}>
            <Typography variant="h4" sx={{ color: "white" }}>
              {selectedTab === "dashboard" && "Dashboard"}
              {selectedTab === "channel" && "Channel"}
              {selectedTab === "program" && "Program"}
            </Typography>
          </Box>
          <Box
            sx={{
              bgcolor: "#f0f0f5",
              p: 3,
              height: "85vh",
              overflowY: "scroll",
            }}
          >
            {selectedTab === "dashboard" && <DashboardInfo />}
            {selectedTab === "channel" && (
              <ChannelInfo
                openAddChannel={openAddChannel}
                channels={channels}
              />
            )}
            {selectedTab === "program" && (
              <ProgramInfo
                openAddProgram={openAddProgram}
                programs={programs}
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
