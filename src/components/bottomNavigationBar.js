import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

const TabBarButton = styled(BottomNavigationAction)({
  color: "white",
  "&.Mui-selected": {
    color: "grey",
  },
});

function BottomNavigationBar({ selectedTab, setSelectedTab, user }) {
  const [value, setValue] = useState(0);
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        sx={{
          display: { md: "none", lg: "none", sm: "flex", xs: "flex" },
          bgcolor: "primary.main",
        }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <TabBarButton
          sx={{
            fontSize: 25,
          }}
          icon={
            <LiveTvIcon
              color="white"
              sx={{
                borderRadius: "50%",
                border: "1px solid #2e3252",
                p: 1.3,
                bgcolor: "secondary.main",
                fontSize: 18,
              }}
            />
          }
          showLabel={false}
          onClick={() => setSelectedTab("tv")}
        />
        <TabBarButton
          sx={{
            fontSize: 25,
          }}
          icon={
            <StarIcon
              color="white"
              sx={{
                borderRadius: "50%",
                border: "1px solid #2e3252",
                p: 1.3,
                bgcolor: "secondary.main",
                fontSize: 18,
              }}
            />
          }
          showLabel={false}
          onClick={() => setSelectedTab("favorites")}
        />
        <TabBarButton
          sx={{
            fontSize: 25,
          }}
          icon={
            <AccessTimeFilledIcon
              color="white"
              sx={{
                borderRadius: "50%",
                border: "1px solid #2e3252",
                p: 1.3,
                bgcolor: "secondary.main",
                fontSize: 18,
              }}
            />
          }
          showLabel={false}
          onClick={() => setSelectedTab("later")}
        />
        <BottomNavigationAction
          onClick={() => setSelectedTab("profile")}
          icon={
            <img
              alt="profile"
              src={user.picture}
              style={{
                borderRadius: "50%",
                height: 40,
                width: 40,
                objectFit: "cover",
                backgroundPosition: "center",
                cursor: "pointer",
                border: value === 3 ? "2px solid" : "none",
                borderColor: value === 3 ? "secondary.main" : "transparent",
              }}
            />
          }
        />
      </BottomNavigation>
    </Paper>
  );
}

export default BottomNavigationBar;
