import SideNavBar from "@/components/SideNavBar";

export default function systemLayout(props: React.PropsWithChildren) {
  return (
    <div className="flex h-screen p-6">
      <SideNavBar />
      <main className="flex-1 h-full w-full pt-8">{props.children}</main>
    </div>
  );
}
