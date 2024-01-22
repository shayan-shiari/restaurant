import React, { useEffect, useState } from "react";
import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import axios from "axios";
import { IMenu } from "@/types/menu.type";
import { ICategory } from "@/types/category.type";
import Card from "@/components/layout/pageComponents/Card";
import Image from "next/image";

const Categories = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const [query, setQuery] = useState<ICategory>({
    difficulty: "",
    time: "",
  });

  useEffect(() => {
    const { difficulty, time } = router.query;

    if (query.difficulty !== difficulty || query.time !== time) {
      setQuery(router.query);
    }
  }, []);

  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({ pathname: "/categories", query: { ...query } });
  };

  return (
    <div>
      <h2 className="border-b-[3px] border-solid border-[#53c60b] w-fit mb-12">
        Categoires
      </h2>
      <div>
        <form onSubmit={searchHandler}>
          <select
            value={query.difficulty}
            onChange={changeHandler}
            name="difficulty"
            className="shadow-xl w-40 h-10 mr-3 rounded p-2 text-[#48ac0a]"
          >
            <option value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select
            value={query.time}
            onChange={changeHandler}
            name="time"
            className="shadow-xl w-40 h-10 mr-3 rounded p-2 text-[#48ac0a]"
          >
            <option value="">Cooking Time</option>
            <option value="more">More than 30 min</option>
            <option value="less">Les than 30 min</option>
          </select>
          <button className="bg-[#53c60b] text-white h-8 px-5 rounded">
            Search
          </button>
        </form>
        <div className="flex flex-wrap justify-between mt-20">
          {!data.length ? (
            <Image
              src="/images/search.png"
              className="w-80 m-auto"
              width={1000}
              height={1000}
              alt="category"
            />
          ) : (
            data.map((food) => <Card key={food.id} {...food} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;

export const getServerSideProps: GetServerSideProps<{ data: IMenu[] }> = async (
  context
) => {
  const {
    query: { difficulty, time },
  } = context;

  const res = await axios.get("http://localhost:4000/data");
  const data: IMenu[] = await res.data;
  const filteredData = data.filter((item) => {
    const difficultyResult = item.details.filter(
      (item) => item.Difficulty && item.Difficulty === difficulty
    );

    const timeResult = item.details.filter((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
      const [timeDetail] = cookingTime.split(" ");
      if (time === "less" && timeDetail && +timeDetail <= 30) {
        return detail;
      } else if (time === "more" && +timeDetail > 30) {
        return detail;
      }
    });

    if (time && difficulty && timeResult.length && difficultyResult.length) {
      return item;
    } else if (!time && difficulty && difficultyResult.length) {
      return item;
    } else if (time && !difficulty && timeResult.length) {
      return item;
    }
  });

  return {
    props: { data: filteredData },
  };
};
