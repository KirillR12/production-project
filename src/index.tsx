import { App } from "app/App";
import { ThemeProvider } from "app/providers/ThemeProviders/ui/ThemeProvider";
import { AboutPage } from "pages/About";
import { MainPage } from "pages/Main";
import { render } from "react-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
      {
        path: "MainPage",
      element: <MainPage />,
      },
      {
        path: "AboutPage",
      element: <AboutPage />,
      }
      ]
    },
  ])

    render(
      <ThemeProvider>
        <RouterProvider router={router} />
        </ThemeProvider>,
        document.getElementById("root")
    )