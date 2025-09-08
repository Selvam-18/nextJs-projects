'use client'

import DashboardItem from "@/components/DashboardItem";
import DashboardItem2 from "@/components/DashboardItem2";
// import { applyTheme } from '../../hooks/useApplyTheme'



export default function () {
    // applyTheme()
    return(
        <>
            <h1 className=" text-2xl lg:text-4xl ">Employee Stats</h1>

            <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3">
                <DashboardItem />   
            </div>

            <h1 className="text-2xl lg:text-4xl mt-5 ">Revenue Stats</h1>

            <div className=" flex flex-col md:grid md:grid-cols-6 lg:grid lg:grid-cols-6">
                <DashboardItem2 />
            </div>

            {/* <h1 className="new-theme">Another section</h1> */}
        </>
    )
}