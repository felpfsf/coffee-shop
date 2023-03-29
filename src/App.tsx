import { GlobalStyle } from "@styles/global";
import { defaultTheme } from "@styles/theme/default";
import { ThemeProvider } from "styled-components";
import { DefaulLayout } from "./layout/DefaultLayout";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <DefaulLayout />
    </ThemeProvider>
  );
}

export default App;
