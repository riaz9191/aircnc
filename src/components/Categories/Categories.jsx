import React, { useState } from "react";
import Container from "../Shared/Container";
import { categories } from "./categoriesData";
import CategoryBox from "./CategoryBox";
import Modal from "./Modal/MOdal";

const Categories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFilterButtonClick = () => {
    // Open the modal when the filter button is clicked
    setIsModalOpen(true);
  };

  return (
    <div>
      <Container>
        <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
          {categories.map((category, index) => (
            <React.Fragment key={category.label}>
              <CategoryBox label={category.label} icon={category.icon}></CategoryBox>
              {/* Add the filter button beside the last category */}
              {index === categories.length - 1 && (
                <div className="relative inline-block text-left ml-4">
                  <div>
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      id="filter-button"
                      aria-haspopup="true"
                      aria-expanded="true"
                      onClick={handleFilterButtonClick} // Open the modal on click
                    >
                      Filter
                      {/* Add an icon or arrow here if needed */}
                    </button>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </Container>

      {/* Render the modal when isModalOpen is true */}
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Categories;