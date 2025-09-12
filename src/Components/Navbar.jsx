import logo from "../assets/ChandraLogo.png"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaSquareXTwitter, FaWhatsapp } from "react-icons/fa6"
const Navbar = () => {
    return (
        <nav className=" mb-5 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt="Logo" className="mx-2 w-20 rounded-2xl" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4  text-2xl">
                <a
                    href="https://www.linkedin.com/in/chandrashekhar-bhagat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:scale-110 hover:text-blue-500 transition-transform duration-300 ease-in-out"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="https://github.com/chandrashekhar-25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:scale-110 hover:text-gray-800 transition-transform duration-300 ease-in-out"
                >
                    <FaGithub />
                </a>

                <a
                    href="#"
                    // target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:scale-110 hover:text-blue-500 transition-transform duration-300 ease-in-out"
                >
                    <FaSquareXTwitter />
                </a>

                <a
                    href="https://www.instagram.com/abd___786"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:scale-110 hover:text-pink-500 transition-transform duration-300 ease-in-out"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://wa.me/+918200835840"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:scale-110 hover:text-green-500 transition-transform duration-300 ease-in-out"
                >
                    <FaWhatsapp />
                </a>


            </div>
        </nav>
    )
}

export default Navbar
