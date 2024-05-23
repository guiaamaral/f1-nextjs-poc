import Image from 'next/image'
import f1Logo from "../../assets/f1_logo.svg";
import Link from 'next/link';

export default function Header() {
  return(
    <div className="navbar">
      <Link href={'/'}>
        <Image
          src={f1Logo}
          alt="F1"
          width={120}
          height={30} />
      </Link> 
    </div>
  )
}
