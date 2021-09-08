import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image'
import masterCard from '../../public/mastercard.png'

export default function CreditCard() {
    return (
        <div id="credit-card">
            <div id="header">
                <FontAwesomeIcon icon={faCreditCard}/>
                <div id="number">
                    4326 1789 9800 3227
                </div>
            </div>
            <div id="bottom" className="flex align-center">
                <div id="left">
                    <p>Card Holder</p>
                    <p>User Name</p>
                </div>
                <div id="right">
                    <Image src={masterCard}/>
                    <p>MASTERCARD</p>
                </div>
            </div>
        </div>
    )
}