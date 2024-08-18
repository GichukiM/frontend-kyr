// Example for Senate component
"use client";
import React, { useEffect, useState } from 'react';
import { useSearch } from '../components/common/SearchContext'; 
const Senate = () => {
  const [senators, setSenators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { searchTerm } = useSearch();

  useEffect(() => {
    const fetchSenators = async () => {
      try {
        const response = await fetch("https://necessary-card-750e65ba7c.strapiapp.com/api/senators");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const senatorsList = data.data.map(senator => senator.attributes.Name);
        setSenators(senatorsList);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchSenators();
  }, []);

  const filteredSenators = senators.filter(senator => 
    senator.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-4" style={{
      backgroundImage: 'url(/Africa.jpg)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <h1 className="text-2xl md:text-4xl text-black font-bold text-center my-8">Legislature</h1>
      <section className="my-8 p-4 md:p-12">
        <h2 className="text-xl md:text-2xl text-black font-bold mb-8 md:mb-16">Members of the Senate</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredSenators.map((senator, index) => (
            <div key={index} className="bg-black text-yellow rounded-full border border-black flex flex-col justify-center items-center text-center p-4">
              <h3 className="font-bold">{senator}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Senate;
