import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import axios from "axios";
import { IMenu } from "@/types/menu.type";
import { useRouter } from "next/router";
import Image from "next/image";
import Location from "@/../public/images/icons/Location";
import Dollar from "@/../public/images/icons/Dollar";

const Details = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const {
    id,
    details,
    ingredients,
    name,
    price,
    recipe,
    discount,
    introduction,
  } = data;

  if (router.isFallback) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2 className="border-b-[3px] border-solid border-[#53c60b] w-fit mb-12 text-lg font-bold">
        Details
      </h2>
      <div>
        <div className="flex">
          <Image
            className="w-[300px] rounded"
            width={1000}
            height={1000}
            alt={name}
            src={`/images/${id}.jpeg`}
          />
          <div className="ml-8">
            <h3 className="text-[#53c60b]">{name}</h3>
            <span className="flex items-center text-gray-800">
              {<Location />}
              {details[0].Cuisine}
            </span>
            <span className="flex items-center">
              <Dollar />
              {discount ? (price * (100 - discount)) / 100 : price}$
            </span>
            {discount && (
              <span className="bg-[#ed4133] text-white py-3 flex justify-center rounded mt-5">
                {discount} %OFF
              </span>
            )}
          </div>
        </div>
        <div className="my-14 text-justify leading-6">
          <p>{introduction}</p>
        </div>
        <div className="mb-14">
          <h4 className="text-[#53c60b] my-6 text-lg font-bold">Details</h4>
          <ul>
            {details.map((item, index) => (
              <li key={index} className="flex items-center my-2">
                <p className="font-semibold mx-2">{Object.keys(item)[0]}</p>
                <span className="text-gray-800">{Object.values(item)[0]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[#53c60b] my-6 text-lg font-bold">Ingredients</h4>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-24">
          <h4 className="text-[#53c60b] my-6 text-lg font-bold">Recipe</h4>
          {recipe.map((item, index) => (
            <div
              key={index}
              className="flex items-center py-5 px-2 text-justify"
            >
              <span className="text-lg mx-3 bg-green-500 p-1 text-white rounded-2xl">
                {index + 1}
              </span>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <button className="w-full bg-[#53c60b] text-white p-4 rounded cursor-pointer mb-24">
          Add to Cart
        </button>
      </div>
    </div>
  );
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

export const getStaticProps: GetStaticProps<{ data: IMenu }> = async (
  context
) => {
  const {
    params: { id },
  } = context as any;

  const res = await axios.get(`http://localhost:4000/data/${id}`);
  const data = await res.data;

  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return { props: { data }, revalidate: 10 };
};
