"use client";

import { useState, useEffect } from 'react';

const Ministries = () => {
  const [ministers, setMinisters] = useState([]);
  const [ministries, setMinistries] = useState([]);

  useEffect(() => {
    // Function to fetch ministers
    const fetchMinisters = async () => {
      try {
        const response = await fetch('https://necessary-card-750e65ba7c.strapiapp.com/api/ministers');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMinisters(data.data.map(item => ({
          id: item.id,
          name: item.attributes.Name || 'Name Not Provided'
        })));
      } catch (error) {
        console.error('Error fetching ministers:', error);
      }
    };

    // Function to fetch ministries
    const fetchMinistries = async () => {
      try {
        const response = await fetch('https://necessary-card-750e65ba7c.strapiapp.com/api/ministries');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMinistries(data.data.map(item => ({
          id: item.id,
          ministry: item.attributes.Ministry || 'Ministry Not Provided'
        })));
      } catch (error) {
        console.error('Error fetching ministries:', error);
      }
    };

    fetchMinisters();
    fetchMinistries();
  }, []);

  // Combine ministers and ministries data
  const combinedData = ministries.map(ministry => {
    // Find the minister corresponding to this ministry
    const minister = ministers.find(minister => minister.id === ministry.id);
    return {
      ministry: ministry.ministry,
      name: minister ? minister.name : 'Name Not Available'
    };
  });

  return (
    <div className="bg-white p-4" style={{
      backgroundImage: 'url(/Africa.jpg)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <h1 className="text-2xl md:text-4xl text-black font-bold text-center my-8">The Ministries</h1>

      {/* Combined Data Section */}
      <section className="my-8 p-4 md:p-12">
        <h2 className="text-xl md:text-2xl text-black font-bold mb-8 md:mb-16">The Ministries</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {combinedData.map((item, index) => (
            <div key={index} className="yellow text-black rounded-full border border-black flex flex-col justify-center items-center text-center p-4">
              <h3 className="font-bold">{item.name}</h3>
              <p>{item.ministry}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Ministries;
