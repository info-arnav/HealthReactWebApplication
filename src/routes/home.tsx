import React from "react";
import { FunctionComponent } from "react";
import Footer from "./footer";
import Navigator from "./navigator";

const Home: FunctionComponent = () => {
  return (
    <div>
      <Navigator></Navigator>
      <p>this is the body of the page</p>
      <Footer></Footer>
      <p>this is the bottom copyright credits of the object</p>
    </div>
  );
};

export default Home;
