import React from "react";
import { FunctionComponent } from "react";
import Footer from "./footer";
import Navigator from "./navigator";

const Register: FunctionComponent = () => {
  return (
    <div>
      <Navigator></Navigator>
      <form method="POST" action="http://localhost:1234/user">
        <input></input>
      </form>
      <Footer></Footer>
    </div>
  );
};
export default Register;
