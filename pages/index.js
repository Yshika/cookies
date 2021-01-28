import { useState, useEffect } from "react";
import AnalyticsHeading from "../components/AnalyticsHeadi";
import Cookie from "js-cookie";
import { parseCookies } from "../pages/helpers";

const Index = ({ cookies, initialRememberValue = true, initialUserValue = false }) => {
  console.log("cookies", cookies);
  const [rememberMe, setRememberMe] = useState(() =>
    initialRememberValue
  );
  // const [userValue, setUserValue] = useState(() =>
  //   initialUserValue
  // );
  useEffect(() => {
    Cookie.set("rememberMe", JSON.stringify(rememberMe));
  }, [rememberMe]);

  // useEffect(() => {
  //   Cookie.set("userValue", JSON.stringify(userValue));
  //   console.log("user is", userValue);
  //   setUserValue(true);
  // }, [userValue]);

  return (
    <div>
      remember me
      <input
        type="checkbox"
        value={rememberMe}
        checked={rememberMe}
        onChange={(e) => setRememberMe(e.target.checked)}
      />
      <AnalyticsHeading heading="heading is here" subTitle='subtitle' cookies={cookies} />
    </div>
  );
};

Index.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);

  return {
    cookies,
    initialRememberValue: cookies.rememberMe,
    initialUserValue: cookies.userValue,
  };
};

export default Index;
