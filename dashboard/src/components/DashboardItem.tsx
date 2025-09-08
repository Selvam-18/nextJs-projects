import { 
    AcademicCapIcon, 
    WrenchScrewdriverIcon, 
    IdentificationIcon 
} from "@heroicons/react/24/outline"


export default function DashboardItem() {

    const employeeStats = [
        {
            heading: 'Field Workers',
            count: 200,
            icon: WrenchScrewdriverIcon
        },
        {
            heading: 'Managers',
            count: 15,
            icon: IdentificationIcon
        }, 
        {
            heading: 'Executive Officers',
            count: 3,
            icon: AcademicCapIcon
        }
    ]

    return(
        <>
           
            {employeeStats.map((item) => {
                const Icon = item.icon;
                return (
                <div key={item.heading} className="flex flex-col border bg-white border-gray-200 p-3 justify-between rounded-2xl lg:col-span-2 m-2 shadow-md">
                    <div className="bg-[#f2f4f7] w-fit p-3 rounded-lg  border-gray-200">
                        <Icon  className="size-8"/>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-md">{item.heading}</h1>
                        <div className="flex justify-between items-baseline mt-4">
                            <span className="text-4xl font-bold new-theme">{item.count}</span>
                        </div>
                    </div>
                </div>
                )
            })}
        </>
    )
}