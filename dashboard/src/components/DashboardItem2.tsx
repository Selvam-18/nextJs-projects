import { ForwardRefExoticComponent, SVGProps, RefAttributes } from "react";
import { CurrencyDollarIcon, ArrowUpIcon } from "@heroicons/react/24/outline";


export default function DashboardItem() {
    const revenuStats = [
        {
            icon: CurrencyDollarIcon,
            price: 7025
        },
        {
            icon: ArrowUpIcon,
            price: 74
        }
    ]
    return(
        <>
        {revenuStats.map((item) => {
            const Icon = item.icon
            return (
                <div key={item.price} className="flex flex-row items-center md:col-span-3 lg:col-span-3   border m-2 border-gray-200 bg-white rounded-2xl p-2 shadow-md">
                    <div className="bg-[#f2f4f7] w-fit p-3 rounded-lg  border-gray-200">
                        <Icon className="size-10"/>
                    </div>
                    <div className="flex flex-row items-baseline mx-2">
                        <span className="text-2xl lg:text-3xl  new-theme font-bold">${item.price}</span>
                        <span className="flex items-baseline">/this month</span>
                    </div>
                </div>
            ) 
        })}
        </>
    )
}