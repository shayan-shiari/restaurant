import { InferGetStaticPropsType, GetStaticProps } from "next";
import axios from "axios";
import React from "react";
import { IMenu } from "@/types/menu.type";
import Card from "@/components/layout/pageComponents/Card";

const Menu = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  
  return (
    <div>
      <h2 className="border-b-[3px] border-solid border-[#53c60b] w-fit mb-12 text-lg">
        Menu
      </h2>
      <div className="flex flex-wrap justify-between">
        {data.map(item => <Card {...item} />)}
      </div>
    </div>
  );
};

export default Menu;

export const getStaticProps: GetStaticProps<{ data: IMenu[] }> = async (
  context
) => {
  const res = await axios.get("http://localhost:4000/data");
  const data = await res.data;
    
  return { props: { data }, revalidate: 10 };
};
