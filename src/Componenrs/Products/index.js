import React, { useState } from 'react';
import './ProductSell.css';

const products = [
    {
        name: 'Abstract 3D',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        stock: 32,
        price: '$ 45.99',
        totalSales: 20
    },
    {
        name: 'Sarphens Illustration',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        stock: 32,
        price: '$ 45.99',
        totalSales: 20
    }
];

const ProductRow = ({ product }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'flex-start',flex:3}}>
            <img src="https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg" alt={product.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                <h4>{product.name}</h4>
                <p style={{marginTop:'-10px'}}>{product.description}</p>
            </div>
        </div>
        <div style={{flex: 1}}>{product.stock} in stock</div>
        <div style={{flex: 1}}>{product.price}</div>
        <div style={{flex: 1}}>{product.totalSales}</div>
    </div>
);
const ProductSell = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all'); // 'all' or 'last30days'

    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase());
        // For more complex filtering, you can add more conditions here
    });

    return (
        <div className="product-sell">
          <div style={{display:'flex',justifyContent:'space-between'}}>
          <h2>Product Sell</h2>
            <div className="search-filter">
                <input
                    type="text"
                    placeholder="Search"
                    className="search-input"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <select className="filter-dropdown" value={filter} onChange={e => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="last30days">Last 30 days</option>
                </select>
            </div>
          </div>
            <div className="headers" style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{flex: 3}}>Product Name</div>
                <div style={{flex: 1}}>Stock</div>
                <div style={{flex: 1}}>Price</div>
                <div style={{flex: 1}}>Total Sales</div>
            </div>
            {filteredProducts.map((product, index) => (
                <ProductRow key={index} product={product} />
            ))}
        </div>
    );
};

export default ProductSell;