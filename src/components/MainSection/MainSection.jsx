import "./MainSection.style.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ContactIcon from "@mui/icons-material/ContactPhone";
import GroupIcon from "@mui/icons-material/Groups";
import SettingIcon from "@mui/icons-material/Settings";
import ViewIcon from "@mui/icons-material/ViewWeek";
import HistoryIcon from "@mui/icons-material/History";
import ForumIcon from "@mui/icons-material/Forum";
import "../../../src/vars.css";
import Data from "../DataDisplay/data";

function MainSection() {

  
const currencies = [
  {
    value: 'one',
    label: '1',
  },
  {
    value: 'two',
    label: '2',
  },
  {
    value: 'three',
    label: '3',
  },
  {
    value: 'four',
    label: '4',
  },
];

  return (
    <>
      <div
        className="mainWrapper"
        style={{ height: "96vh", display: "flex", alignItems: "center" }}
      >
        <div className="dispIcon">
          <div className="icon">
            <InboxIcon />
          </div>
          <div className="icon">
            <ViewIcon />
          </div>
          <div className="icon">
            <ContactIcon />
          </div>
          <div className="icon">
            <GroupIcon />
          </div>
          <div className="icon icon-mt">
            <SettingIcon />
          </div>
        </div>

        <Divider
          orientation="vertical"
          sx={{ marginLeft: "8px", height: "100%" }}
        />

        <div className="mainContent">
          <div className="mainButtons">
            <Button variant="contained" size="small" sx={{margin:"10px"}}><span className="fontBtn">+ ADD DATA </span></Button>
            <Button variant="contained" sx={{background:" #fa2871"}} size="small"> <span className="fontBtn" > <HistoryIcon /> Data TRAINING STATUS </span></Button>
            <Button variant="outlined" size="small" sx={{margin:"10px", color:" #fa2871", border:"1px solid #fa2871"}}> <span className="fontBtn"> <ForumIcon />GROUND TRUTHS</span> </Button>
          </div>
          <Divider sx={{border:"1px solid black" }} variant="middle"/>
        <div className="formElement">
        <TextField id="outlined-basic" size="small" label="Search" variant="outlined" />
      <div>
        <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '120px' } }} noValidate autoComplete="off" >
        <TextField
          id="outlined-select-currency"
          select
          label="Results"
          defaultValue="three"
          size="small"
          
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Box>        
          </div>
          <Button variant="contained" size="small" sx={{margin:"10px"}}><span className="fontBtn"> SEARCH </span></Button>
        </div>
        <Data />
        </div>
      </div>
    </>
  );
}

export default MainSection;
