import { useEffect, useRef } from "react";
import CustomTheme from "./CustomTheme";
import FontItem from "./FontItem";
import ThemeItem from "./ThemeItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { toggleBarActions } from "@/lib/redux/toggleFontSlice";


export default function Customize() {
    const customizeRef = useRef<HTMLDivElement | null>(null)
    const dispatch = useDispatch();
    const fontBar = useSelector((state:RootState) => state.fontBar.fontbar)
    const onCloseFontBar = () => {
        dispatch(toggleBarActions.toggleFontBar())
    }
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if(customizeRef.current && !customizeRef.current.contains(event.target as Node)) {
                onCloseFontBar()
            }
        }

        if(fontBar) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return() => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [fontBar])
    return(
        <>
            <div ref={customizeRef} className="flex flex-row  fixed top-20  p-1 right-5 w-1/3 border-b border-gray-200 bg-gray-200 rounded-lg">
                <div className=" w-1/2 m-1">
                    <h1 className="justify-center flex text-2xl border-b border-black">Themes</h1>
                    <div className="flex flex-row flex-wrap overflow-y-auto justify-center">
                        <ThemeItem />
                    </div>
                    <div className="flex justify-center">
                        <p className="ml-2 font-semibold">Custom:</p>
                        <CustomTheme/>
                    </div>
                </div>
                <div className="w-1/2 m-1">
                    <h1 className="flex justify-center text-2xl border-b border-black">Fonts</h1>
                    <div className="overflow-y-auto">
                        <FontItem />
                    </div>
                </div>
            </div>
        </>
    )
}