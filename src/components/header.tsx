import Image from 'next/image'
import f1Logo from "../../assets/f1_logo.svg";

export default function Header() {
  return(
    <div className="navbar">
        <Image
        src={f1Logo}
        alt="F1"
        width={120}
        height={30} /> 
    </div>
  )
}
