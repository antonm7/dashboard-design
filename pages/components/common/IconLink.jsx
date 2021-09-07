import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link'

export default function IconLink(props) {
    return (
        <div>
            <Link href={props.href}>
                <FontAwesomeIcon icon={props.icon}/>
            </Link>
        </div>
    )
}