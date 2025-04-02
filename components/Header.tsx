import Link from "next/link";
import "../app/global.css"

export default function Header(){
    const linkStyling = "p-1 m-2 text-xl hover:underline";
    return (
        <header className="flex justify-between items-center h-20">
            <h2 className="text-4xl font-semibold p-4">Icon-Finder</h2>
            <nav className="p-2 m-4">
                <Link href="/" className={linkStyling}>
                    Home
                </Link>
                <Link href="/icon" className={linkStyling}>
                    Icon
                </Link>
            </nav>
        </header>
    );
}