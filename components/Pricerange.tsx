import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from 'react';

interface PriceRangeProps {
  minPrice: number | null
  maxPrice: number | null
  handleMinPriceChange: (value: number | null) => void
  handleMaxPriceChange: (value: number | null) => void
}

export default function Pricerange(props: PriceRangeProps) {

  const {minPrice, maxPrice, handleMinPriceChange, handleMaxPriceChange} = props

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {m: 1, width: '22.5ch'},
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="minPrice"
          label="Hind alates"
          type="number"
          value={minPrice !== null ? minPrice : ''}
          onChange={(e) => handleMinPriceChange(parseInt(e.target.value, 10))}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="maxPrice"
          label="Hind kuni"
          type="number"
          value={maxPrice !== null ? maxPrice : ''}
          onChange={(e) => handleMaxPriceChange(parseInt(e.target.value, 10))}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </Box>
  );
}
