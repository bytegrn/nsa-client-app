"use client";

import Image from "next/image";
import Avatar from "./Avatar";
import NavItem from "./NavItem";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";

export default function SideNavBar() {
  const NAV_ICONS = [
    { src: "/menu", icon: "boards icon", path: "dashboard" },
    { src: "/tickets", icon: "tickets icon", path: "support" },
    { src: "/user-group", icon: "user-group icon", path: "users" },
    { src: "/gear", icon: "geat icon", path: "settings" },
  ] as const;

  const currentPath = useSelectedLayoutSegment();
  const router = useRouter();
  console.log(currentPath);
  return (
    <aside className="flex flex-col items-center justify-between px-6 py-8 bg-white rounded-[16px]">
      <Image width={64} height={47} alt="NLNG logo" src={"/logo.svg"} />
      <nav className="gap-12 flex flex-col">
        {NAV_ICONS.map(({ src, path, icon }) => (
          <NavItem
            onClick={() => router.push(`/s/${path}`)}
            src={
              currentPath === path
                ? src.concat("-active.svg")
                : src.concat(".svg")
            }
            iconName={icon}
            isActive={currentPath === path}
            key={src}
          />
        ))}
      </nav>
      <Avatar />
    </aside>
  );
}
