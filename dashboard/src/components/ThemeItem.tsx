import { BeakerIcon } from "@heroicons/react/24/outline"

export default function () {
    const themes = [
  { colorName: "Crimson Red", colorValue: "#DC143C" },
  { colorName: "Sky Blue", colorValue: "#87CEEB" },
  { colorName: "Forest Green", colorValue: "#228B22" },
  { colorName: "Goldenrod", colorValue: "#DAA520" },
  { colorName: "Deep Pink", colorValue: "#FF1493" },
  { colorName: "Slate Gray", colorValue: "#708090" },
  { colorName: "Turquoise", colorValue: "#40E0D0" },
  { colorName: "Tomato", colorValue: "#FF6347" },
  { colorName: "Midnight Blue", colorValue: "#191970" },
  { colorName: "Orchid", colorValue: "#DA70D6" },
  { colorName: "Coral", colorValue: "#FF7F50" },
  { colorName: "Lime Green", colorValue: "#32CD32" },
  { colorName: "Steel Blue", colorValue: "#4682B4" },
  { colorName: "Chocolate", colorValue: "#D2691E" },
  { colorName: "Peru", colorValue: "#CD853F" },
  { colorName: "Teal", colorValue: "#008080" },
  { colorName: "Violet", colorValue: "#EE82EE" },
  { colorName: "Salmon", colorValue: "#FA8072" },
  { colorName: "Dark Orange", colorValue: "#FF8C00" },
  { colorName: "Royal Blue", colorValue: "#4169E1" },
];

    function pickTheme(newTheme: string) {
        document.documentElement.style.setProperty('--theme-color', newTheme);
    }
    return(
        <>
                <div className="m-1 p-1 flex flex-wrap max-lg:flex-row max-lg:flex-wrap">
                    {themes.map((item) =>
                        <BeakerIcon 
                            key={item.colorValue}
                            onClick={() => pickTheme(item.colorValue)} 
                            style={{backgroundColor: `${item.colorValue}`}} 
                            className="size-7  m-1  rounded-sm text-white" 
                        />)
                    }
                </div> 
        </>
    )
}