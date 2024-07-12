import { Box, Grid } from "@mui/material";
import { useRef, useState } from "react";
import BottomNavigationBar from "./bottomNavigationBar";
import SideNavigationBar from "./main/sidebar";
import ChannelsSlider from "./main/channelsSlider";
import MainDetail from "./main/mainDetail";

function Home({ user }) {
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

  const [selectedTab, setSelectedTab] = useState("tv");
  const containerRef = useRef(null);
  // const observerRef = useRef(null);
  // const [selectedChannelIndex, setSelectedChannelIndex] = useState(
  //   Math.floor(channels.length / 2)
  // );
  const [selectedChannelIndex, setSelectedChannelIndex] = useState(0);
  const [typeClicked, setTypeClicked] = useState(false);
  const [selectedType, setSelectedType] = useState("Live TV's");

  const handleTypeClick = () => {
    setTypeClicked(true);
  };

  const handleSelectedType = (type) => {
    setSelectedType(type);
  };

  // const handleIntersection = useCallback((entries) => {
  //   entries.forEach((entry) => {
  //     const { top, bottom } = entry.boundingClientRect;
  //     var containerHeight = null;
  //     if (containerRef.current) {
  //       containerHeight = containerRef.current.clientHeight;
  //     }
  //     const isInVerticalCenter =
  //       top >= containerHeight / 4 && bottom <= (3 * containerHeight) / 4;

  //     if (isInVerticalCenter && entry.isIntersecting) {
  //       const index = parseInt(entry.target.getAttribute("data-index"), 10);
  //       setSelectedChannelIndex(index);
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   const options = {
  //     root: containerRef.current,
  //     rootMargin: "0px",
  //     threshold: 0.5,
  //   };

  //   observerRef.current = new IntersectionObserver(handleIntersection, options);

  //   const container = containerRef.current;
  //   const items = container.querySelectorAll("[data-index]");
  //   items.forEach((item) => observerRef.current.observe(item));

  //   return () => {
  //     items.forEach((item) => observerRef.current.unobserve(item));
  //   };
  // }, [handleIntersection]);

  const handleClick = (index) => {
    setSelectedChannelIndex(index);
    const container = containerRef.current;
    const itemHeight = container.firstChild.clientHeight;
    const targetScrollTop =
      index * itemHeight - container.clientHeight / 2 + itemHeight / 2;
    container.scrollTop = targetScrollTop;
  };

  return (
    <div className="App">
      <Box
        sx={{
          p: {
            md: 12,
            sm: 0,
          },
          maxHeight: { md: "79vh", lg: "79vh", sm: "auto" },
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ bgcolor: "#0f0f2e", borderRadius: 5 }}
        >
          <SideNavigationBar
            typeClicked={typeClicked}
            setTypeClicked={setTypeClicked}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
          {selectedTab === "tv" && (
            <>
              {" "}
              <ChannelsSlider
                channels={channels}
                typeClicked={typeClicked}
                containerRef={containerRef}
                selectedChannelIndex={selectedChannelIndex}
                handleClick={handleClick}
              />
              <MainDetail
                user={user}
                channels={channels}
                typeClicked={typeClicked}
                selectedType={selectedType}
                selectedChannelIndex={selectedChannelIndex}
                handleClick={handleClick}
                handleTypeClick={handleTypeClick}
                handleSelectedType={handleSelectedType}
                containerRef={containerRef}
              />{" "}
            </>
          )}
          {selectedTab === "favorites" && (
            <Grid item md={10} sx={{ bgcolor: "white" }}></Grid>
          )}
          {selectedTab === "later" && (
            <Grid item md={10} sx={{ bgcolor: "red" }}></Grid>
          )}
        </Grid>
        <BottomNavigationBar
          user={user}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </Box>
    </div>
  );
}

export default Home;
