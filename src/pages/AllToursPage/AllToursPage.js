import React from "react";
import { useNavigate } from "react-router-dom";
import { FilterLayout, TopSection } from "./AllToursPage.styles";

const AllToursPage = () => {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }
  return (
    <>
      <TopSection>
        <FilterLayout>Одноденні Тури</FilterLayout>
      </TopSection>
    </>
  );
};

export default AllToursPage;
