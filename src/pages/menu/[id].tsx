import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import axios from "axios";
import { IMenu } from "@/types/menu.type";
import { useRouter } from "next/router";

const Details = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  console.log(data);
  
  if(router.isFallback) {
    return <h2>Loading...</h2>
  }

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

export const getStaticProps: GetStaticProps<{ data: IMenu[] }> = async (
  context
) => {
  const {
    params: { id },
  } = context as any;

  
  
  const res = await axios.get(`http://localhost:4000/data/${id}`);
  const data = await res.data;
  
  if(!data.id) {
    return {
      notFound:true
    }
  }
  return { props: { data }, revalidate: 10 };
};
