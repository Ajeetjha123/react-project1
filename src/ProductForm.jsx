import React, { useState } from 'react';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    productId: '',
    sellingPrice: '',
    productName: '', // Corrected the property name here
  });
  const [productList, setProductList] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      productId: formData.productId,
      sellingPrice: formData.sellingPrice,
      productName: formData.productName,
    }
    setProductList((prevList) => [...prevList, newProduct])
    setFormData({
      productId: '',
      sellingPrice: '',
      productName: '',
    });
  };
   const handelDelete = (index) => {
      setProductList((prevList) => prevList.filter((_, i) => i !== index));
   }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="productId">Product Id:</label>
        <input
          type="text"
          id="productId"
          name="productId"
          value={formData.productId}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="sellingPrice">Selling Price:</label>
        <input
          type="number"
          id="sellingPrice"
          name="sellingPrice"
          value={formData.sellingPrice}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Product</button>
     </form>

     {productList.length > 0 && (
      <div>
        <h2>Products:</h2>
        <ul>
          {productList.map((product, index) => (
            <li key={index}>
              {product.productName} -{product.sellingPrice}
              <button onClick={() => handelDelete(index)}>Delete</button>
              <h2>Total value worth of Product: rs {product.sellingPrice}</h2>
            </li>
          ))}
        </ul>
      </div>
     )}
    </div>
  );
};

export default ProductForm;
