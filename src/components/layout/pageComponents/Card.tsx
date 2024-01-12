import React from "react";
import { IMenu } from "@/types/menu.type";
import Image from "next/image";
import Location from "@/../public/images/icons/Location";
import Dollar from "@/../public/images/icons/Dollar";
import Link from "next/link";

const Card = (props: IMenu) => {
  return (
    <div className="flex flex-col w-[270px] shadow-xl mb-10 rounded relative p-3">
      <Image
        className="w-full rounded-md"
        width={1000}
        height={1000}
        src={`/images/${props.id}.jpeg`}
        alt={props.name}
      />
      <div className="flex items-center justify-between text-gray-900 my-5">
        <h4 className="text-[#53c60b] font-bold">{props.name}</h4>
        <div className="flex items-center">
          <Location />
          {props.details[0].Cuisine}
        </div>
      </div>
      <div className="flex justify-start items-center">
        <Dollar />
        {props.discount ? (
          <span className="text-[#ed4133]">
            {(props.price * (100 - props.discount)) / 100} $
          </span>
        ) : (
          <span>{props.price} $</span>
        )}
        {props.discount && (
          <div className="bg-[#ed4133] text-white p-1 rounded absolute top-[15px] left-[15px]">
            {props.discount}%
          </div>
        )}
      </div>
      <Link
        className="bg-[#53c60b] text-white w-full text-center mt-5 py-1 rounded"
        href={`/menu/${props.id}`}
      >
        See Details
      </Link>
    </div>
  );
};

export default Card;
