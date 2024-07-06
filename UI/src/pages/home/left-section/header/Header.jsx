import { Avatar } from "@mui/material";
import HeaderMenu from "../header-menu/HeaderMenu";
import Logo from "@/assets/Logo.jsx";
function Header() {
  return (
    <div className="flex items-center justify-between p-4 dark:bg-gray-800 bg-gray-400">
      <Logo />
      <div className="flex gap-2">
        <HeaderMenu></HeaderMenu>
      </div>
    </div>
  );
}
export default Header;
