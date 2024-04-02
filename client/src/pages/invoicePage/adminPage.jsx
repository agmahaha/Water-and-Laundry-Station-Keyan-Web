import React, { useState, useEffect } from 'react';
import Invoice from './Invoice';
import Navbar from '../../components/Navbar';
import {
  Box,
  Breadcrumbs,
  Divider,
  Link,
  Typography,
  Select,
  MenuItem,
  IconButton,
  Tooltip,
  TextField,
  Button,
} from '@mui/material';
import FlexBetween from '../../components/FlexBetween';
import Footer from '../../components/Footer';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { updateOrder } from '../../api'; // Import function for updating order details

const OrderAdmin = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [typeFilter, setTypeFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [dateFilter, setDateFilter] = useState('Newest');
  const [showFilters, setShowFilters] = useState(false);
  const [editOrder, setEditOrder] = useState(null); // State to track the order being edited
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    // Fetch orders from the server or use sample data
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/orders');
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    // Filter orders based on selected filters
    let filtered = [...orders];
    if (typeFilter !== 'All') {
      filtered = filtered.filter(order => order.type === typeFilter);
    }
    if (statusFilter !== 'All') {
      filtered = filtered.filter(order => order.status === statusFilter);
    }
    if (dateFilter === 'Newest') {
      filtered = filtered.reverse();
    }
    setFilteredOrders(filtered);
  }, [orders, typeFilter, statusFilter, dateFilter]);

  const handleTypeChange = event => {
    setTypeFilter(event.target.value);
  };

  const handleStatusChange = event => {
    setStatusFilter(event.target.value);
  };

  const handleDateChange = event => {
    setDateFilter(event.target.value);
  };

  const toggleFilters = () => {
    setShowFilters(prevState => !prevState);
  };

  const handleUpdateOrder = async (orderId, updatedOrder) => {
    try {
      const response = await updateOrder(orderId, updatedOrder);
      if (!response.ok) {
        throw new Error('Failed to update order');
      }
      // Update the order in the local state
      setOrders(prevOrders =>
        prevOrders.map(order =>
          order.id === orderId ? { ...order, ...updatedOrder } : order
        )
      );
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  return (
    <>
      <Navbar />
      <Box
        bgcolor="white"
        sx={{
          width: '85%',
          margin: '0 auto',
          borderRadius: '10px',
          minHeight: '100vh',
        }}
      >
        <FlexBetween gap="1.75rem" padding="1rem" paddingBottom={0}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/" fontWeight="bold" fontSize={20}>
              Home
            </Link>
            <Typography color="text.primary" fontWeight="bold" fontSize={20}>
              Admin Orders
            </Typography>
          </Breadcrumbs>
        </FlexBetween>
        <Divider spacing={1} variant="middle">
          <Typography fontSize={50} textAlign="center" color="#F4A4AC" fontWeight="bold">
            ADMIN ORDERS
          </Typography>
        </Divider>
        <Box textAlign="center" my={2}>
          <Tooltip title="Toggle Filters" sx={{ mx: 'auto', mr: 2 }}>
            <IconButton onClick={toggleFilters}>
              <FilterAltIcon />
              <Typography>Filters</Typography>
            </IconButton>
          </Tooltip>
          {showFilters && (
            <>
              <Select value={typeFilter} onChange={handleTypeChange} sx={{ mr: 2 }}>
                <MenuItem value="All">All Types</MenuItem>
                <MenuItem value="Laundry">Laundry</MenuItem>
                <MenuItem value="Water">Water</MenuItem>
                {/* Add more types here */}
              </Select>
              <Select value={statusFilter} onChange={handleStatusChange} sx={{ mr: 2 }}>
                <MenuItem value="All">All Statuses</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="In-Progress">In Progress</MenuItem>
                <MenuItem value="For-Delivery">For Delivery</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
              <Select value={dateFilter} onChange={handleDateChange}>
                <MenuItem value="Newest">Newest First</MenuItem>
                <MenuItem value="Oldest">Oldest First</MenuItem>
              </Select>
            </>
          )}
        </Box>
        <Box style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          {filteredOrders && filteredOrders.map((order, index) => (
            <Invoice
              key={order.id} // Ensure each Invoice component has a unique key
              order={order}
              index={index}
              onUpdateOrder={handleUpdateOrder} // Pass the update function to the Invoice component
            />
          ))}
          {filteredOrders.length === 0 && (
            <Typography variant="subtitle1" align="center" mt={4}>
              No orders found.
            </Typography>
          )}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default OrderAdmin;
