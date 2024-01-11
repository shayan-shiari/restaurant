import { InferGetStaticPropsType, GetStaticProps } from "next";
import axios from "axios";
import React from "react";
import { IMenu } from "@/types/menu.type";

const Menu = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(data);

  return <div>
    <h2>Menu</h2>
  </div>;
};

export default Menu;

export const getStaticProps: GetStaticProps<{ data: IMenu[] }> = async (
  context
) => {
  const res = await axios.get("http://localhost:4000/data");
  const data: IMenu[] = await res.data;

  return { props: { data }, revalidat: 10 };
};
