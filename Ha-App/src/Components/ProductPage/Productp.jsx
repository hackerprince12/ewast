import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/get');
        setProducts(response.data); // Assuming response.data contains an array of products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300"
          >
            <img
              src={product.image}
              alt={product.discription}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Name : {product.name}</h2>
            <h2 className=" font-semibold mb-2">Model:{product.model}</h2>
            <p className="text-gray-700 mb-4">{product.category}</p>
            <button
              onClick={() => openModal(product)}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 pt-28 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="text-gray-700 font-semibold">Name: {selectedProduct.name}</p>
            <h2 className="  mb-2">Model:{selectedProduct.model}</h2>
            <p className="text-gray-600">Description:{selectedProduct.discription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
