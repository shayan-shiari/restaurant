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
      <h2>Details</h2>
      <div>
        <div>
          <Image
            width={1000}
            height={1000}
            alt={name}
            src={`/images/${id}.jpeg`}
          />
          <div>
            <h3>{name}</h3>
            <span>
              {<Location />}
              {details[0].Cuisine}
            </span>
            <span>
              <Dollar />
              {discount ? (price * (100 - discount)) / 100 : price}$
            </span>
            {discount && <span>{discount} %OFF</span>}
          </div>
        </div>
        <div>
          <p>{introduction}</p>
        </div>
        <div>
          <h4>Details</h4>
          <ul>
            {details.map((item, index) => (
              <li key={index}>
                <p>{Object.keys(item)[0]}</p>
                <span>{Object.values(item)[0]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Ingredients</h4>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Recipe</h4>
          {recipe.map((item, index) => (
            <div key={index}>
              <span>{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <button>Add to Cart</button>
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
