import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";

function Login() {
  const googleAuth = () => {
    window.open(`${process.env.REACT_APP_BACKEND_URL}/auth/google`, "_self");
  };

  return (
    <Box
      sx={{
        padding: 0,
        margin: 0,
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "secondary.main",
      }}
    >
      <Container
        sx={{
          width: "80%",
          height: "70vh",
          margin: "0 auto",
          padding: "40px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#333332",
          borderRadius: "15px",
          backgroundImage: "url(./assets/bg.png)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              alt="profile"
              src="./logo.png"
              style={{
                borderRadius: "50%",
                height: 60,
                width: 60,
                objectFit: "cover",
                backgroundPosition: "center",
                cursor: "pointer",
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontSize: "45px",
                marginBottom: "20px",
                color: "white",
                fontFamily: "monospace",
                margin: 0,
                padding: 0,
                marginLeft: "15px",
                cursor: "pointer",
              }}
            >
              T-Movie
            </Typography>
          </Box>

          <Button
            variant="outlined"
            sx={{
              borderColor: "white",
              borderRadius: "25px",
              color: "white",
              padding: "15px 45px",
              fontSize: "15px",
              fontWeight: "800",
              marginRight: "50px",
              "&:hover": {
                backgroundColor: "primary.main",
                borderColor: "white",
              },
            }}
            onClick={googleAuth}
          >
            Get Access with Google
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography
            sx={{
              width: "50%",
              fontSize: 50,
              mt: 30,
              color: "white",
              textAlign: "left",
              fontWeight: 500,
            }}
          >
            Welcome to T-Movies! Enjoy your favorite movies and TV shows.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Login;
