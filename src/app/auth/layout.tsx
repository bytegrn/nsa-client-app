import Image from "next/image";

export default function AuthLayout(props: React.PropsWithChildren) {
  return (
    <div className="flex">
      <div className="flex-1 flex flex-col justify-between">
        <Image
          width={87}
          height={64}
          alt="NLNG logo"
          src={"/logo.svg"}
          className="mx-8 mt-8"
        />
        {props.children}
        <p className="p-8 text-[14px] leading-[20px] font-normal text-ui-gray-500">
          &copy;NLNG {new Date().getFullYear()}
        </p>
      </div>
      <Image
        src="/shapes.png"
        alt="Geometric shapes and images graphics"
        className="h-screen flex-1 p-6"
        width={672}
        height={976}
      />
    </div>
  );
}
