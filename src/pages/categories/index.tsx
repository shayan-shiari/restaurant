import React, { useState } from "react";
import { useRouter } from "next/router";

const Categories = () => {
  const router = useRouter();
  const [query, setQeury] = useState({
    difficulty: "",
    time: "",
  });

  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQeury({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({ pathname: "/categories", query });
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
      </div>
    </div>
  );
};

export default Categories;
