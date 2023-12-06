"use client"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  aadress: string,
  imageURL: string,
  price: number,
  propertyAreaInSquareM: number,
  propertyTitle: string,
  rooms: number,
  url: string
) {
  return { aadress, imageURL, price, propertyAreaInSquareM, propertyTitle, rooms, url };
}

const rows = [
  createData('Gingerbread', 'dddd', 16.0, 49, 'sss', 222, 'fsfs' ),
  createData('Gingerbread', 'dddd', 16.0, 49, 'sss', 222, 'fsfs' ),
  createData('Gingerbread', 'dddd', 16.0, 49, 'sss', 222, 'fsfs' ),
  createData('Gingerbread', 'dddd', 16.0, 49, 'sss', 222, 'fsfs' ),
  createData('Gingerbread', 'dddd', 16.0, 49, 'sss', 222, 'fsfs' ),
  
];

//@ts-ignore
export default function CustomizedTables({realTimeData}) {
    console.log(realTimeData)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Pilt</StyledTableCell>
            <StyledTableCell align="right">Hind&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Pindala&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Nimetus&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Toad&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Link&nbsp;(g)</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.aadress}>
              <StyledTableCell component="th" scope="row">
                {row.aadress}
              </StyledTableCell>
              <StyledTableCell align="right">{row.imageURL}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.propertyAreaInSquareM}</StyledTableCell>
              <StyledTableCell align="right">{row.propertyTitle}</StyledTableCell>
              <StyledTableCell align="right">{row.rooms}</StyledTableCell>
              <StyledTableCell align="right">{row.url}</StyledTableCell>


            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
