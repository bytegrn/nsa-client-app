import Image from "next/image";

export default function NavItem(props: {
  src: string;
  iconName: string;
  isActive: boolean;
  onClick: React.MouseEventHandler;
}) {
  return (
    <div
      className={`w-16 h-16 flex items-center justify-center rounded-[100px] transition-all ${
        props.isActive ? "bg-ui-primary-50" : "bg-inherit"
      } hover:bg-ui-primary-50`}
      onClick={props.onClick}
    >
      <Image src={props.src} alt={props.iconName} width={32} height={32} />
    </div>
  );
}
