import routes from "./routes";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./common/components/ScrollToTop";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.element />}
            >
              {route.children &&
                route.children.map((childRoute, childIndex) => (
                  <Route
                    key={childIndex}
                    path={childRoute.path}
                    element={<childRoute.element />}
                  />
                ))}
            </Route>
          ))}
        </Routes>
        <ScrollToTop />
      </React.Fragment>
    </Router>
  )
}

export default App
