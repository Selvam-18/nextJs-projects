'use client'


import TaskItem from "@/components/TaskItem";
// import { applyTheme } from '../../hooks/useApplyTheme'
import AddList from "@/components/AddList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { addListActions } from "@/lib/redux/addListSlice";
import { useRef, useEffect } from "react";



export default function Page() {
    // applyTheme()
    const modalRef = useRef<HTMLDivElement | null>(null)
    const dispatch = useDispatch()
    const isModal = useSelector((state:RootState) => state.modal.isModal)
    // const  isModal  = useSelector((state: RootState) => state.modal.isModal)
    

    const  toggleModal = ()  => {
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
            {isModal && <AddList onCancel={toggleModal} onSubmit={() => {}}/>}

            <div  className={`${isModal && 'opacity-30'}`}>
                <h1 className=" text-2xl lg:text-4xl ">Task Lists</h1>
                <div className="bg-white  border border-gray-200 rounded-2xl p-3 mt-3">
                    <div className="flex flex-row-reverse border-b border-gray-200 ">
                        <button className=" text-white p-3 rounded-xl m-2  new-theme" onClick={toggleModal}>+ Add Task</button>
                    </div>
                    <TaskItem />
                </div>
            </div>
            {/* </PageLayout> */}
        </>
    )
}

{/* <div className="p-2">
                        <h1 className="text-xl font-semibold ">To Do</h1>
                        {taskList.map((item) => <TaskItem key={item.date} task={item.task} date={item.date}/>)}
                  
                    </div>
                    <div className="p-2">
                        <h1 className="text-xl font-semibold ">To Do</h1>
                    </div>

                    <div className="p-2">
                        <h1 className="text-xl font-semibold ">In Progress</h1>
                        {taskList.map((item) => <TaskItem key={item.date} task={item.task} date={item.date}/>)}
                       
                    </div>
                    <div className="p-2">
                        <h1 className="text-xl font-semibold ">Completed</h1>
                        {taskList.map((item) => <TaskItem key={item.date} task={item.task} date={item.date}/>)}
                      
                    </div> */}