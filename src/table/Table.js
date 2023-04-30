import React, { useState } from "react";
import "../global.css";
import "./styles.css";
import deleteicon from "../assets/delete.png";
import editicon from "../assets/edit.png";
import receipticon from "../assets/receipt2.png";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  IconButton,
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";

const data = [
  {
    id: 1,
    clientName: "Astu Technologies Private Limited",
    email: "john@example.com",
    phone: "555-555-5555",
    gst: "123456789",
    PAN:"ABCDEFGHI",
    country: "India",
  },
  {
    id: 2,
    clientName: "XYZ Technologies Private Limited",
    email: "jane@example.com",
    phone: "+918934834069",
    gst: "987654321",
    PAN: "ABCDEFGHI",
    country:"USA",
  },
  {
    id: 3,
    clientName: "ABC Technologies Private Limited",
    email: "bob@example.com",
    phone: "+918934834069",
    gst: "456789123",
    PAN:"ABCDEFGHI",
    country: "India"
  },
  {
    id: 4,
    clientName: "ABC Technologies Private Limited",
    email: "bob@example.com",
    phone: "+918934834069",
    gst: "456789123",
    PAN:"ABCDEFGHI",
    country: "India"
  },
];

const TableComponent = () => {
  const [selected, setSelected] = useState([]);

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      const newSelected = data.map((item) => item.id);
      setSelected(newSelected);
    } else {
      setSelected([]);
    }
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (

    <div className="main">
        <div>
            <div className="heading flex-container">
            <div className="Invoice">
                Invoice Summary
            </div>
            <div className="user flexCenterCenter">
                A
            </div>
            </div>
        </div>
        
        <div className="card">
          <div className="subheading flexleftrow-container">
            <div className="active">
                Active Clients
            </div>
            <div className="inactive">
                Deleted Clients
            </div>
          </div>
          <div className="button button__type1 flexCenterCenterRow">Delete</div>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" className="tablehead">
              <Checkbox
                indeterminate={
                  selected.length > 0 && selected.length < data.length
                }
                checked={selected.length === data.length}
                onChange={handleSelectAll}
              />
            </TableCell>
            <TableCell className="tablehead">Client Name</TableCell>
            <TableCell className="tablehead">Phone</TableCell>
            <TableCell className="tablehead">Email</TableCell>
            <TableCell className="tablehead">GSTIN/Tax ID</TableCell>
            <TableCell className="tablehead">PAN</TableCell>
            <TableCell className="tablehead">Country</TableCell>
            <TableCell align="center" className="tablehead"></TableCell>
            <TableCell align="center" className="tablehead"></TableCell>
            <TableCell align="center" className="tablehead"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => {
            const isItemSelected = isSelected(row.id);
            return (
              <TableRow
                key={row.id}
                hover
                onClick={(event) => handleClick(event, row.id)}
                role="checkbox"
                aria-checked={isItemSelected}
                selected={isItemSelected}
              >
                <TableCell padding="checkbox">
                  <Checkbox checked={isItemSelected} />
                </TableCell>
                <TableCell className="tablecontent">{row.clientName}</TableCell>
                <TableCell className="tablecontent">{row.phone}</TableCell>
                <TableCell className="tablecontent">{row.email}</TableCell>
                <TableCell className="tablecontent">{row.gst}</TableCell>
                <TableCell className="tablecontent">{row.PAN}</TableCell>
                <TableCell className="tablecontent">{row.country}</TableCell>
                <TableCell className="Actions">
                  <div>
                    <img src={editicon}/>
                    Edit
                  </div>
                </TableCell>
                <TableCell className="Actions">
                  <div>
                    <img src={receipticon}/>
                    Invoice
                  </div>
                </TableCell>
                <TableCell className="Actions">
                  <div>
                    <img src={deleteicon}/>
                    Delete
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
    
    </div>
    <div className="flexStartEndRow">
    <div className="button button__type2 flexCenterCenterRow">Upload Clients</div>
    <div className="button button__type3 flexCenterCenterRow">Add Clients</div>
    </div>
    </div>
  );
};

export default TableComponent;
