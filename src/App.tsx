import { Header } from "@components/Header";
import { CartContextProvider } from "@contexts/CartContext";
import { GlobalStyle } from "@styles/global";
import { defaultTheme } from "@styles/theme/default";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CartContextProvider>
        <Header />
        <Outlet />
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default App;
