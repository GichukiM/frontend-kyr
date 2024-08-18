import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-1/4 p-4 bg-white text-black space-y-4">
      {/* Top Section */}
      <div className="border border-black p-4">
        <h2 className="text-lg font-semibold">Top</h2>
        <ul className="space-y-2">
          <li className="text-sm">#Citizens have a right to better services</li>
          <li className="text-sm">#MumaringRightsKE</li>
          <li className="text-sm">#JusticeForAll</li>
          <li className="text-sm">#LegalAidKenya</li>
          <li className="text-sm">#EndGBV</li>
          <li className="text-sm">#YouthEmpowermentKE</li>
          <li className="text-sm">#RightToEducation</li>
          <li className="text-sm">#FreedomOfSpeechKE</li>
        </ul>
      </div>

      {/* Latest Section */}
      <div className="border border-black p-4">
        <h2 className="text-lg font-semibold">Latest</h2>
        <ul className="space-y-2">
          <li className="text-sm">#Citizens have a right to better services</li>
          <li className="text-sm">#JusticeForAll</li>
          <li className="text-sm">#LegalAidKenya</li>
        </ul>
      </div>

      {/* News and Updates Section */}
      <div className="border border-black p-4">
        <h2 className="text-lg font-semibold">News and Updates</h2>
        <ul className="space-y-2">
          <li className="text-sm">#Citizens have a right to better services</li>
          <li className="text-sm">#MumaringRightsKE</li>
          <li className="text-sm">#JusticeForAll</li>
          <li className="text-sm">#LegalAidKenya</li>
        </ul>
      </div>

      {/* About Section */}
      <div className="border border-black p-4">
        <h2 className="text-lg font-semibold">About</h2>
        <p className="text-sm">About. Terms and Conditions. Careers. Cookies. More.</p>
      </div>
    </aside>
  );
};

export default Sidebar;
