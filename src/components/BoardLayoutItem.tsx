import React from "react";

interface Props {
  img: string;
  title: string;
}

const BoardLayoutItem = ({ img, title }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="rounded overflow-hidden flex drop-shadow-md">
        <img className="rounded-lg m-0" src={img} alt={title} />
      </div>
      <span className="leading-relaxed font-primary text-center text-sm my-1 text-orange-900 tracking-widest px-2">
        {title}
      </span>
    </div>
  );
};

export default BoardLayoutItem;
