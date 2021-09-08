import { faChartBar, faColumns } from "@fortawesome/free-solid-svg-icons"
import IconLink from "./common/IconLink"

export default function Sidebar() {
    return (
        <div id="sidebar" className="height">
            <div>
                <IconLink icon={faColumns} href="/"/>
            </div>
            <div>
                <IconLink icon={faChartBar} href="/analytics"/>
            </div>
        </div>
    )
}