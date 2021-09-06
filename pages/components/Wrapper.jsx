import Navbar from "./Navbar";
import { useStore } from '../store'

export default function Wrapper({child}) {
    const store = useStore()

    return (
        <div id="screen" className={(store.theme === 'dark' ? 'dark' : 'light') + ' width height'}>
            <Navbar />
            <div>
                {child}
            </div>
        </div>
    )    
}