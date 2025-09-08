import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

export default function Branding() {
    const sidebar = useSelector((state:RootState) => state.sidebar.sidebar)

    return(
        <div className={`flex my-4 max-lg:order-2 justify-center ${sidebar ? 'w-64' : 'w-19'}`}>
                <img src="../logo.png" className="size-8 "/>
                {sidebar && <h1 className="text-4xl font-semibold mx-1  new-theme hidden lg:block">Analyzd</h1>}
                <h1 className="lg:hidden text-4xl font-semibold mx-1  new-theme">Analyzd</h1>
        </div>
    )
}