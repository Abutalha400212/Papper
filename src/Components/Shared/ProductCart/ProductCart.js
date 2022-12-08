import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCart = () => {
  const [products, setProducts] = useState([]);

  const handleDelete = () => {};
  return (
    <div className="overflow-x-auto mt-10 min-h-screen ">
      <table className="table w-full">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
          <tr>
            <th scope="col" className="py-2">
              Q.
            </th>
            <th scope="col" className="py-2">
              Product Img
            </th>
            <th scope="col" className="py-2">
              Name
            </th>
            <th scope="col" className="py-2">
              Product Name
            </th>
            <th scope="col" className="py-2">
              Price
            </th>
            <th scope="col" className="py-2">
              Payment
            </th>
            <th scope="col" className="py-2">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-center text-gray-600 font-mono">
          {products.map((product, i) => (
            <tr
              key={product._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="py-2">1</td>
              <td>
                <div className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                    <img src={product?.img} alt="" />
                  </div>
                </div>
              </td>
              <td className="py-2">Rahim</td>
              <td className="py-2">Apple</td>
              <td className="py-2">230$</td>
              <td className="py-2">Pay</td>
              <td className="py-2">
                <button
                  onClick={() => {
                    handleDelete(product);
                  }}
                  className="btn btn-sm btn-accent"
                >
                  Delete
                </button>
              </td>
              <td className="py-2">
                {product.price && !product.status && (
                  <Link to={`/dashboard/payment/${product._id}`}>
                    <button className="btn btn-sm btn-primary">Pay</button>
                  </Link>
                )}
                {product.price && product.status && (
                  <span className="text-primary ">Paid</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductCart;
