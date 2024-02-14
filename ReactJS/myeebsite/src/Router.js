// ExampleComponent.js

import React from "react";
import { Link } from "react-router-dom";

const Router = () => {
  return (
    <div>
      <h2>This is an example component</h2>
      {/* Link to the home route */}
      <Link to="/">Home</Link>
      {/* Link to the contact route */}
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Router;
