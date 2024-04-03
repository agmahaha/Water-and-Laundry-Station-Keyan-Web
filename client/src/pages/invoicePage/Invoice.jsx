import React, { useState, useEffect } from 'react';
import { Typography, Stack, IconButton, Paper, Table, TableHead, TableBody, TableRow, Box, TableCell, Accordion, AccordionSummary, AccordionDetails, Divider, Tooltip } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';

const getStatusIcon = (status) => {
  switch (status) {
    case 'pending':
      return <HourglassEmptyIcon sx={{ fontSize: 62 }} />; // Icon for pending status
    case 'In-Progress':
      return <AccessTimeIcon sx={{ fontSize: 62 }} />; // Icon for in progress status
    case 'For-Delivery':
      return <LocalShippingIcon sx={{ fontSize: 62 }} />; // Icon for for delivery status
    case 'Completed':
      return <CheckCircleIcon sx={{ fontSize: 62 }} />; // Icon for completed status
    default:
      return null; // Default to no icon for unknown statuses
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case 'pending':
      return '#CCCCCC'; // gray
    case 'In-Progress':
      return '#d7a6f5'; // purple
    case 'For-Delivery':
      return '#87baed'; // blue
    case 'Completed':
      return '#8cde8f'; // green
    default:
      return '#CCCCCC'; // default to gray for unknown statuses
  }
};

const Invoice = ({ order, index, handleEdit, admin }) => {

  const accordionColor = getStatusColor(order.status);
  const accordionIcon = getStatusIcon(order.status);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getTypeSpecificColumns = (item, type) => {
    if (type === 'Laundry') {
      return (
        <>
          <TableCell>Weight</TableCell>
        </>
      );
    } else if (type === 'Water') {
      if (item.gallonType) {
        return (
          <>
            <TableCell>P/M/A</TableCell>
            <TableCell>Gallon Type</TableCell>
          </>
        );
      } else {
        return (
          <>
            <TableCell>P/M/A</TableCell>
          </>
        );
      }

  }
    return (
      <>
        <TableCell>Weight</TableCell>
      </>
    ); // Default
  };

  const getTypeSpecificItemColumns = (item, type) => {
    if (type === 'Laundry') {
      return (
        <>
          <TableCell>{item.weight}kg</TableCell>
        </>
      );
    } else if (type === 'Water') {
      if (item.gallonType) {
        return (
          <>
            <TableCell>{item.waterType}</TableCell>
            <TableCell>{item.gallonType}</TableCell>
          </>
        );
      } else {
        return (
          <>
            <TableCell>{item.waterType}</TableCell>
          </>
        );
      }

    }
    return (
      <>
        <TableCell>{item.weight}kg</TableCell>
      </>
    ); // Default
  };
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3001/users/adminGet/${order.userID}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        const userData = await response.json();
        setUser(userData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchUser();
  }, [order.userID]);

  return (
    <>
      <Accordion style={{ width: '75%', marginBottom: '20px', backgroundColor: accordionColor }} key={index}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel-${index}-content`}
          id={`panel-${index}-header`}
        >
          <Box display="flex" alignItems="center">
            {accordionIcon && <Box mr={1}>{accordionIcon}</Box>}
          </Box>
          <Box ml={2}>
            <Typography variant="h6">Order {order._id}</Typography>
            <Typography variant="subtitle2" color="textSecondary" fontWeight="bold">
              Status: {order.status}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" fontWeight="bold">
              Type: {order.type}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" fontWeight="bold">
              Total Amount Due: ₱{order.total}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Paper style={{ width: '75%', padding: '20px' }}>
            {admin == 'true' ? (
              <Tooltip title="Edit Order">
                <IconButton onClick={() => handleEdit(order)} sx={{ "&:hover": { backgroundColor: '#CCCCCC' } }}> {/* Add edit button */}
                  <Typography sx={{ mr: 2 }}>Edit Order Details</Typography>
                  <EditIcon />
                </IconButton>
              </Tooltip>
            ) : null}
            <Typography gutterBottom>
              Date: {new Date(order.orderDate).toISOString().split('T')[0]}
            </Typography>
            <Typography gutterBottom>
              Invoice Number: {order._id}
            </Typography>
            {user ? (
            <Typography gutterBottom>
              Customer: {user.username}
            </Typography>
            ) : null}
            <Typography gutterBottom>
              For {order.option}
            </Typography>
            {order.option === 'pickup' ? (
              null
            ) : (
              <>
                <Typography gutterBottom>
                  Address: {order.address}
                </Typography>
                <Typography gutterBottom>
                  Contact Number: {order.contactNumber}
                </Typography>
              </>

            )}

            <Stack direction="row" spacing={2} style={{ marginTop: '10px', flexGrow: 1 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Item</TableCell>
                    {getTypeSpecificColumns(order.items[0], order.type)}
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {order.items.map((item, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{item.itemName}</TableCell>
                      {getTypeSpecificItemColumns(item, order.type)}
                      <TableCell>₱{item.pricePerItem}</TableCell>
                      <TableCell>{item.numberOfItems}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div>
                <Typography variant="subtitle1" color="textSecondary" sx={{ marginBottom: '20px' }}>
                  Payment Instructions: {order.paymentInstructions}
                </Typography>
                <Typography variant="h6">
                  Total Amount Due: ₱{order.total}
                </Typography>
              </div>

            </Stack>
          </Paper>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Invoice;
