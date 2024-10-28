import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SectionSelect from "./components/SectionSelect";
import PersonSelect from "./components/PersonSelect";
import ProductList from "./components/ProductList";
// import // fetchSections,
// fetchPeople,
// fetchProducts,
// sendDocument,
// "./services/api";
import { peopleData, productData, sectionData } from "./services/data";

function App() {
  const [sections, setSections] = useState([]);
  const [people, setPeople] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [document, setDocument] = useState({});

  // useEffect(() => {
  //   fetchSections().then(setSections);
  // }, []);
  useEffect(() => {
    setSections(sectionData);
    setPeople(peopleData);
    setProducts(productData);
  }, []);

  // const handleSectionChange = (event) => {
  //   const sectionId = event.target.value;
  //   setSelectedSection(sectionId);
  //   fetchPeople(sectionId).then(setPeople);
  //   fetchProducts(sectionId).then(setProducts);
  // };

  const handleSectionChange = (event) => {
    const sectionId = event.target.value;

    setSelectedSection(sectionId);

    const filteredProducts = productData.filter(
      (product) => product.sectionId === sectionId
    );
    setProducts(filteredProducts);
  };

  const handlePersonChange = (event) => {
    const personId = event.target.value;
    console.log("personid", personId);
    setSelectedPerson(personId);
  };
  const handleProductChange = (productId, quantity) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, quantity: parseInt(quantity) }
          : product
      )
    );
  };

  const handleSubmit = () => {
    const documentData = {
      sectionId: selectedSection,
      personId: selectedPerson,
      products,
    };
    // sendDocument(documentData).then((response) => {
    //   console.log("Document saved:", response);
    // });
  };
  return (
    <Router>
      <div>
        <h1>Production Data Entry</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SectionSelect
                  sections={sections}
                  onSectionChange={handleSectionChange}
                />
              </>
            }
          />
          <Route
            path="/person"
            element={
              <PersonSelect
                people={people}
                onPersonChange={handlePersonChange}
              />
            }
          ></Route>
          <Route
            path="/products"
            element={
              <>
                <ProductList
                  products={products}
                  onProductChange={handleProductChange}
                />
                <button onClick={handleSubmit}>Send Document</button>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
