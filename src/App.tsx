import { BrowserRouter } from "react-router-dom";
import { AppRouts } from "./routes";
import { AppThemeProvider } from "./shared/contexts";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRouts />
      </BrowserRouter>
    </AppThemeProvider>
  );
}