import React from "react";
import { IAttributes } from "@/types/attributes.type";

const Attributes = (props: IAttributes) => {
  return (
    <div className="w-[150px] rounded-[10px] shadow-lg flex flex-col items-center py-7 mt-4">
      {props.icon}
      <p className="font-semibold mt-5">{props.title}</p>
    </div>
  );
};

export default Attributes;
