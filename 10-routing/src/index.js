import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  Link,
  RouterProvider,
  useParams,
} from "react-router-dom";

const User = () => {
  const { userId } = useParams();

  return <p>user: {userId}</p>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <p>index</p>
        <p>
          <Link to="/user/1">to user1</Link>
          <Link to="/user/2">to user2</Link>
          <Link to="/user/99">to user99</Link>
        </p>
      </div>
    ),
  },
  {
    path: "/user/:userId",
    element: <User />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
