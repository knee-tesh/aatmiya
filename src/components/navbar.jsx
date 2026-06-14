import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">Aatmiya</Link>
      </div>
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/events">Events</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/contact" className="nav-btn">Donate</Link>
      </div>
    </div>
  );
};

export default Navbar;