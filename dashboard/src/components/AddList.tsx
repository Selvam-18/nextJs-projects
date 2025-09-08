import { useDispatch, useSelector } from "react-redux"
import { useRef, useEffect } from "react"
import { addListActions } from "@/lib/redux/addListSlice"
import { RootState } from "@/lib/redux/store"
import { addTaskActions } from "@/lib/redux/addTaskSlice"


type AddList = {
    onCancel: () => void,
    onSubmit: () => void
}

export default function AddList({onCancel}: AddList) {
    const dispatch = useDispatch()
    const modalRef = useRef<HTMLDivElement | null>(null)
    const isModal = useSelector((state:RootState) => state.modal.isModal)
    const taskValue = useRef<HTMLInputElement>(null)
    const dateValue = useRef<HTMLInputElement>(null)
    function onSubmit() {
        const newTask = {
            task: taskValue.current?.value!,
            date: dateValue.current?.value!
        } 
        dispatch(addTaskActions.addNewTask(newTask))
        dispatch(addListActions.toggleModal())
    }
    function onClose() {
        dispatch(addListActions.toggleModal())
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if(modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose()
            }   
        }

        if(isModal){
            document.addEventListener('mousedown',handleClickOutside)
        }
        
        return () => {
            document.removeEventListener('mousedown',handleClickOutside)

        }
    }, [onClose])


    return(
        <>
        <div  className=" flex items-center justify-center fixed z-40 inset-0">
            <div ref={modalRef} className="flex flex-col border-2 h-60 md:w-100 lg:w-100 p-4 gap-3 justify-evenly rounded-2xl bg-white">
                <h1 className="font-semibold text-2xl">New Task</h1>
                <input ref={taskValue} type="text" placeholder="Enter task here" className="border-1 rounded-sm p-2"/>
                <input ref={dateValue} type="date" className="border-1 rounded-sm p-2"/>
                <div className="flex justify-between">
                <button onClick={onCancel} className="bg-red-300 p-2 rounded-xl">Cancel</button>
                <button onClick={onSubmit} className="bg-green-300 p-2 rounded-xl">Save</button>

                </div>
            </div>
        </div>
        </>
    )
}