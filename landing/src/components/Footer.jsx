import React from 'react';
import {
  FaFacebookF,
  FaYoutube,
  FaPinterestP,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter
} from 'react-icons/fa6';
import { MdEmail, MdPhone } from 'react-icons/md';
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='"px-4 py-8 md:px-16 md:py-16'>
    <div className="bg-[#e9f3ff] rounded-3xl mx-4 md:mx-10 mt-20 px-6 md:px-12 py-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="md:w-1/3">
          <img
            src={logo} 
          
            className="w-28 mb-4"
          />
          <p className="text-gray-700 mb-4">
            The best digital marketing agency in Pune with a proven track record of consistently delivering quality service.
          </p>

          <p className="font-semibold text-gray-900 mb-1">Address</p>
          <p className="text-gray-700 text-sm">
            Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14,<br />
            Maharashtra, India.
          </p>

          <div className="mt-4">
            <p className="font-semibold text-gray-900 mb-1">Contacts</p>
            <div className="flex items-center gap-2 text-gray-700 text-sm mb-2">
              <MdEmail className="text-lg" />
              hello@osumare.in
            </div>
            <div className="flex items-center gap-2 text-gray-700 text-sm">
              <MdPhone className="text-lg" />
              +91 8459 8762 26
            </div>
          </div>
        </div>

        <div className="md:w-1/3">
          <p className="font-semibold text-gray-900 mb-4">Menu</p>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>

        <div className="md:w-1/3">
          <p className="font-semibold text-gray-900 mb-4">Social</p>
          <div className="flex flex-wrap gap-4 text-white">
            <div className="bg-black p-2 rounded-full">
              <FaXTwitter />
            </div>
            <div className="bg-black p-2 rounded-full">
              <FaFacebookF />
            </div>
            <div className="bg-black p-2 rounded-full">
              <FaYoutube />
            </div>
            <div className="bg-black p-2 rounded-full">
              <FaPinterestP />
            </div>
            <div className="bg-black p-2 rounded-full">
              <FaWhatsapp />
            </div>
            <div className="bg-black p-2 rounded-full">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>

     
    </div>
    <p className="text-center text-sm text-gray-600 mt-10">
        © 2023 Osumare. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
