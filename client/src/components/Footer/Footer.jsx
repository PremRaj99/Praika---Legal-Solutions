import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const socialLinks = [
    {
      href: "https://www.facebook.com",
      icon: <FaFacebookF size={24} />,
    },
    {
      href: "https://www.twitter.com",
      icon: <FaTwitter size={24} />,
    },
    {
      href: "https://www.linkedin.com",
      icon: <FaLinkedinIn size={24} />,
    },
    {
      href: "https://www.instagram.com",
      icon: <FaInstagram size={24} />,
    },
  ];

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];
return (
    <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    <h1 className="text-2xl font-bold">
                        <span className="text-yellow-500">Praika</span> Legal Solutions
                    </h1>
                    <p className="mt-4">
                        Praika Legal Solutions is committed to providing top-notch legal
                        services to our clients. Our team of experienced professionals is
                        here to help you with all your legal needs.
                    </p>
                </div>
                <div className="w-full md:w-1/3">
                    <h2 className="text-xl font-semibold">Quick Links</h2>
                    <ul className="mt-4 space-y-2">
                        {navLinks.map(({ to, label }, index) => (
                            <li key={index}>
                                <Link to={to} className="hover:underline">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full md:w-1/3">
                    <h2 className="text-xl font-semibold">Contact Us</h2>
                    <ul className="mt-4 space-y-2">
                        <li>
                            <FaPhone className="inline mr-2" /> +1 234 567 890
                        </li>
                        <li>
                            <FaEnvelope className="inline mr-2" /> info@praika.com
                        </li>
                        <li>
                            <FaMapMarkerAlt className="inline mr-2" /> 123 Praika St,
                            Legal City, LS 12345
                        </li>
                    </ul>
                    <div className="flex items-center gap-4 my-4">
                        {socialLinks.map(({ href, icon }, index) => (
                            <a
                                key={index}
                                href={href}
                                className="text-white hover:text-yellow-500"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-gray-700 text-center py-4 mt-8">
            &copy; {new Date().getFullYear()} Praika Legal Solutions | All Rights
            Reserved
        </div>
    </footer>
);
}
