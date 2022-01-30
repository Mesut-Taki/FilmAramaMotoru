import React from "react";

import CustomRoutes from "./routes/CustomRoutes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CustomRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
