import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WifiChannelIcon from "@mui/icons-material/WifiChannel";
import AirplayIcon from "@mui/icons-material/Airplay";
import DashboardInfo from "./dashboardInfo";
import ChannelInfo from "./channelInfo";
import ProgramInfo from "./programInfo";
import { useNavigate } from "react-router-dom";
import api from "../api";
import AddChannel from "./components/addChannel";
import AddProgram from "./components/addProgram";
import { SocketProvider, useSocket } from "../SocketContext";

function Dashboard() {
  const socket = useSocket();
  const [data, setData] = useState({
    userCount: 0,
    channelCount: 0,
    programCount: 0,
  });
  const [selectedTab, setSelectedTab] = useState("dashboard");
  const [addChannelOpened, setAddChannelOpened] = useState(false);
  const [addProgramOpened, setAddProgramOpened] = useState(false);
  const [authenticated, setAuthenticated] = useState(null);

  const [channels, setChannels] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);

  const navigate = useNavigate();

  const handleSelectedTab = (tab) => {
    setSelectedTab(tab);
  };

  const openAddChannel = () => {
    setAddChannelOpened(true);
  };

  const openAddProgram = () => {
    setAddProgramOpened(true);
  };

  if (!authenticated) {
    navigate("/admin");
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("token");
    if (loggedInUser) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }

    const fetchPrograms = async () => {
      try {
        const response = await api.get("/program");
        const data = response.data;
        setPrograms(data);
      } catch (error) {
        console.error("Error fetching programs:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await api.get("/category");
        const data = response.data;
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchTypes = async () => {
      try {
        const response = await api.get("/type");
        const data = response.data;
        setTypes(data);
      } catch (error) {
        console.error("Error fetching types:", error);
      }
    };

    const fetchChannels = async () => {
      try {
        const response = await api.get("/channel");
        const data = response.data;
        setChannels(data);
      } catch (error) {
        console.error("Error fetching channels:", error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await api.get("/");
        const data = response.data;
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
    fetchChannels();
    fetchPrograms();
    fetchCategories();
    fetchTypes();
  }, []);

  useEffect(() => {
    if (socket == null) return;

    socket.on("initialData", (initialData) => {
      setData(initialData);
    });

    socket.on("updatedData", (updatedData) => {
      setData(updatedData);
    });

    return () => {
      socket.off("initialData");
      socket.off("updatedData");
    };
  }, [socket]);

  return (
    <SocketProvider>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          position: "relative",
        }}
      >
        {addChannelOpened && (
          <AddChannel
            setAddChannelOpened={setAddChannelOpened}
            channels={channels}
          />
        )}
        {addProgramOpened && (
          <AddProgram
            setAddProgramOpened={setAddProgramOpened}
            channels={channels}
            categories={categories}
            types={types}
            programs={programs}
          />
        )}
        <Grid
          container
          spacing={0}
          sx={{
            filter: `${
              addChannelOpened || addProgramOpened ? "blur(2px)" : ""
            }`,
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
              {selectedTab === "dashboard" && (
                <DashboardInfo
                  categories={categories}
                  data={data}
                  channels={channels}
                  programs={programs}
                  users={users}
                />
              )}
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
    </SocketProvider>
  );
}

export default Dashboard;
