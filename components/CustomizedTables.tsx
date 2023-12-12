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
import {useWebSocket} from "@/context/WebSocketContext";
import {WsRealEstateResponseData} from "@/shared/interfaces/ws-real-estate-response-data.interface";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'rgb(8, 159, 246)',
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
}))

export default function CustomizedTables() {
  const { realTimeData } = useWebSocket()

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Aadress</StyledTableCell>
            <StyledTableCell align="center">Pilt</StyledTableCell>
            <StyledTableCell align="right">Hind</StyledTableCell>
            <StyledTableCell align="right">Pindala</StyledTableCell>
            <StyledTableCell align="right">Linnaosa</StyledTableCell>
            <StyledTableCell align="right">Toad</StyledTableCell>
            <StyledTableCell align="right">Link</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {realTimeData.map((row: WsRealEstateResponseData) => (
            <StyledTableRow key={row.url}>
              <StyledTableCell component="th" scope="row">
                {row.propertyTitle}
              </StyledTableCell>
              <StyledTableCell align="center">
                <a href={row.url} target="_blank" rel="noopener noreferrer">
                  <img src={row.imageUrl.replace(/^"(.*)"$/, '$1')} alt="Property" style={{ maxWidth: '200px', maxHeight: '200px' }} />
                </a>
              </StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.propertyAreaInSquareM}m2</StyledTableCell>
              <StyledTableCell align="right">{row.address.replace(/^"(.*)"$/, '$1')}</StyledTableCell>
              <StyledTableCell align="right">{row.rooms}</StyledTableCell>
              <StyledTableCell align="right"><a href={row.url}>Link</a></StyledTableCell>


            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
