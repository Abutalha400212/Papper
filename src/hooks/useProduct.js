import { useEffect, useState } from "react";

const useProduct = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  return [categories];
};
export default useProduct;
