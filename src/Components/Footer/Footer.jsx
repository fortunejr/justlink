import React from "react";
import { logo } from "../../imports";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-10">
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-between gap-10">
          {/* Logo and Description */}
          <div className="lg:w-1/4">
            <Link to={"/"}>
              <img className="h-14 mb-4 bg-white p-2 rounded-lg" src={logo} alt="LumiGrid logo" />
            </Link>
            <p className="text-white text-sm leading-relaxed">
              JustLink Logistics Limited delivers fast, affordable, and reliable services that simplify trade, expand market access, and support economic competitiveness.
            </p>
          </div>

          {/* Contact Info */}
          <div className="lg:w-1/4">
            <h2 className="font-bold text-white pb-3 pt-7 lg:pt-0">
              Contact Information
            </h2>
            {/* <p className="text-white text-sm">
              📍 B46 Marcus Gundiri Street, Sunshine Estate, Gwarimpa,FCT-Abuja,
              Nigeria
            </p>
            <a href="mailto:info@muuvilitylogisticsltd.com">
              <p className="text-white text-sm mt-2">
                📧 info@muuvilitylogistics.com
              </p>
            </a>
            <a href="mailto:muuvylitylogisticsltd825@gmail.com">
              <p className="text-white text-sm mt-2">
                📧 imuuvylitylogisticsltd825@gmail.com
              </p>
            </a>
            <a href="tel:+2349091112210">
              <p className="flex items-center gap-3 text-white mt-2">
                <MdPhone className="text-white text-sm" />
                <span> +234-909-111-2210
                </span>
              </p>
            </a>
            <a href="tel:+2348163647971">
              <p className="flex items-center gap-3 text-white">
                <MdPhone className="text-white text-sm" />
                <span> +234-816-364-7971
                </span>
              </p>
            </a> */}
          </div>


          {/* Social Icons */}
          <div className="lg:w-1/4 pt-7 lg:pt-0">
            <h2 className="font-bold text-white pb-3">Follow Us</h2>
            <div className="flex items-center gap-4 text-white">
              <a target="_blank" rel="noopener noreferrer" href="">
                <FaFacebook size={20} />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="">
                <FaInstagram size={20} />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm mt-10 text-white uppercase">
          &copy; {year} Justlink LOGISTICS LTD
        </p>
        {/* <p className="text-center text-[9px] mt-10 text-blue-400">
          Built by <a href='https://xmotivotechnologies.com/' target='_blank'>xMotivo Technologies Ltd</a>
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;