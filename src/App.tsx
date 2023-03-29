import { GlobalStyle } from "@styles/global";
import { defaultTheme } from "@styles/theme/default";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
