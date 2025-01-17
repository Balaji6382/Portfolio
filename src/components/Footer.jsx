import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#fe5617] text-white py-6">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto text-center space-y-2">
        <p className="text-sm md:text-base font-medium">
          © {new Date().getFullYear()} Balaji All rights reserved.
        </p>
        <p className="text-sm md:text-base font-medium">
          Made with ❤️ by{" "}
          <a href="#" className="underline hover:text-[#ffffff]">
            Balaji D
          </a>
        </p>
        <div className="flex justify-center gap-4 mt-2">
        <a
                  href="https://github.com/Balaji6382"
                  className="hover:text-[#fe5617]"
                >
                  <FaGithub size={29} />
                </a>
                <a
                  href="https://www.linkedin.com/in/balaji-d-7b3a83319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="hover:text-[#fe5617]"
                >
                  <FaLinkedin size={29} />
                </a>

          <a
            href="https://www.instagram.com/the_hittler_390?utm_source=qr&igsh=MTBrNmR1bnk5cWdobA=="
            className="hover:text-[#fe5617]"
          >
            <FaInstagram size={29} />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
