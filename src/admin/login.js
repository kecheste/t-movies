import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IconButton, InputAdornment } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person2Outlined";
import LockIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../api";

const defaultTheme = createTheme();

export default function AdminLogin() {
  const navigate = useNavigate();
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (phone !== "" || password !== "") {
      try {
        const response = await api.post("/admin/login", {
          phone,
          password,
        });
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      } catch (error) {
        console.log("error");
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          py: 10,
          px: 15,
        }}
      >
        <Grid
          container
          component="main"
          sx={{
            height: "80vh",
          }}
        >
          <CssBaseline />
          <Grid xs={6} sx={{ bgcolor: "black" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pt: 25,
              }}
            >
              <img
                src="./logo.png"
                alt="logo"
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "contain",
                }}
              />
              <Typography
                component="h1"
                variant="h2"
                sx={{
                  fontWeight: 600,
                  fontSize: 80,
                  my: 2,
                  pt: 2,
                  color: "white",
                }}
              >
                T-Movie
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                component="h1"
                variant="h2"
                sx={{ fontWeight: 600, my: 4, mt: 10 }}
              >
                LOGIN
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  onChange={(e) => setPhone(e.target.value)}
                  variant="outlined"
                  label="Phone Number"
                  type="tel"
                  value={phone}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton edge="start">
                          <PersonIcon sx={{ fontSize: 30 }} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    mb: 4,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#ccc",
                      },
                      "&:hover fieldset": {
                        borderColor: "#000",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#000",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "#666",
                    },
                    "& .Mui-focused .MuiInputLabel-root": {
                      color: "#000",
                    },
                  }}
                />
                <TextField
                  onChange={(e) => setPassword(e.target.value)}
                  variant="outlined"
                  label="Password"
                  type="password"
                  value={password}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton edge="start">
                          <LockIcon sx={{ fontSize: 30 }} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    mb: 4,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#ccc",
                      },
                      "&:hover fieldset": {
                        borderColor: "#000",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#000",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "#666",
                    },
                    "& .Mui-focused .MuiInputLabel-root": {
                      color: "#000",
                    },
                  }}
                />
                <Link
                  href="/dashboard"
                  sx={{ textDecoration: "none", color: "white" }}
                >
                  <Button
                    onClick={handleSubmit}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      bgcolor: "black",
                      borderRadius: 2,
                      py: 1,
                      fontSize: 20,
                      "$:hover": {
                        bgcolor: "white",
                      },
                    }}
                  >
                    LOGIN
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
