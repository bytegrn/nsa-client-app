import Image from "next/image";

export default function BrandLogo() {
  return (
    <Image
      width={87}
      height={64}
      alt="NLNG logo"
      src={"/logo.svg"}
      className="mx-8 mt-8"
    />
  );
}
