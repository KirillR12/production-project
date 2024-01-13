import { render } from "react-dom";
import { App } from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AboutPageAsync } from "./page/About/AboutPageAsync";
import { MainPageAsync } from "./page/Main/MainPageAsync";
import { ThemeProvider } from "./components/theme/ThemeProvider";



const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
      {
        path: "MainPage",
      element: <MainPageAsync />,
      },
      {
        path: "AboutPage",
      element: <AboutPageAsync />,
      }
      ]
    },
  ])

    render (
      <ThemeProvider>
        <RouterProvider router={router} />
        </ThemeProvider>,
        document.getElementById("root")
    )