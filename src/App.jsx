import { Fragment } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Inbox from "./components/body/Inbox";
// import RootLayout from "./layouts/RootLayout";
import Today from "./components/body/Today";
import Home from "./components/body/Home";
import ShowUpdate from "./components/body/ShowUpdate";
import Upcoming from "./components/body/Upcoming";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <Fragment>
      <Routes location={background || location}>
        <Route path="/" element={<Home />}>
          <Route path={"/"} element={<Today />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/todo/:id" element={<ShowUpdate />} />
          <Route path="/upcoming" element={<Upcoming />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="/todo/:id" element={<ShowUpdate />} />
        </Routes>
      )}
    </Fragment>
  );
}

export default App;
