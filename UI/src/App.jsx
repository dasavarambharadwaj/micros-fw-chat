import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useMediaQuery } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.js";

function App() {
  const isInDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const darkTheme = createTheme({
    palette: {
      mode: isInDarkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
