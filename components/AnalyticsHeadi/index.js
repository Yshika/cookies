import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";

const AnalyticsHeading = ({ heading, subTitle, cookies }) => {
  let lob = "";
  let user = "";
  const countRef = useRef(0);
  const [waiting, setWaiting] = useState(false);
  console.log("Cookies are:::::", cookies);
  const { lobName, userValue } = cookies || {};

  useEffect(() => {
    // setTimeout(() => {
    //   const span = document.getElementById("temp");
    //   const tagExist = span?.querySelector("a")?.style?.display;
    //   console.log("@@@span::::::::", !tagExist);
    //   if (!tagExist) {
    //     setWaiting(true);
    //   }
    // }, 5000);

    if (window) {
      console.log("pathname user", window.location.pathname);
      if (window.location.pathname === "/travel-insurance") {
        lob = "travel";
      } else if (window.location.pathname === "/motor-insurance") {
        lob = "motor";
      } else {
        lob = "other";
      }
    }
    console.log("user lob", lob);

    const intervalId = setInterval(() => {
      if (countRef.current === 2) {
        setWaiting(true);
        return clearInterval(intervalId);
      }
      countRef.current = countRef.current + 1;
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (lobName && userValue && lobName === lob) {
      user = "returning";
      document.cookie = `userValue=returning; path=/`;
      console.log("user", user);
    } else {
      user = "new";
      document.cookie = `userValue=new; path=/`;
      document.cookie = `lobName=${lob}; path=/`;
      console.log("user", user);
    }
  }, [lobName, userValue]);

  return (
    <div className="col-12 col-sm-12 mAlignCenter" id="temp">
      <div
        className={
          user === "new" ? "newAnalyticsSections" : "analyticsSections"
        }
      >
        <h2 className={classNames("w-100 heading h2-heading analyticsTitle")}>
          {heading || `Give Your Vehicle The Care It Deserves, With Tata AIG Motor Insurance Plan!`}
        </h2>
         <span id="spanTag" className="contentClass1">
          {subTitle}
        </span>
      </div>
    </div>
  );
};

export default AnalyticsHeading;
