import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
    return (
        <div className="width flex" id="navbar">
            <div className="flex align-center" id="left">                 
                <div id="logo">Logo</div>
                <div>Dashboard</div>
                <div>Settings</div>
            </div>
            <div id="right" className="flex align-center">
                <div>
                    <input type="text" placeholder="Search..."/>
                </div>
                <div>
                    <FontAwesomeIcon icon={faBell}/>
                </div>
                <div className="flex align-center" id="profile-wrapper">
                    <div id="profile"></div>
                    <div id="name">User Name</div>
                </div>
            </div>
        </div>
    )
}
