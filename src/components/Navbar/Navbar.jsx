import "./Navbar.style.css";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu"
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ExpandIcon from "@mui/icons-material/ExpandMore";
import Avatar from '@mui/material/Avatar';
import Logo from "../../assets/avtar.svg"

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {/* Need to have some margine above this divider */}
        <Divider sx={{ marginTop: "41px", paddingBottom:"5px" }} />
        {[
          "Explore Chats",
          "Business Leads",
          "View Mind Map",
          "Manage Team",
          "Configure Chatbot",
        ].map((text, index) => (
          <ListItem key={text} disablePadding alignItems="flex-start" marginLeft="21px">
            <ListItemButton>
              {/* <ListItemIcon> */}
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              {/* </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <div className="navWrapper">
        <div>
          <Button onClick={toggleDrawer(true)} className="navButton">
            <MenuIcon />
          </Button>
        </div>
        <div>
          <Divider orientation="vertical" sx={{ marginRight: "10px" }} />
        </div>
    
        <div className="navElement">
          <div>
            <div className="navTitle"> Chatbot Mind Map </div>
            <div className="navText">This is the brain and the memory of the chatbot. You can add, edit and analyse the source data being used to answer user queries from here </div>
          </div>
        
          <div className="navButton">
              <div><Button variant="outlined" className="guideBtn" size="small"><span className="guide">
                GUIDED TOUR 
                </span>
                </Button>
              </div>
            
              <div>
                <Button variant="text">
                <span className="selectBtn">SELECT ORG </span> <ExpandIcon /></Button>
              </div>
          <div >
            <Avatar className="logoAvatar" src={Logo}/>
          </div>
          </div>
        
        </div>

        <Drawer  PaperProps={{
            sx: {
              paddingTop: "1px",
              marginLeft: "65px", // This adds a 10px margin from the left side
              width: 250,
            },
          }} open={open} hideBackdrop={true} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
      <div className="navDivider">
        <Divider />
      </div>
    </>
  );
}

export default Navbar;
