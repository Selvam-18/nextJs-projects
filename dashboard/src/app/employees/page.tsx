'use client'
import EmployeeTable from "@/components/EmployeeTable";

// import { applyTheme } from '../../hooks/useApplyTheme'

export default function Page() {
    // applyTheme()
    
    return(
        <>
        {/* <PageLayout> */}

            <h1 className="text-2xl lg:text-4xl">Employee List</h1>
            <div className=" max-w-full my-3 overflow-x-auto rounded-2xl bg-white border border-gray-200 ">
              <div className=" min-w-[730px]  p-4">
                <EmployeeTable />
                </div>
                {/* {employees.map()} */}
            </div>
        {/* </PageLayout> */}
        </>
    )
}