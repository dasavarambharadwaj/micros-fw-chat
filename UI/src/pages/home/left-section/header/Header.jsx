import { Avatar } from "@mui/material";
import HeaderMenu from "../header-menu/HeaderMenu";
function Header() {
  return (
    <div className="flex items-center justify-between p-4 dark:bg-gray-800 bg-gray-400">
      <div className="flex gap-3 items-center">
        <Avatar alt="Tony Stark" src="./tonyStark.jpg"></Avatar>
        <span className="text-md">Tony Stark</span>
      </div>
      <HeaderMenu></HeaderMenu>
    </div>
  );
}
export default Header;
