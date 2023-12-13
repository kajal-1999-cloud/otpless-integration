import { useEffect } from "react";

function Signup() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://otpless.com/auth.js";
    script.cid = "QHPG4DDX1IRNJ6EF7TP69IIVEZLJLUF9";
    script.async = true;

    document.body.appendChild(script);
    window.otpless = (otplessUser) => {
      console.log(JSON.stringify(otplessUser));  
    };
  }, []);

  return <div id="otpless-login-page" />

}

export default Signup;