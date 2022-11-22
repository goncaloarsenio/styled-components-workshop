import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loadingSpinner from "../assets/spinner.gif";

/* Import Your Files Below This Line*/

function FakeLogin() {
  const navigate = useNavigate();

  /* useState To Toggle Loading Spinner */
  const [loading, setLoading] = useState(false);

  /* Fake handleSubmit Function */
  const fakeLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 3000);
  };

  return (
    <section>
      <div>
        {/* Loading Spinner */}
        {loading && (
          <img
            src={loadingSpinner}
            alt="loading spinner"
            style={{
              width: 170,
              height: 170,
              "margin-top": 11.5,
              "margin-bottom": 11.5,
            }}
          />
        )}

        {/* Login From */}
        {!loading && (
          <form>
            <label htmlFor="username">username</label>
            <input type="text" name="username" />

            <label htmlFor="password">password</label>
            <input type="password" name="password" />

            <button type="submit" onClick={() => fakeLogin()}>
              <h3>Login</h3>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default FakeLogin;
