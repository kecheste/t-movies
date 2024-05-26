import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./admin/dashboard";
import AdminLogin from "./admin/login";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Login from "./components/login";
import api from "./api";
import { Box, CircularProgress } from "@mui/material";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get("/auth/login/success");
        if (response.data.user) {
          setUser(response.data.user._json);
        }
      } catch (error) {
        console.log("Error fetching user!");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "background.default",
          color: "text.primary",
        }}
      >
        <CircularProgress
          sx={{
            color: "primary.main",
            size: 60,
          }}
        />
      </Box>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
