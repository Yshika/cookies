import { useState, useEffect } from "react";
import Cookie from "js-cookie";
import { parseCookies } from "../pages/helpers";

const Index = ({ initialRememberValue = true, initialUserValue = false }) => {
  const [rememberMe, setRememberMe] = useState(() =>
    JSON.parse(initialRememberValue)
  );
  const [userValue, setUserValue] = useState(() =>
    JSON.parse(initialUserValue)
  );
  useEffect(() => {
    Cookie.set("rememberMe", JSON.stringify(rememberMe));
  }, [rememberMe]);

  useEffect(() => {
    Cookie.set("userValue", JSON.stringify(userValue));
    console.log("user is", userValue);
    setUserValue(true);
  }, [userValue]);

  return (
    <div>
      remember me
      <input
        type="checkbox"
        value={rememberMe}
        checked={rememberMe}
        onChange={e => setRememberMe(e.target.checked)}
      />
    </div>
  );
};

Index.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);

  return {
    initialRememberValue: cookies.rememberMe,
    initialUserValue: cookies.userValue
  };
};

export default Index;