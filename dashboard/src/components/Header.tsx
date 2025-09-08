'use client'

import { useDispatch, useSelector } from "react-redux";
import { sidebarAction } from "@/lib/redux/toggleSlice";
import { profilebarAction } from "@/lib/redux/toggleProfileSlice";
import { toggleBarActions } from "@/lib/redux/toggleFontSlice";
import { RootState } from "../lib/redux/store"
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import {
    UserCircleIcon,
    BellIcon,
    MagnifyingGlassIcon,
    EllipsisHorizontalIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

import { useEffect, useRef } from "react";
import Branding from "./Branding";
import CustomTheme from "./CustomTheme";
import Customize from "./Customize";
import ThemeItem from "./ThemeItem";
import FontItem from "./FontItem";


export default function Header() {
    const dispatch = useDispatch()
    const profileRef = useRef<HTMLDivElement | null>(null);
    const fontRef = useRef<HTMLDivElement | null>(null);

    const { profilebar } = useSelector((state: RootState) => state.profilebar)
    const { sidebar } = useSelector((state: RootState) => state.sidebar)
    const fontBar = useSelector((state: RootState) => state.fontBar.fontbar)

    function onCloseProfileBar() {
        dispatch(profilebarAction.toggleprofilebar())
    }
    function onCloseFontBar() {
        dispatch(toggleBarActions.toggleFontBar())
    }
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
                onCloseProfileBar()
            }
            if (fontRef.current && !fontRef.current.contains(event.target as Node)) {
                onCloseFontBar()
            }
        }

        if (profilebar) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        if (fontBar) {
            document.addEventListener('mousedown', handleClickOutside)
        }
        

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)

        }
    }, [ onCloseProfileBar])
    const toggleSidebar = () => {
        dispatch(sidebarAction.toggleSidebar())
    }

    const toggleProfilebar = () => {
        dispatch(profilebarAction.toggleprofilebar())
    }
    const toggleFontBar = () => {
        dispatch(toggleBarActions.toggleFontBar())
    }


    return (
        <header className="flex flex-row  w-screen fixed max-lg:border-b  border-gray-200 bg-white z-50 overflow-x-hidden">
            <div className="max-lg:order-2 lg:border-r lg:border-gray-200 max-lg:w-screen flex max-lg:justify-center">
                <Branding />
            </div>

            <div className="flex flex-row  lg:border-b border-gray-200 lg:w-screen lg:justify-between">  
                <div className="flex flex-row items-center max-lg:order">
                    <div className={`${sidebar ? 'lg:block max-lg:hidden' : ''}`}>
                        <button onClick={toggleSidebar} className="">
                            <Bars3CenterLeftIcon className="size-10 p-2 icon" />
                        </button>
                    </div>

                    <div className={`lg:hidden ${sidebar ? 'block' : 'hidden'}`}>
                        <button onClick={toggleSidebar}>
                            <XMarkIcon className="size-10 p-2 icon" />
                        </button>
                    </div>
                    <div>
                        <div className="hidden rounded-lg border-gray-200 border p-2   lg:flex">
                            <MagnifyingGlassIcon className="size-5 icon" />
                            <input type="text" placeholder=" Search" className=" mx-2 focus:outline-none " />
                        </div>
                    </div>
                </div>


                <div className="lg:flex flex-row m-4 gap-4 items-center hidden">
                    <button>
                    <BellIcon className="size-10 rounded-3xl   border border-gray-200 p-2 hover:text-black icon" />
                    </button>

                    <button>
                    <UserCircleIcon className="size-10 rounded-3xl   border border-gray-200 p-2 hover:text-black icon" />
                    </button>

                    {!fontBar && <button onClick={toggleFontBar} className="px-2 underline">Customize</button>}
                    {fontBar && <button onClick={onCloseFontBar} className="px-2 underline">Close</button>}
                    {fontBar && <Customize />}

                </div> 
            </div>

                <div className="lg:hidden my-4 max-lg:order-3 max-w-15 min-w-15 justify-center flex">
                    <button onClick={toggleProfilebar} className={`${profilebar && 'hidden'}`}>
                        <EllipsisHorizontalIcon className={`size-8   ${profilebar ? "bg-[#f2f4f7] rounded-xl" : " "}`} />
                    </button>
                    <button className={`${profilebar ? 'block' : 'hidden'}`}>
                        <XMarkIcon className={`size-8  ${profilebar ? "bg-[#f2f4f7] rounded-xl" : " "}`} />
                    </button>
                </div>

                {profilebar &&
                    <div ref={profileRef} className=" w-full fixed top-18 border-b bg-white border-gray-200 lg:hidden gap-2">
                        <div className="flex flex-col p-2  w-full justify-between max-lg:flex-col">
                            <div className="flex flex-col  bg-gray-200 rounded-xl max-lg:my-2 max-lg:py-2 order-2">
                                <h1 className="px-2 font-semibold">Available Themes:</h1>
                                <ThemeItem />
                                <div className="flex flex-row px-2">
                                    <span>Custom:</span>
                                    <CustomTheme />
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-200 rounded-xl max-lg:my-2 max-lg:py-2 order-3">
                                <h1 className="px-2  bg-gray-200 relative top-0 font-semibold">Available Fonts:</h1>
                                <FontItem />
                            </div>

                            <div className="flex flex-row-reverse items-center order-1">
                                <BellIcon className="size-10 rounded-3xl border-1 border-gray-200 p-2 mx-1 hover:text-black icon" />
                                <p className="mx-2">Username</p>
                            </div>
                        </div>
                    </div>}
        </header>
    )
}