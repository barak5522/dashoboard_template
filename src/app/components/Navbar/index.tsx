import Image from "next/image"
import ThemeSwitch from "./ThemeSwitch"

const Navbar = () => {
    return <div className="navbar flex min-h-15 justify-around items-center" >
        <Image src='/logo.png' width="56" height="56" alt="NEW SPACE" className="rounded" />
        <h1 className="text-4xl font-bold p-2">Dashboard</h1>
        <ThemeSwitch />
    </div>
}

export default Navbar