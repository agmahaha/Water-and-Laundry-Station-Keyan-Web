import React, { useState, useEffect } from 'react';
import Invoice from './Invoice';
import Navbar from '../../components/Navbar';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Breadcrumbs,
    Divider,
    Link,
    Typography,
    Select,
    MenuItem,
    IconButton,
    Tooltip,
} from '@mui/material';
import FlexBetween from '../../components/FlexBetween';
import Footer from '../../components/Footer';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const OrderInvoices = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [typeFilter, setTypeFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [dateFilter, setDateFilter] = useState('Newest');
  const [showFilters, setShowFilters] = useState(false);

  const getInvoices = () => {
        fetch('/api/orders')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        return response.json();
      })
      .then(data => {
        setOrders(data);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  }

  const sampleOrders = [
    {
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

  useEffect(() => {
    // getInvoices(); // mongoDB data
    setOrders(sampleOrders.reverse()); // Use sampleOrders for testing without MongoDB
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

  const handleTypeChange = (event) => {
    setTypeFilter(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleDateChange = (event) => {
    setDateFilter(event.target.value);
  };

  const toggleFilters = () => {
    setShowFilters(prevState => !prevState);
};

  return (
    <>
        <Navbar />
        <Box bgcolor="white" sx={{ width: '85%', margin: '0 auto', borderRadius: '10px', minHeight: '100vh'}}>
            <FlexBetween gap="1.75rem" padding="1rem" paddingBottom={0}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/" fontWeight='bold' fontSize={20}>
                        Home
                    </Link>
                    <Typography color="text.primary" fontWeight='bold' fontSize={20}>Orders</Typography>
                </Breadcrumbs>
            </FlexBetween>
            <Divider spacing={1} variant='middle'>
                <Typography fontSize={50} textAlign="center" color='#F4A4AC' fontWeight="bold">ORDER HISTORY</Typography>
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
                {filteredOrders.length === 0 ? (
                    <Typography variant="subtitle1">No invoices to display</Typography>
                ) : (
                    filteredOrders.map((order, index) => (
                        <Invoice order={order} index={index} />
                    ))
                )}
            </Box>
        </Box>
        <Footer />
    </>
);
};

export default OrderInvoices;