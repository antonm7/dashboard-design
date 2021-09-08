import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";
import Link from 'next/link'
import React from 'react'

export default function IconLink(props) {

    const router = useRouter()

    return (
        <Link href={props.href}>
            <a>
                <FontAwesomeIcon 
                    icon={props.icon} 
                    id="icon-link" 
                    className={router.pathname === props.href ? 'selected' : ''}
                />            
            </a>
        </Link>
    )
}