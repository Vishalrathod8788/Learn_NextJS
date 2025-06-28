import Link from "next/link";

const Navigation = () => {
    return (
    <header className="grid grid-cols-2 font-work">
        <div className="">Logo.</div>
        <nav>
            <ul className="flex gap-4">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/about/teams">Teams</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
    )
}

export default Navigation;