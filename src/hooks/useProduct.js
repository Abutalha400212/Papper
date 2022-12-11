import { useEffect, useState } from "react";

const useProduct = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://sample-apple-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  return [categories];
};
export default useProduct;
