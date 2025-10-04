import React from "react";

export default function Header({
  title,
  subTitle,
  rightButtons,
}: {
  title: string;
  subTitle: string;
  rightButtons: React.ReactNode[];
}) {
  return (
    <div className="flex px-6 justify-between flex-1 pb-6">
      <div className="gap-1">
        <h1 className="text-[30px] leading-[38px] text-ui-gray-900 font-medium">
          {title}
        </h1>
        <p className="text-[16px] leading-6 font-normal text-ui-gray-500">
          {subTitle}
        </p>
      </div>

      {rightButtons.map((button, index) => (
        <div key={index}>{button}</div>
      ))}
    </div>
  );
}
