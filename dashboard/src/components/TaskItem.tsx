import { CalendarIcon, UserCircleIcon } from "@heroicons/react/24/outline"
import { RootState } from "@/lib/redux/store"
import { useSelector } from "react-redux"

export default function TaskItem() {
    const tasks = useSelector((state:RootState) => state.task)
    return(
        <>
        <div className="p-2">
            {tasks.map((item) => 
            <div key={item.heading}>
            <h1 className="text-xl font-semibold" >{item.heading}</h1>
            {item.tasks.map((item) => 
            <div className="flex lg:flex-row flex-col border-1 border-gray-200 rounded-2xl justify-between m-2  p-3" key={item.date}>
                <div className="flex mx-2  items-baseline md:w-4/6 lg:w-full w-full my-2">
                    <input type="checkbox" />
                    <p className="mx-2">{item.task}</p>

                </div>
                <div className="flex gap-4 lg:w-3/6 flex-col">
                    <div className="lg:ml-auto flex lg:flex-row flex-row lg:gap-4 gap-2 mx-2">

                        <CalendarIcon className="size-6" />
                        <p className="inline-flex">{item.date}</p>
                        <UserCircleIcon className="size-6" />
                    </div>
                </div>
            </div>)}
            </div> )}
        </div>
        </>
    )
}