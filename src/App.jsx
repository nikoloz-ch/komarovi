import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Main";
import Beka from "./Components/Akeb";
import Foot from "./Components/Footer";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/beka",
    element: <Beka />,
  },
  {
    path: "*",
    element: <div>404 not found</div>,
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Foot />
    </div>
  );
}

export default App;
