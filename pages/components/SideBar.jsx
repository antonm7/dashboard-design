import { faChartBar, faColumns } from "@fortawesome/free-solid-svg-icons"
import IconLink from "./common/IconLink"

export default function Sidebar() {
    return (
        <div id="sidebar" className="height">
            <IconLink icon={faColumns} href="/"/>
            <IconLink icon={faChartBar} href="/analytics"/>
        </div>
    )
}