import React from 'react'
import { Package, Plus } from 'lucide-react'
import { salesDistribution } from '../data/mockData.js'

const products = [
  { name: 'Wireless Earbuds Pro', category: 'Electronics', price: '$89.00', stock: 245 },
  { name: 'Classic Denim Jacket', category: 'Fashion', price: '$64.00', stock: 120 },
  { name: 'Ceramic Table Lamp', category: 'Home & Living', price: '$42.00', stock: 78 },
  { name: 'Matte Lipstick Set', category: 'Beauty', price: '$28.00', stock: 310 },
  { name: 'Smart Fitness Band', category: 'Electronics', price: '$59.00', stock: 156 },
  { name: 'Linen Throw Pillow', category: 'Home & Living', price: '$19.00', stock: 205 },
]

export default function Products() {
  return (
    <div className="fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h1 className="display" style={{ fontSize: 22, margin: 0 }}>Products</h1>
        <button className="btn-primary"><Plus size={15} /> Add Product</button>
      </div>

      <div className="grid grid-4">
        {products.map((p) => (
          <div key={p.name} className="card">
            <div className="stat-icon" style={{ background: '#9B87F0', marginBottom: 12 }}>
              <Package size={20} />
            </div>
            <h4 style={{ margin: '0 0 4px', fontSize: 14.5 }}>{p.name}</h4>
            <p style={{ margin: '0 0 10px', fontSize: 12.5, color: 'var(--text-muted)' }}>{p.category}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13.5, fontWeight: 600 }}>
              <span>{p.price}</span>
              <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{p.stock} in stock</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
