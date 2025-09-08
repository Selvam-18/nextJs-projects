'use client'

import { ChartBarSquareIcon, UserGroupIcon,  Square3Stack3DIcon, IdentificationIcon,EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from '../lib/redux/store'
import NavBarItem from "./NavBarItem";


type Sidebar = {
    isOpen: boolean,
    onClose: () => void
}

export default function SideBar({isOpen, onClose} : Sidebar) {
    const sidebar = useSelector((state:RootState) => state.sidebar.sidebar)


    useEffect(() => {
        const screenSize = window.matchMedia('(max-width:1024px)')
        let isEventAdded = false
        function handleOutsideClick(event: MouseEvent) {
            const element = event.target as HTMLElement
            const clickedInside = element.closest('[data-inside-sidebar]')

            if(!clickedInside){
                console.log("sidebar closed")
                onClose()
            }
        }


        function matchScreenSize() {
            if(screenSize.matches && isOpen) {
                if(!isEventAdded){
                    document.addEventListener('mousedown', handleOutsideClick)
                    isEventAdded = true
                    console.log("event added")
                }
            } else{
                if(isEventAdded){
                    document.removeEventListener('mousedown', handleOutsideClick)
                    isEventAdded = false
                }
            }
        }

        matchScreenSize()

        screenSize.addEventListener('change', matchScreenSize)
     
        return () => {
            if(isEventAdded) {

                document.removeEventListener('mousedown', handleOutsideClick)
                console.log("event removed from clean up function")
            }
            
            screenSize.removeEventListener('change', matchScreenSize)
        }
    }, [isOpen])

   
    return(

        <>
        
        <aside data-inside-sidebar className={`h-screen ${sidebar ? 'w-64': 'w-20'}   flex flex-col p-2 fixed top-0 left-0 border-r border-gray-200 overflow-auto bg-white z-40`}>
            <div  className={`mt-18`}>
                <div className="flex flex-col my-2 ">
                    {sidebar ?
                        <h1 className="text-sm ml-2 text-[#8e9cb3]">MENU</h1>
                        :
                        <div className="flex ml-4">
                            <EllipsisHorizontalIcon className="size-6 " />
                        </div>
                    }
                    <div className="flex flex-col gap-3 pl-2 text-md my-3">
                        <NavBarItem icon={ChartBarSquareIcon} pathname="/dashboard" name="Dashboard"/>
                        <NavBarItem icon={UserGroupIcon} pathname="/employees" name="Employees"/>
                        <NavBarItem icon={Square3Stack3DIcon} pathname="/tasks" name="Tasks"/>
                        <NavBarItem icon={IdentificationIcon} pathname="/directors" name="Directors"/>
                    </div>
                </div>
            </div>
        </aside>
        </>
    )
}