import SideNavBar from "@/components/SideNavBar";

export default function systemLayout(props: React.PropsWithChildren) {
  return (
    <div className="flex h-screen">
      <SideNavBar />
      <main>{props.children}</main>
    </div>
  );
}
