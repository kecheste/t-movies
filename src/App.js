import "./App.css";
import { Box, Grid, Link } from "@mui/material";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import Channel from "./components/channel";
import NavBar from "./components/navbar";
import Info from "./components/info";
import Types from "./components/types";
import { useEffect, useRef, useState } from "react";

function App() {
  const channels = [
    { name: "FOX TV", logo: "./assets/channels/fox-logo.png" },
    { name: "ABC TV", logo: "./assets/channels/abc-logo.png" },
    { name: "AMC TV", logo: "./assets/channels/amc-logo.png" },
    { name: "NBC TV", logo: "./assets/channels/nbc-logo.png" },
    { name: "HBO", logo: "./assets/channels/hbo-logo.png" },
    { name: "City TV", logo: "./assets/channels/nbc-logo.png" },
    { name: "ESPN", logo: "./assets/channels/espn-logo.png" },
    { name: "Disney", logo: "./assets/channels/disney-logo.png" },
    { name: "CNN", logo: "./assets/channels/cnn-logo.png" },
  ];
  const containerRef = useRef(null);
  const [extendedChannels, setExtendedChannels] = useState([
    ...channels,
    ...channels,
  ]);
  const [selectedChannelIndex, setSelectedChannelIndex] = useState(
    Math.floor(channels.length / 2)
  );

  const getCenterIndex = () => {
    const container = containerRef.current;
    const centerPosition = container.scrollTop + container.clientHeight / 2;
    const itemHeight = container.firstChild.clientHeight;
    const centerIndex = Math.floor(centerPosition / itemHeight);
    return centerIndex % channels.length;
  };

  const handleScroll = () => {
    const centerIndex = getCenterIndex();
    setSelectedChannelIndex(centerIndex);

    if (
      containerRef.current.scrollTop + containerRef.current.clientHeight >=
      containerRef.current.scrollHeight
    ) {
      setExtendedChannels((prev) => [...prev, ...channels]);
    }
  };

  const handleClick = (index) => {
    setSelectedChannelIndex(index);
    const container = containerRef.current;
    const itemHeight = container.firstChild.clientHeight;
    const targetScrollTop =
      index * itemHeight - container.clientHeight / 2 + itemHeight / 2;
    container.scrollTop = targetScrollTop;
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [channels]);

  useEffect(() => {
    const container = containerRef.current;
    const itemHeight = container.firstChild.clientHeight;
    const targetScrollTop =
      selectedChannelIndex * itemHeight -
      container.clientHeight / 2 +
      itemHeight / 2;
    container.scrollTop = targetScrollTop;
  }, [selectedChannelIndex]);

  const [selectedTab, setSelectedTab] = useState("tv");

  return (
    <div className="App">
      <Box sx={{ p: 12, height: "79vh", maxHeight: "79vh" }}>
        <Grid
          container
          spacing={2}
          sx={{ bgcolor: "#0f0f2e", borderRadius: 5 }}
        >
          <Grid item xs={2} sx={{ height: "80vh" }}>
            <Box
              sx={{
                py: 4,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                width={100}
                height={100}
                src="./assets/images/logo.png"
                alt="logo"
              />
              <Box
                sx={{
                  mt: 16,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Link
                  onClick={() => setSelectedTab("tv")}
                  href="#"
                  sx={{
                    textAlign: "center",
                    height: 45,
                    width: 45,
                    borderRadius: "50%",
                    mb: 2,
                    p: 2,
                    bgcolor: selectedTab === "tv" ? "#222557" : "#1b1c3a",
                    color: "#fff",
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: "#222557",
                    },
                  }}
                >
                  <LiveTvIcon sx={{ width: 30, height: 30, mt: 0.7 }} />
                </Link>
                <Link
                  onClick={() => setSelectedTab("favorites")}
                  href="#"
                  sx={{
                    textAlign: "center",
                    height: 45,
                    width: 45,
                    borderRadius: "50%",
                    p: 2,
                    mb: 2,
                    bgcolor:
                      selectedTab === "favorites" ? "#222557" : "#1b1c3a",
                    color: "#fff",
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: "#222557",
                    },
                  }}
                >
                  <StarIcon sx={{ width: 30, height: 30, mt: 0.7 }} />
                </Link>
                <Link
                  onClick={() => setSelectedTab("later")}
                  href="#"
                  sx={{
                    textAlign: "center",
                    height: 45,
                    width: 45,
                    borderRadius: "50%",
                    p: 2,
                    mb: 2,
                    bgcolor: selectedTab === "later" ? "#222557" : "#1b1c3a",
                    color: "#fff",
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: "#222557",
                    },
                  }}
                >
                  <AccessTimeFilledIcon
                    sx={{ width: 30, height: 30, mt: 0.7 }}
                  />
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid
            ref={containerRef}
            item
            xs={2}
            sx={{ height: "80vh", overflowY: "scroll" }}
          >
            <Box
              sx={{
                pl: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              {extendedChannels.map((channel, index) => (
                <Channel
                  key={index}
                  channel={channel}
                  isSelected={index % channels.length === selectedChannelIndex}
                  onClick={() => handleClick(index % channels.length)}
                />
              ))}
            </Box>
          </Grid>
          <Grid
            item
            xs={8}
            sx={{ height: "80vh", display: "flex", flexDirection: "column" }}
          >
            <NavBar />
            <Info />
            <Box
              sx={{
                overflowX: "scroll",
              }}
            >
              <Types />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
