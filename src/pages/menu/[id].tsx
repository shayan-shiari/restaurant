import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import axios from "axios";
import { IMenu } from "@/types/menu.type";

const Details = () => {
  return <div>as</div>;
};

export default Details;

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const res = await axios.get("http://localhost:4000/data");
  const data: IMenu[] = await res.data.slice(0, 10);
  const paths = data.map((item) => ({
    params: {
      id: item.id.toString(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
};
