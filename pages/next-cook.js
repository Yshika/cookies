import cookies from "next-cookies";
import { useState, useEffect } from "react";


const Cookies = ({ cookies }) => {
  useEffect(() => {
    document.cookie = `name=try; path=/`;
  }, []);

  return (
    <div>
      <h1>Cookies:</h1>
      <ul id="cookies">
        {Object.keys(cookies).map(name => (
          <li key={name}>
            <b id={`cookie-${name}`}>{name}</b>: {cookies[name].toString()}
          </li>
        ))}
      </ul>
      {/* <p>{cookies['lob'].toString()}</p> */}
    </div>
  )
}

Cookies.getInitialProps = ctx => ({
  cookies: cookies(ctx)

});

export default Cookies;