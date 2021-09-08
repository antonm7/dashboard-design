import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DashboardBox(props) {
    return (
        <div id="dashboard-box">
            <FontAwesomeIcon icon={props.icon} id="icon"/>
            <p id="para">{props.para}</p>
            <p id="amount">{props.amount}$</p>
        </div>
    )
}