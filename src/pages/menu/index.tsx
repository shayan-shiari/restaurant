import axios from "axios";
import React from "react";

const Menu = () => {
  return <div>as</div>;
};

export default Menu;

export function getStaticProps() {
  const res = axios.get("http://localhost:4000/data");
  console.log(res);

  return {
    props: {},
  };
}
