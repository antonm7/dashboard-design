import Navbar from "./Navbar";
import { useStore } from '../store'
import Sidebar from "./SideBar"

export default function Wrapper({children}) {
    const store = useStore()

    return (
        <div className={(store.theme === 'dark' ? 'dark' : 'light') + ' width height'}>
            <Navbar />
            <div className="height flex">
                <Sidebar />
                <div id="main-screen">
                    {children}
                </div>
            </div>
        </div>
    )    
}