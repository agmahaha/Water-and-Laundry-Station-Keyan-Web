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
  Modal,
  Button,
  TextField,
} from '@mui/material';
import FlexBetween from '../../components/FlexBetween';
import Footer from '../../components/Footer';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const OrderAdmin = () => {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [typeFilter, setTypeFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [dateFilter, setDateFilter] = useState('Newest');
  const [showFilters, setShowFilters] = useState(false);
  const [editedOrder, setEditedOrder] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [newTotal, setNewTotal] = useState(0);
  const isAdmin = user.userType === "admin";

  const sampleOrders = [
    {
      id: 1,
      date: '2024-02-27',
      invoiceNumber: 'INV001',
      status: 'Completed',
      type: 'Laundry',
      items: [
        { name: 'Product A', weight: '1kg', price: '₱10', quantity: 2 },
        { name: 'Product B', weight: '2kg', price: '₱20', quantity: 1 },
      ],
      paymentInstructions: 'Please make payment to XYZ account.',
      totalAmountDue: '₱240',
    },
    {
      id: 2,
      date: '2024-03-01',
      invoiceNumber: 'INV002',
      status: 'For-Delivery',
      type: 'Laundry',
      items: [
        { name: 'Product A', weight: '1kg', price: '₱10', quantity: 2 },
        { name: 'Product B', weight: '2kg', price: '₱20', quantity: 1 },
      ],
      paymentInstructions: 'Please make payment to XYZ account.',
      totalAmountDue: '₱240',
    },
    {
      id: 3,
      date: '2024-03-05',
      invoiceNumber: 'INV003',
      status: 'In-Progress',
      type: 'Laundry',
      items: [
        { name: 'Product C', weight: '0.5kg', price: '₱5', quantity: 3 },
        { name: 'Product D', weight: '1.5kg', price: '₱15', quantity: 2 },
      ],
      paymentInstructions: 'Please make payment to ABC account.',
      totalAmountDue: '₱340',
    },
    {
      id: 4,
      date: '2024-03-10',
      invoiceNumber: 'INV004',
      status: 'Pending',
      type: 'Water',
      items: [
        { name: 'Product E', gallonType: 'Round', weight: 'Purified', price: '₱20', quantity: 1 },
        { name: 'Product F', gallonType: 'Round', weight: 'Purified', price: '₱30', quantity: 1 },
      ],
      paymentInstructions: 'Please make payment to DEF account.',
      totalAmountDue: '₱350',
    },
  ];

  const fetchOrders = async () => {
    try {
        const response = await fetch(`http://localhost:3001/order/adminOrder?userType=${user.userType}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        setOrders(data);
    } catch (error) {
        console.error("Error: " + error);
    }
};

  const updateOrder = async (orderId, updatedOrderData) => {
    try {
      const response = await fetch(`http://localhost:3001/order/update/${orderId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedOrderData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update order');
      }
  
      const updatedOrder = await response.json();
      return updatedOrder; 
    } catch (error) {
      console.error(error);
      throw error; 
    }
  };

  useEffect(() => {
    // Set sampleOrders as initial orders
    // setOrders(sampleOrders);
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

  const handleEditOrder = order => {
    setEditedOrder(order);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleItemChange = (itemIndex, field, value) => {
    setEditedOrder(prevOrder => {
      const updatedItems = [...prevOrder.items];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        [field]: value
      };
      let newTotal = prevOrder.total;
      if (field === 'pricePerItem') {
        newTotal = 0;
        updatedItems.forEach(item => {
          newTotal += Number(item.pricePerItem);
        });
      }
      return {
        ...prevOrder,
        items: updatedItems,
        total: newTotal
      };
    });
  };

  if (!isAdmin) {
    return <Navigate to="/pageNotFound" />;
  }

  // Function to handle saving edited order details
  const handleSaveEdit = async () => {
    try {
      const updatedOrder = await updateOrder(editedOrder._id, editedOrder);
      console.log('Order updated:', updatedOrder);
      setOpenModal(false); // Close the modal after successful update
      setEditedOrder(null); // Reset the editedOrder state
      fetchOrders();
    } catch (error) {
      console.error('Failed to update order:', error);
      // Handle error (e.g., display error message to user)
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
        {/* Filter controls */}
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
          {/* Toggle filters button */}
          <Tooltip title="Toggle Filters" sx={{ mx: 'auto', mr: 2 }}>
            <IconButton onClick={toggleFilters}>
              <FilterAltIcon />
              <Typography>Filters</Typography>
            </IconButton>
          </Tooltip>
          {/* Filters */}
          {showFilters && (
            <>
              {/* Type filter */}
              <Select value={typeFilter} onChange={handleTypeChange} sx={{ mr: 2 }}>
                <MenuItem value="All">All Types</MenuItem>
                <MenuItem value="Laundry">Laundry</MenuItem>
                <MenuItem value="Water">Water</MenuItem>
                {/* Add more types here */}
              </Select>
              {/* Status filter */}
              <Select value={statusFilter} onChange={handleStatusChange} sx={{ mr: 2 }}>
                <MenuItem value="All">All Statuses</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="In-Progress">In Progress</MenuItem>
                <MenuItem value="For-Delivery">For Delivery</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
              {/* Date filter */}
              <Select value={dateFilter} onChange={handleDateChange}>
                <MenuItem value="Newest">Newest First</MenuItem>
                <MenuItem value="Oldest">Oldest First</MenuItem>
              </Select>
            </>
          )}
        </Box>
        {/* Render invoices or placeholder if no orders */}
        <Box style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            {filteredOrders.length === 0 ? (
                <Typography variant="subtitle1">No invoices to display</Typography>
            ) : (
                filteredOrders.map((order, index) => (
                    <Invoice order={order} index={index} handleEdit={handleEditOrder} admin={'true'} />
                ))
            )}
        </Box>
      </Box>
      {/* Modal for editing order details */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >  
        <Box
            sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            minWidth: 400,
            maxWidth: 600,
            overflow: 'auto', // Enable scrolling
            maxHeight: '80vh', // Limit the height to 80% of the viewport height
            }}
        >
            <Typography variant="h6" id="modal-title" gutterBottom>
            Edit Order
            </Typography>
            <Divider />
            {/* Input fields for editing order details */}
            <TextField
                select
                label="Status"
                fullWidth
                margin="normal"
                value={editedOrder ? editedOrder.status : ''}
                onChange={(e) => setEditedOrder({ ...editedOrder, status: e.target.value })}
            >
            {['pending', 'In-Progress', 'For-Delivery', 'Completed'].map((option) => (
                <MenuItem key={option} value={option}>
                {option}
                </MenuItem>
            ))}
            </TextField>
            {editedOrder && editedOrder.items.map((item, itemIndex) => (
            <div key={itemIndex}>
                <TextField
                label="Item Name"
                fullWidth
                margin="normal"
                value={item.itemName}
                disabled
                />
                {editedOrder.type === 'Laundry' ? (
                    <>
                        <TextField
                            label="Item Price"
                            fullWidth
                            margin="normal"
                            value={item.pricePerItem}
                            onChange={(e) => handleItemChange(itemIndex, 'pricePerItem', e.target.value)}
                        />
                        <TextField
                        label="Item Quantity"
                        fullWidth
                        disabled
                        margin="normal"
                        value={item.numberOfItems}
                        onChange={(e) => handleItemChange(itemIndex, 'numberOfItems', e.target.value)}
                        />
                    </>

                ) : (
                    null
                )}
                {editedOrder.type === 'Laundry' && (
                <TextField
                    label="Item Weight"
                    fullWidth
                    margin="normal"
                    value={item.weight}
                    onChange={(e) => handleItemChange(itemIndex, 'weight', e.target.value)}
                />
                )}
            </div>
            ))}
            <TextField
            label="Total Amount Due"
            fullWidth
            margin="normal"
            disabled
            value={editedOrder ? editedOrder.total : ''}
            onChange={(e) => setEditedOrder({ ...editedOrder, total: e.target.value })}
            />
            <TextField
            label="Payment Instructions"
            fullWidth
            margin="normal"
            value={editedOrder ? editedOrder.paymentInstructions : ''}
            onChange={(e) => setEditedOrder({ ...editedOrder, paymentInstructions: e.target.value })}
            />
            <Button onClick={handleSaveEdit} variant="contained" color="primary" sx={{ mt: 2 }}>
            Save Changes
            </Button>
            <Button onClick={handleCloseModal} variant="outlined" color="secondary" sx={{ ml: 2, mt: 2 }}>
            Cancel
            </Button>
        </Box>
      </Modal> 
      <Footer />
    </>
  );
};

export default OrderAdmin;
