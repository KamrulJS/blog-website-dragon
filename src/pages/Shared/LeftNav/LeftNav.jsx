import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Leftnav.css';

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h3 className="fw-bold">All Categories</h3>
      <div className="categories py-4 bg-light">
        {categories.map((categorie) => (
          <p key={categorie.id}>
            <Link to={`./categorie/${categorie.id}`} className="text-decoration-none text-black fs-5 fw-semibold categories-list">{categorie.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
