import React from "react";
import EventSelection from "./components/EventSelection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="colored"
        role="alert"
        closeOnClick
      />
      <EventSelection />
    </div>
  );
};

export default App;
