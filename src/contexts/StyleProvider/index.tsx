import GlobalStyles from "@styles/globalStyles";
import theme from "@styles/theme";
import { ThemeProvider } from "styled-components";

function MasterProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default MasterProvider;
