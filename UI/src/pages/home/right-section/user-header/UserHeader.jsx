import { Avatar, IconButton } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

function UserHeader() {
  return (
    <div className="flex items-center justify-between p-4 dark:bg-gray-700 bg-gray-400">
      <div className="flex items-center gap-3">
        <Avatar alt="Remy Sharp" src="./assets/remy-sharp.jpg"></Avatar>
        <span className="text-md">Remy Sharp</span>
      </div>
      <div className="flex gap-3 items-center">
        <IconButton>
          <CallIcon></CallIcon>
        </IconButton>
        <IconButton>
          <VideoCallIcon></VideoCallIcon>
        </IconButton>
        <IconButton>
          <SearchIcon></SearchIcon>
        </IconButton>
        <IconButton>
          <MoreVertIcon></MoreVertIcon>
        </IconButton>
      </div>
    </div>
  );
}
export default UserHeader;
