import React, { useEffect, useState } from "react";
import { FunctionComponent } from "react";
import Footer from "./footer";
import Navigator from "./navigator";
import { useParams } from "react-router-dom";

const Register: FunctionComponent = () => {
  let { id } = useParams();
  const [postition, decider] = useState("pateient");
  const [userNames, finder] = useState("");
  const [userName, checker] = useState("");
  const [data, finders] = useState({ username: false });
  const [password, setter] = useState("");
  const [check, checkSetter] = useState("");
  const [value, changer] = useState("");
  useEffect(() => {
    fetch("/register/error").then((e) => e.text().then((e) => changer(e)));
    fetch(`/search/data/${userName}`).then((e) =>
      e.json().then((e) => finders(e))
    );
    fetch(`/user/name`)
      .then((e) => e.text())
      .then((e) => finder(e));
  }, [userName]);
  return (
    <div>
      <Navigator username={userNames}></Navigator>
      <main className="page contact-page">
        <section className="portfolio-block contact">
          <div className="container">
            <div className="heading">
              <h2>Registeration</h2>
            </div>
            <form method="POST" action="/user">
              {id ? (
                <div>
                  <h4>{value}</h4>
                </div>
              ) : (
                <div></div>
              )}
              <div className="form-group">
                <label htmlFor="name">name</label>
                <input
                  required
                  className="form-control item"
                  type="text"
                  id="name"
                  name="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">phone number</label>
                <input
                  required
                  className="form-control item"
                  type="number"
                  id="name"
                  name="phoneNumber"
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Email</label>
                <input
                  required
                  className="form-control item"
                  type="email"
                  id="name"
                  name="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">
                  user name -
                  {data.username ? (
                    <div>this user name can not be used</div>
                  ) : (
                    <div>this username can be used</div>
                  )}
                </label>
                <input
                  required
                  className="form-control item"
                  type="text"
                  id="name"
                  name="userName"
                  value={userName}
                  onChange={(e) => checker(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="position">Position</label>
                <br></br>
                <select
                  id="position"
                  value={postition}
                  onChange={(e) => decider(e.target.value)}
                  onBlur={(e) => decider(e.target.value)}
                >
                  <option>patient</option>
                  <option>doctor</option>
                </select>
              </div>
              <input name="profession" value={postition} hidden></input>
              <div className="form-group">
                <label htmlFor="subject">Password</label>
                <input
                  required
                  className="form-control item"
                  type="password"
                  id="subject"
                  name="password"
                  value={password}
                  onChange={(e) => setter(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">confirm password</label>
                <input
                  required
                  className="form-control item"
                  type="password"
                  id="subject"
                  onChange={(e) => checkSetter(e.target.value)}
                />
              </div>
              {postition == "doctor" ? (
                <div className="form-group">
                  <label htmlFor="message">
                    Write something about yourself. A mail will be sent to you
                    when your identity is confirmed
                  </label>
                  <textarea
                    className="form-control item"
                    id="message"
                    name="about"
                    required
                  ></textarea>
                </div>
              ) : (
                <div></div>
              )}
              <div className="form-group">
                {check == password ? (
                  data.username ? (
                    <div>
                      Please try another username as this already exits
                      <br></br>
                      <button
                        className="btn btn-primary btn-block btn-lg"
                        type="submit"
                        disabled
                      >
                        Submit Form
                      </button>
                    </div>
                  ) : (
                    <button
                      className="btn btn-primary btn-block btn-lg"
                      type="submit"
                    >
                      Submit Form
                    </button>
                  )
                ) : (
                  <div>
                    passwords do not match please check them again
                    <br></br>
                    <button
                      className="btn btn-primary btn-block btn-lg"
                      type="submit"
                      disabled
                    >
                      Submit Form
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
};
export default Register;
