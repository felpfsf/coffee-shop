import { Header } from "@components/Header";
import { ProductsContextProvider } from "@contexts/ProductsContext";
import { GlobalStyle } from "@styles/global";
import { defaultTheme } from "@styles/theme/default";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ProductsContextProvider>
        <GlobalStyle />
        <Header />
        <Outlet />
      </ProductsContextProvider>
    </ThemeProvider>
  );
}

export default App;
