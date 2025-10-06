import React from "react";

export default function Header({
  title,
  subTitle,
  rightButtons,
  border,
}: {
  title: string;
  subTitle: string;
  rightButtons?: React.ReactNode[];
  border?: true;
}) {
  return (
    <div className="flex px-6 flex-1 pb-6 justify-between relative">
      <div className="gap-1">
        <h1 className="text-[30px] leading-[38px] text-ui-gray-900 font-medium">
          {title}
        </h1>
        <p className="text-[16px] leading-6 font-normal text-ui-gray-500">
          {subTitle}
        </p>
      </div>

      {rightButtons &&
        rightButtons.map((button, index) => <div key={index}>{button}</div>)}

      {border && (
        <div className="h-[1px] w-[calc(100%-48px)] bg-ui-gray-200 absolute bottom-0"></div>
      )}
    </div>
  );
}
