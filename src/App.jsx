import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Inbox from "./components/body/Inbox";
// import RootLayout from "./layouts/RootLayout";
import Today from "./components/body/Today";
import Home from "./components/body/Home";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path={"/"} element={<Today />} />
          <Route path="/inbox" element={<Inbox />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
