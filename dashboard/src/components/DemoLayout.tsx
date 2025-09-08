'use client'

import { ReactNode } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../lib/redux/store"

import SideBar from "./SideBar"
import Header from "./Header"

import {sidebarAction} from "../lib/redux/toggleSlice"




export default function DemoLayout({ children }: { children: ReactNode }) {
  const dispatch = useDispatch()
  const sidebar  = useSelector((state: RootState) => state.sidebar.sidebar)
  const font = useSelector((state:RootState) => state.fontBar.selectedFont)
  
  const closeSideBar = () => { dispatch(sidebarAction.toggleSidebar()) }

  return (
    <>
      <div className={`flex flex-col ${font.className} `}>
        <Header />
        <div className="flex flex-row mt-16 bg-[#f9fafb]">
          <div className={`hidden lg:block ${sidebar ? "lg:w-[336px]" : 'lg:w-20'}`}>
            <SideBar isOpen={sidebar} onClose={closeSideBar}/>
          </div>
            {sidebar && <SideBar isOpen={sidebar} onClose={closeSideBar}/>}
          <div className={`w-full mt-10 mx-5 p-2 ${sidebar && 'max-lg:opacity-50'}`}>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}