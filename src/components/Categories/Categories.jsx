import React from "react";
import Container from "../Shared/Container";
import { categories } from "./categoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {
  return (
    <div>
      <Container>
        <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
            {
                categories.map(category =>(
                    <CategoryBox label={category.label} icon={category.icon} key={category.label}></CategoryBox>
                ))
            }
        </div>
      </Container>
    </div>
  );
};

export default Categories;
