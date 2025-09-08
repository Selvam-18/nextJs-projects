export default function CustomTheme() {
    function pickColor() {
        const element = document.getElementById('color-picker') as HTMLInputElement
        const colorValue = element.value
        document.documentElement.style.setProperty('--theme-color', colorValue);
        element.value = colorValue
    }
    return(
        <>
            <div className="mx-2 flex items-center">
                <input  type="color" id="color-picker"  onChange={pickColor}/> 
            </div>
        </>
    )
}