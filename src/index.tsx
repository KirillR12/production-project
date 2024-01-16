import { App } from "app/App";
import { ThemeProvider } from "app/providers/ThemeProviders/ui/ThemeProvider";
import { AboutPage } from "pages/About";
import { MainPage } from "pages/Main";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";



    render(
      <ThemeProvider>
        <BrowserRouter>
<App/>
</BrowserRouter>
        </ThemeProvider>,
        document.getElementById("root")
    )