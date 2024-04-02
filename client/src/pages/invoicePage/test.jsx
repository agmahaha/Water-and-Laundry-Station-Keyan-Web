import React, { useState, useEffect } from 'react';
import Invoice from './Invoice'; // Import the Invoice component

const OrderInvoice = () => {
  const [orders, setOrders] = useState([]);

  const sampleOrders = [
    {
      date: '2024-03-01',
      invoiceNumber: 'INV001',
      items: [
        { name: 'Product A', weight: '1kg', price: '$10', quantity: 2 },
        { name: 'Product B', weight: '2kg', price: '$20', quantity: 1 },
      ],
      paymentInstructions: 'Please make payment to XYZ account.',
      totalAmountDue: '$40',
    },
    {
      date: '2024-03-05',
      invoiceNumber: 'INV002',
      items: [
        { name: 'Product C', weight: '0.5kg', price: '$5', quantity: 3 },
        { name: 'Product D', weight: '1.5kg', price: '$15', quantity: 2 },
      ],
      paymentInstructions: 'Please make payment to ABC account.',
      totalAmountDue: '$40',
    },
    {
      date: '2024-03-10',
      invoiceNumber: 'INV003',
      items: [
        { name: 'Product E', weight: '2kg', price: '$20', quantity: 1 },
        { name: 'Product F', weight: '3kg', price: '$30', quantity: 1 },
      ],
      paymentInstructions: 'Please make payment to DEF account.',
      totalAmountDue: '$50',
    },
  ];

  useEffect(() => {
    // Fetch orders from the backend or set sampleOrders if not fetching from a server
    // For testing without MongoDB, use sampleOrders instead of fetching
    // Example of fetching orders from the server:
    // fetchOrdersFromServer();
    setOrders(sampleOrders); // Use sampleOrders for testing without MongoDB
  }, []);

  return (
    <div>
      <h1>Order Invoices</h1>
      {orders && orders.map((order, index) => (
        <Invoice key={index} order={order} index={index} />
      ))}
    </div>
  );
};

export default OrderInvoice;
