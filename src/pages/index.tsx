import Link from "next/link";
import React from "react";
import Image from "next/image";
import Attributes from "@/components/layout/pageComponents/Attributes";
import Fast from "../../public/images/icons/Fast";
import Food from "../../public/images/icons/Food";
import Choice from "../../public/images/icons/Choice";
import Clock from "../../public/images/icons/Clock";
import Apple from "../../public/images/icons/Apple";
import SpaceX from "../../public/images/icons/SpaceX";
import Binance from "../../public/images/icons/Binance";
import Tesla from "../../public/images/icons/Tesla";

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
        <p className="font-semibold text-justify">
          BotoFood company was founded in 2009 by Garrett Camp and Travis
          Kalanick.The company began food delivery in August 2014 with the
          launch of the UberFRESH service in Santa Monica, California. In 2015,
          the platform was renamed to UberEATS and the ordering software was
          released as its own application, separate from the app for Uber
          rides.In 2016, it commenced operations in both London and Paris.
        </p>
        <div className="flex justify-between">
          <Attributes icon={<Fast />} title="fast" />
          <Attributes icon={<Food />} title="Best Restaurants" />
          <Attributes icon={<Choice />} title="Your Choice" />
          <Attributes icon={<Clock />} title="24-7" />
        </div>
      </div>
      <div className="flex items-center justify-around">
        <Apple />
        <SpaceX />
        <Binance />
        <Tesla />
      </div>
      <div className="mb-20">
        <h3 className="text-lg text-[#53c60b] my-6">How to Order?</h3>
        <ul className="font-semibold">
          <li>Sign in (or create an account) and set your delivery address.</li>
          <li>Choose the restaurant you want to order from.</li>
          <li>Select your items and tap “Add to Cart”.</li>
          <li>To place your order, select “View cart” or “Checkout”.</li>
          <li>Review your order and tap “Place Order”...</li>
          <li>Track your order progress.</li>
        </ul>
      </div>
      <div className="flex justify-between mb-20">
        <Link href="/menu" className="shadow-lg py-4 px-12 rounded">
          Menu
        </Link>
        <Link href="/categories" className="shadow-lg py-4 px-12 rounded">
          Categories
        </Link>
        <Link href="/" className="shadow-lg py-4 px-12 rounded">
          Discount
        </Link>
      </div>
      <div className="my-20">
        <h3 className="text-[#53c60b] my-6">Restrictions</h3>
        <p className="font-semibold text-justify">
          Prohibited items. Merchants may only offer to sell items expressly
          permitted by their agreement with Uber. A merchant cannot offer
          specially regulated or illicit items, like cannabidiol (CBD) and
          tetrahydrocannabinol (THC), on their Uber Eats menu.
        </p>
      </div>
    </>
  );
};

export default Home;
