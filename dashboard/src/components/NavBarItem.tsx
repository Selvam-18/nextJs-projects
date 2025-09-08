import { SVGProps, ForwardRefExoticComponent, RefAttributes } from "react";
import Link from "next/link";
import clsx from "clsx";

import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
    icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> &
    { title?: string; titleId?: string } &
    RefAttributes<SVGSVGElement>
  >,
    pathname: string,
    name: string
}

export default function NavBarItem({ icon: Icon, pathname, name }: SidebarItemProps) {
    const currentPath = usePathname()
    const sidebar = useSelector((state:RootState) => state.sidebar.sidebar)
    return (
        <div className={clsx("flex flex-row hover:bg-[#f2f4f7] rounded-lg p-2 gap-2 items-center ", currentPath === `${pathname}` && `  new-theme`)}> 
            <Link href={pathname} className="flex gap-2 w-full ">
                <Icon className="size-6" />
                {sidebar && name}
            </Link>
        </div>
    )
}