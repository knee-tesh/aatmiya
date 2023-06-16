import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Aatmiya Foundation
                </Link>
            </div>
            <div className="links">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/events">Events</Link>
                <Link href="/contact">Contact Us</Link>
            </div>
        </div>
    )
}

export default Navbar;