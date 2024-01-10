import Link from "next/link";
import React from "react";
import Image from "next/image";
import Attributes from "@/components/layout/pageComponents/Attributes";
import Fast from "../../public/images/icons/Fast";
import Food from "../../public/images/icons/Food";
import Choice from "../../public/images/icons/Choice";
import Clock from "../../public/images/icons/Clock";

const Home = () => {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col">
          <h2 className="font-bold border-b-[3px] border-solid border-[#53c60b] w-fit mx-0 my-5 text-lg">
            JetFood
          </h2>
          <p className="font-medium my-3 mx-0">Food Delivery and Takeout!</p>
          <span className="text-gray-600">
            JetFood is an online food ordering and delivery platform launched by
            Uber in 2014. Meals are delivered by couriers using cars, scooters,
            bikes, or on foot.
          </span>
          <Link
            className="bg-[#53c60b] text-white py-3 px-7 w-fit mt-7 rounded"
            href="/menu"
          >
            See All
          </Link>
        </div>
        <div>
          <Image
            width={1000}
            height={1000}
            className="w-[550px]"
            src="/images/banner.png"
            alt="Food image"
          />
        </div>
      </div>
      <div className="mt-24">
        <h3 className="text-xl text-[#53c60b] my-6">Why us?</h3>
        <div className="flex justify-between">
          <Attributes icon={<Fast />} title="fast" />
          <Attributes icon={<Food />} title="Best Restaurants" />
          <Attributes icon={<Choice />} title="Your Choice" />
          <Attributes icon={<Clock />} title="24-7" />
        </div>
      </div>
    </>
  );
};

export default Home;
