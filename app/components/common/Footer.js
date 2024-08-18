import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        {/* Grid layout for columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Column 1: Company Logo */}
          <div className="flex justify-center lg:justify-start">
            <img src="/Logo.png" alt="Company Logo" className="h-36" />
          </div>

          {/* Column 2: Social Media Links with Icons and Text */}
          <div>
            <h3 className="font-bold mb-3 text-lg">Social Media</h3>
            <div className="flex flex-col space-y-4">
              <a href="https://www.facebook.com/kyrafrica" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center space-x-2">
                <FaFacebook className="text-2xl" />
                <span>Facebook</span>
              </a>
              <a href="https://twitter.com/kyrafrica" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="flex items-center space-x-2">
                <FaTwitter className="text-2xl" />
                <span>Twitter</span>
              </a>
              <a href="https://www.linkedin.com/company/kyrafrica" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center space-x-2">
                <FaLinkedin className="text-2xl" />
                <span>LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/kyrafrica" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center space-x-2">
                <FaInstagram className="text-2xl" />
                <span>Instagram</span>
              </a>
              <a href="https://www.instagram.com/kyrafrica" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center space-x-2">
                <FaYoutube className="text-2xl" />
                <span>YouTube</span>
              </a>
            </div>
          </div>


          {/* Column 3: Contact Information with Icons */}
          <div className="flex flex-col">
            <h3 className="font-bold mb-3 text-lg">Contacts</h3>
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2 text-xl" />
              <p className="text-base">Address: Riverside, Moi, Kenya, 00200</p>
            </div>
            <div className="flex items-center mb-2">
              <FaPhoneAlt className="mr-2 text-xl" />
              <p className="text-base">Mobile: 0101129466</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-xl" />
              <p className="text-base">Email: consult@kyrafrica.com</p>
            </div>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="flex flex-col">
            <h3 className="font-bold mb-3 text-lg">Newsletter</h3>
            <form className="relative flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="p-4 rounded-2xl text-black yellow flex-grow" style={{ backgroundColor: 'rgba(224, 226, 28, 0.7)' }}
                required 
              />
              <button 
                className="bg-white text-black items-center flex px-4 py-2 rounded-full absolute right-0 top-0 bottom-0 m-4"
              >
                Subscribe
              </button>
            </form>
          </div>


          {/* Column 5: Legal Information */}
          <div className="flex flex-col">
            <h3 className="font-bold mb-3 text-lg">Legal</h3>
            <a href="#" className="text-base hover:underline">Terms of Service</a>
            <a href="#" className="text-base hover:underline">Privacy Policy</a>
          </div>
        </div>

        {/* Bottom Section: All Rights Reserved */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p>© 2024 KYR AFRICA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
