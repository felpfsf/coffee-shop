import { Header } from "@components/Header";
import { GlobalStyle } from "@styles/global";
import { defaultTheme } from "@styles/theme/default";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
