import React, { useState, useRef, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Anywhere');
  const optionsRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    }

    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  const handleAnywhereClick = () => {
    setSelectedOption('Anywhere');
    setShowOptions(!showOptions);
  };

  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer relative">
      <div
        className={`flex flex-row items-center justify-between border-b-[1px] border-neutral-200 px-6 ${
          selectedOption === 'Anywhere' ? 'bg-white' : ''
        }`}
        onClick={handleAnywhereClick}
      >
        <div className={`text-sm font-semibold`}>Anywhere</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
          Any Week
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block">
            {selectedOption === 'Anywhere' ? 'Search' : 'Add Guests'}
          </div>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
      {showOptions && (
        <div className="bg-gray-100 rounded-b-lg p-4 mt-1" ref={optionsRef}>
          <div className="text-sm font-semibold mb-2">Where</div>
          <input
            type="text"
            placeholder="Search destination"
            className="w-full border p-2 rounded-lg"
          />
          <div className="flex justify-between mt-3">
            <div className="text-sm font-semibold">Check In</div>
            <div className="text-sm font-semibold">Check Out</div>
            <div className="text-sm font-semibold">Who</div>
          </div>
          <div className="flex justify-between mt-1">
            <input
              type="text"
              placeholder="Add dates"
              className="w-1/3 border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Add dates"
              className="w-1/3 border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Add guests"
              className="w-1/3 border p-2 rounded-lg"
            />
          </div>
          <button className="w-full bg-red-500 text-white py-2 mt-3 rounded-md hover:bg-red-600 transition">
            Search
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
