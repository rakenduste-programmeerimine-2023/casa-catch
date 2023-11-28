import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function Pricerange() {
  const [minPrice, setMinPrice] = useState<number | null>(null)
  const [maxPrice, setMaxPrice] = useState<number | null>(null)

  console.log("minPrice value: ", minPrice)
  console.log("maxPrice value: ", maxPrice)

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10)
    setMinPrice(isNaN(value) ? null : value)
  }

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10)
    setMaxPrice(isNaN(value) ? null : value)
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
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
          onChange={handleMinPriceChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="maxPrice"
          label="Hind kuni"
          type="number"
          value={maxPrice !== null ? maxPrice : ''}
          onChange={handleMaxPriceChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </Box>
  );
}
