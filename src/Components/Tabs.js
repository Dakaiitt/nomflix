import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import YouTube from "react-youtube";
import styled from "styled-components";
import NoImage from "../assets/noimage.png";
import { collectionApi } from "api.js";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className={TabContent}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabContent = styled.div``;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    centered: "true",
    minHeight: "350px",
  },
  tabs: {
    "& .MuiTabs-flexContainer": {
      backgroundColor: "black",
    },
  },
  content: {
    centered: "true",
  },
}));

const opts = {
  height: "240px",
  width: "500px",
  playerVars: {
    autoplay: 0,
  },
};

const CompanyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  margin-top: 30px;
`;

const CompanyItem = styled.div`
  width: 120px;
  margin: 10px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 7px;
`;

const CompanyLogo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
`;

const CompanyName = styled.div`
  text-align: center;
  align-items: center;
  color: black;
  font-size: 13px;
`;

const YtContainer = styled.div`
  max-width: 800px;
  max-height: 250px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  margin-top: -10px;
`;

const YtItem = styled.div`
  width: 500px;
  margin: 10px;
  display: inline-block;
`;

const CollectionImg = styled.img`
  height: 200px;
`;

const SeasonsImg = styled.img`
  height: 200px;
`;
const SeasonName = styled.div`
  text-align: center;
  font-size: 13px;
`;

const NoVideoMsg = styled.div`
  display: flex;
  height: 250px;
  justify-content: center;
  align-items: center;
  color: white;
`;

const NoInfoMsg = styled.div`
  display: grid;
  height: 180px;
  grid-column: 1 / 5;
  justify-content: center;
  align-items: center;
  color: white;
`;

const NoCollectionMsg = styled.div`
  display: flex;
  height: 250px;
  justify-content: center;
  align-items: center;
  color: white;
`;

const SeasonsContainer = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`;

const SeasonsItem = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  display: inline-block;
`;

const CollectionContainer = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`;

const CollectionItem = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  display: inline-block;
`;

const CollectionName = styled.div`
  text-align: center;
  font-size: 12px;
`;

export default function SimpleTabs({ result }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          variant="fullWidth"
          className={classes.tabs}
        >
          <Tab label="Trailers" {...a11yProps(0)} />
          <Tab label="Productions" {...a11yProps(1)} />
          {result.title ? (
            <Tab label="Collection" {...a11yProps(2)} />
          ) : (
            <Tab label="Seasons" {...a11yProps(2)} />
          )}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.content}>
        <YtContainer>
          {result.videos.results.length > 0 ? (
            result.videos.results.map((a) => (
              <YtItem>
                <YouTube videoId={a.key} opts={opts} />
              </YtItem>
            ))
          ) : (
            <NoVideoMsg>No Video</NoVideoMsg>
          )}
        </YtContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CompanyContainer>
          {result.production_companies.length > 0 ? (
            result.production_companies.map((a) => (
              <CompanyItem>
                <>
                  <CompanyLogo
                    src={
                      a.logo_path
                        ? `https://image.tmdb.org/t/p/w300${a.logo_path}`
                        : NoImage
                    }
                  />
                  <CompanyName>{a.name}</CompanyName>
                </>
              </CompanyItem>
            ))
          ) : (
            <NoInfoMsg>No Information</NoInfoMsg>
          )}
        </CompanyContainer>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SeasonsContainer>
          {result.seasons ? (
            result.seasons.map((a) => (
              <SeasonsItem>
                <>
                  <SeasonsImg
                    src={
                      a.poster_path
                        ? `https://image.tmdb.org/t/p/w300${a.poster_path}`
                        : require("../assets/noPosterSmall.png").default
                    }
                  />
                  <SeasonName>{a.name}</SeasonName>
                </>
              </SeasonsItem>
            ))
          ) : result.belongs_to_collection ? (
            <CollectionContainer>
              <CollectionItem>
                <>
                  <CollectionImg
                    src={
                      result.belongs_to_collection.poster_path
                        ? `https://image.tmdb.org/t/p/w300${result.belongs_to_collection.poster_path}`
                        : require("../assets/noPosterSmall.png").default
                    }
                  />
                  <CollectionName>
                    {result.belongs_to_collection.name}
                  </CollectionName>
                </>
              </CollectionItem>
            </CollectionContainer>
          ) : (
            <NoCollectionMsg>No Collection</NoCollectionMsg>
          )}
        </SeasonsContainer>
      </TabPanel>
    </div>
  );
}
