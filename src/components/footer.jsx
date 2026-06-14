import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>Aatmiya Foundation</h3>
          <p>
            A non-profit organisation dedicated to serving our elderly community
            with dignity, companionship, and compassionate care.
          </p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <p><Link href="/">Home</Link><br />
          <Link href="/about">About Us</Link><br />
          <Link href="/events">Events</Link><br />
          <Link href="/contact">Contact</Link></p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>Piyush Tiwari (Founder)<br />
          +91-8176060674<br />
          UN Tiwari (Trustee)<br />
          +91-8299641211</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Aatmiya Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;