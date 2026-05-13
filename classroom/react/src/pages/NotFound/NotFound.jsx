import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

const NotFound = () => {
  const [sec, setSec] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const countdown = setInterval(() => {
      setSec((prev) => prev - 1);
    }, 1000);
    const nav = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => {
        clearInterval(countdown)
        clearTimeout(nav)
    }
  }, [navigate]);

  return (
    <>
      <h1>404 | Page Not Found</h1>
      <Link to="/">⟵ Back to Home page</Link>
      <h3>Redirecting you to Home page in {sec} seconds</h3>
    </>
  );
};

export default NotFound;
