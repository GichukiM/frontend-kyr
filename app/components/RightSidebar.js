import React from 'react';
import Image from 'next/image';
import { FaWhatsapp, FaSearch } from 'react-icons/fa';

const RightSidebar = () => {
  return (
    <aside className="w-full lg:w-1/4 p-4 space-y-8 bg-white text-black">
      {/* Community Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Community</h3>
        {/* WhatsApp Button Subcontainer */}
         <div className="whatsapp-container">
           <button className="whatsapp-button">
             <FaWhatsapp className="whatsapp-icon" /> WhatsApp
           </button>
         </div>
      </div>

      {/* Search Bar Subcontainer */}
         <div className="search-bar text-black">
           <input
             type="text"
             placeholder="Search"
             className="search-input text-black"
           />
           <FaSearch className="search-icon" />
         </div>

         <div className="space-y-4">
          {[
            { name: 'Justice Seekers KE', imgSrc: '' },
            { name: 'Human Rights Forum', imgSrc: '' },
            { name: 'Legal Aid Network', imgSrc: '' },
            { name: 'Youth Rights Alliance', imgSrc: '' },
            { name: 'Civil Rights Coalition', imgSrc: '' }
          ].map((group, index) => (
            <div key={index} className="flex items-center space-x-4 mb-2">
              <Image src={group.imgSrc} alt={`${group.name} logo`} width={40} height={40} className="rounded-full border-black border" />
              <p className='bg-gray-300 p-4 border rounded-lg'>{group.name}</p>
            </div>
          ))}
        </div>

    </aside>
  );
};

export default RightSidebar;
