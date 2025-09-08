import { fontList } from "@/utils/Fonts"
import { useDispatch } from "react-redux"
import { toggleBarActions } from "@/lib/redux/toggleFontSlice"
import { NextFont } from "next/dist/compiled/@next/font"

export default function FontItem() {
    const dispatch = useDispatch()
    
    // function setFont(newFont: string) {
    //     console.log(newFont, "new font")
    //     document.documentElement.style.setProperty('--font', newFont)
    // }

    //setFont using Redux

    function setFont(newFont: NextFont) {
        dispatch(toggleBarActions.updateFont(newFont))
    }

    return(
        <>
            <div className="lg:h-64 max-lg:h-40 overflow-y-auto px-2">
                {fontList.map((item) => 
                <div 
                    key={item.id} 
                    // onMouseEnter={() => setHoveredFontId(item.id)}
                    // onMouseLeave={() => setHoveredFontId(null)}
                    >
                    
                    {<div onClick={() => setFont(item.font)} className={`hover:bg-white ${item.font.className} hover:rounded-lg hover:cursor-pointer p-1`}>Analytics at Peak!</div>}
                    {/* {hoveredFontId === item.id &&
                        <div onClick={() => setFont(item.id)} className={`${item.font.className} bg-white border border-gray-200 rounded-lg p-1 cursor-pointer`}>Trade with Zoonest</div>
                    } */}
                </div>)}
            </div>
        </>
    )
}