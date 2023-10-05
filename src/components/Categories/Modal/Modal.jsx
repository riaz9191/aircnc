import React, { useState } from "react";
import { MdHome, MdApartment, MdHotel, MdClose } from "react-icons/md";

const Modal = ({ onClose }) => {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 5000]);
  const [selectedBedrooms, setSelectedBedrooms] = useState("any");
  const [selectedBeds, setSelectedBeds] = useState("any");
  const [selectedBathrooms, setSelectedBathrooms] = useState("any");

  const propertyTypes = [
    { icon: <MdHome />, name: "House" },
    { icon: <MdApartment />, name: "Apartment" },
    { icon: <MdHotel />, name: "Guesthouse" },
    { icon: <MdHotel />, name: "Hotel" },
  ];
  
  const handleApplyFilters = () => {
    // Handle filter options here
    // ...
    // Close the modal
    onClose();
  };

  const handlePriceRangeClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percentage = (offsetX / rect.width) * 100;
    const price = Math.floor((percentage / 100) * 5000);

    if (e.clientX > rect.right - 10) {
      // If clicked on the right side, change the maximum price
      setSelectedPriceRange([selectedPriceRange[0], price]);
    } else {
      // If clicked on the left side, change the minimum price
      setSelectedPriceRange([price, selectedPriceRange[1]]);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="fixed inset-0 bg-black opacity-50 "></div>

      <div className="bg-white p-4 rounded-lg shadow-md z-50 max-h-screen overflow-y-auto">
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <MdClose size={24} />
          </button>
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-center">Filters</h2>

        {/* Type of Places */}
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Type of Places</h3>
          <div className="flex justify-between items-center">
            <div>
              <div className="flex justify-between items-center">
                <div
                  className={`cursor-pointer ${
                    selectedType === "all"
                      ? "bg-gray-950 text-white"
                      : "white  border-2 hover:border-black"
                  } p-2 rounded-lg text-center flex-grow`}
                  onClick={() => setSelectedType("all")}
                >
                  All Type
                  <p
                    className={`text-sm mt-2 ${
                      selectedType === "all"
                        ? "text-neutral-500"
                        : "text-neutral-400"
                    }`}
                  >
                    &100 avg
                  </p>
                </div>

                <div
                  className={`cursor-pointer ${
                    selectedType === "rooms"
                      ? "bg-gray-950 text-white"
                      : "white  border-2 hover:border-black"
                  } p-2 rounded-lg text-center flex-grow`}
                  onClick={() => setSelectedType("rooms")}
                >
                  Rooms
                  <p
                    className={`text-sm mt-2 ${
                      selectedType === "all"
                        ? "text-neutral-500"
                        : "text-neutral-400"
                    }`}
                  >
                    &1000 avg
                  </p>
                </div>
                <div
                  className={`cursor-pointer ${
                    selectedType === "homes"
                      ? "bg-gray-950 text-white"
                      : "white  border-2 hover:hover:border-black"
                  } p-2 rounded-lg text-center flex-grow`}
                  onClick={() => setSelectedType("homes")}
                >
                  Homes
                  <p
                    className={`text-sm mt-2 ${
                      selectedType === "all"
                        ? "text-neutral-500"
                        : "text-neutral-400"
                    }`}
                  >
                    &10000 avg
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm mt-2">
                  Description: This is a description of the selected type of
                  place.
                </p>
              </div>
            </div>
            <div className="w-72 h-3w-72 bg-white rounded-full ml-4">
              <img
                src="https://www.pngitem.com/pimgs/m/260-2606481_greek-revival-architecture-house-hd-png-download.png"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Price Range</h3>
          {/* Implement a price range bar chart here */}
          <div className="mb-2">
            <div
              className="h-6 bg-black relative cursor-pointer rounded-xl"
              onClick={handlePriceRangeClick}
            >
              <div
                className="h-full bg-indigo-500 rounded-xl"
                style={{
                  width: (selectedPriceRange[0] / 5000) * 100 + "%",
                }}
              ></div>
              <div
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"
                style={{
                  left: (selectedPriceRange[0] / 5000) * 100 + "%",
                }}
              ></div>
            </div>
          </div>
          {/* Min and Max Price input fields */}
          <div className="flex space-x-4 justify-between">
            <div>
              <div>
                <div>
                  <label htmlFor="minPrice">Minimum Price:</label>
                </div>
                <div>
                  <input
                  className='px-2 py-3'
                    
                    id="minPrice"
                    value={selectedPriceRange[0]}
                    onChange={(e) =>
                      setSelectedPriceRange([
                        parseInt(e.target.value),
                        selectedPriceRange[1],
                      ])
                    }
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="maxPrice">Maximum Price:</label>
              </div>
              <div>
                <input
                className='px-2 py-3'
                  
                  id="maxPrice"
                  value={selectedPriceRange[1]}
                  onChange={(e) =>
                    setSelectedPriceRange([
                      selectedPriceRange[0],
                      parseInt(e.target.value),
                    ])
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* Rooms and Beds */}
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Rooms and Beds</h3>
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Bedrooms</h3>
            <div className="flex space-x-2">
              <button
                className={`px-3 py-2 rounded-lg ${
                  selectedBedrooms === "any"
                    ? "bg-black text-white"
                    : "border border-gray-400 text-gray-400 hover:bg-black hover:text-white"
                }`}
                onClick={() => setSelectedBedrooms("any")}
              >
                Any
              </button>
              <button
                className={`px-3 py-2 rounded-lg ${
                  selectedBedrooms === "1"
                    ? "bg-black text-white"
                    : "border border-gray-400 text-gray-400 hover:bg-black hover:text-white"
                }`}
                onClick={() => setSelectedBedrooms("1")}
              >
                1
              </button>
              <button
                className={`px-3 py-2 rounded-lg ${
                  selectedBedrooms === "2"
                    ? "bg-black text-white"
                    : "border border-gray-400 text-gray-400 hover:bg-black hover:text-white"
                }`}
                onClick={() => setSelectedBedrooms("2")}
              >
                2
              </button>
              <button
                className={`px-3 py-2 rounded-lg ${
                  selectedBedrooms === "3"
                    ? "bg-black text-white"
                    : "border border-gray-400 text-gray-400 hover:bg-black hover:text-white"
                }`}
                onClick={() => setSelectedBedrooms("3")}
              >
                3
              </button>
              <button
                className={`px-3 py-2 rounded-lg ${
                  selectedBedrooms === "4+"
                    ? "bg-black text-white"
                    : "border border-gray-400 text-gray-400 hover:bg-black hover:text-white"
                }`}
                onClick={() => setSelectedBedrooms("4+")}
              >
                4+
              </button>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Beds</h3>
            <div className="flex space-x-2">
              <button
                className={`px-3 py-2 rounded-lg ${
                  selectedBeds === "any"
                    ? "bg-black text-white"
                    : "border border-gray-400 text-gray-400 hover:bg-black hover:text-white"
                }`}
                onClick={() => setSelectedBeds("any")}
              >
                Any
              </button>
              <button
                className={`px-3 py-2 rounded-lg ${
                  selectedBeds === "1"
                    ? "bg-black text-white"
                    : "border border-gray-400 text-gray-400 hover:bg-black hover:text-white"
                }`}
                onClick={() => setSelectedBeds("1")}
              >
                1
              </button>
              <button
                className={`px-3 py-2 rounded-lg ${
                  selectedBeds === "2"
                    ? "bg-black text-white"
                    : "border border-gray-400 text-gray-400 hover:bg-black hover:text-white"
                }`}
                onClick={() => setSelectedBeds("2")}
              >
                2
              </button>
              <button
                className={`px-3 py-2 rounded-lg ${
                  selectedBeds === "3"
                    ? "bg-black text-white"
                    : "border border-gray-400 text-gray-400 hover:bg-black hover:text-white"
                }`}
                onClick={() => setSelectedBeds("3")}
              >
                3
              </button>
              <button
                className={`px-3 py-2 rounded-lg ${
                  selectedBeds === "4+"
                    ? "bg-black text-white"
                    : "border border-gray-400 text-gray-400 hover:bg-black hover:text-white"
                }`}
                onClick={() => setSelectedBeds("4+")}
              >
                4+
              </button>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Bathrooms</h3>
            <div className="flex space-x-2">
              <button
                className={`px-3 py-2 rounded-lg ${
                  selectedBathrooms === "any"
                    ? "bg-black text-white"
                    : "border border-gray-400 text-gray-400 hover:bg-black hover:text-white"
                }`}
                onClick={() => setSelectedBathrooms("any")}
              >
                Any
              </button>
              <button
                className={`px-3 py-2 rounded-lg ${
                  selectedBathrooms === "1"
                    ? "bg-black text-white"
                    : "border border-gray-400 text-gray-400 hover:bg-black hover:text-white"
                }`}
                onClick={() => setSelectedBathrooms("1")}
              >
                1
              </button>
              <button
                className={`px-3 py-2 rounded-lg ${
                  selectedBathrooms === "2"
                    ? "bg-black text-white"
                    : "border border-gray-400 text-gray-400 hover:bg-black hover:text-white"
                }`}
                onClick={() => setSelectedBathrooms("2")}
              >
                2
              </button>
              <button
                className={`px-3 py-2 rounded-lg ${
                  selectedBathrooms === "3"
                    ? "bg-black text-white"
                    : "border border-gray-400 text-gray-400 hover:bg-black hover:text-white"
                }`}
                onClick={() => setSelectedBathrooms("3")}
              >
                3
              </button>
              <button
                className={`px-3 py-2 rounded-lg ${
                  selectedBathrooms === "4+"
                    ? "bg-black text-white"
                    : "border border-gray-400 text-gray-400 hover:bg-black hover:text-white"
                }`}
                onClick={() => setSelectedBathrooms("4+")}
              >
                4+
              </button>
            </div>
          </div>
        </div>

        {/* Property Types */}
        <div className="mb-4">
  <h3 className="text-lg font-medium mb-2">Property Type</h3>
  <div className="flex space-x-4">
    {propertyTypes.map((type) => (
      <button
        key={type.name}
        className={`px-3 py-2 rounded-lg ${
          selectedType === type.name
            ? "bg-black text-white"
            : "border border-gray-400 text-gray-400 hover:bg-black hover:text-white"
        }`}
        onClick={() => setSelectedType(type.name)}
      >
        {type.icon}
        <p className="mt-2">{type.name}</p>
      </button>
    ))}
  </div>
</div>


        <div className="text-right">
          <button
            onClick={handleApplyFilters}
            className="bg-gray-950 text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
