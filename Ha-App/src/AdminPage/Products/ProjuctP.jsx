import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:3000/api/get');
        setProducts(response.data); // Assuming response.data contains an array of products
      } catch (error) {
        console.error('Error fetching products:', error);
        toast.error('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/delete/${productId}`);
      if (response.data.success) {
        toast.success(response.data.message || 'Product deleted successfully');
        setProducts(products.filter((product) => product.id !== productId)); // Remove deleted product from the list
      } else {
        toast.error(response.data.message || 'Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('An error occurred while deleting the product');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-28">
      <ToastContainer />
      <h1 className="text-3xl font-bold text-center mb-6">Admin - Manage Products</h1>
      {loading ? (
        <p className="text-center text-gray-700">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <p className="text-gray-700 mb-4">Product Name:<span className='text-green-400'>{product.name}</span></p>
              <p className="text-gray-700 mb-4">model:{product.model}</p>
              <h2 className=" mb-2 text-sm">{product.discription}</h2>
              <button
                onClick={() => handleDelete(product._id)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
              >
                Delete Product
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
