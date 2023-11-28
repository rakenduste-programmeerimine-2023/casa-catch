import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function Rooms() {

  const [minRooms, setMinRooms] = React.useState<number | null>(null)
  const [maxRooms, setMaxRooms] = React.useState<number | null>(null)

  console.log("minRooms value: ",minRooms)
  console.log("maxRooms value: ",maxRooms)

  const handleMinRoomsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10)
    setMinRooms(isNaN(value) ? null : value)
  }

  const handleMaxRoomsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10)
    setMaxRooms(isNaN(value) ? null : value)
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
          id="minRooms"
          label="Tubade arv alates"
          type="number"
          value={minRooms !== null ? minRooms : ''}
          onChange={handleMinRoomsChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="maxRooms"
          label="Tubade arv kuni"
          type="number"
          value={maxRooms !== null ? maxRooms : ''}
          onChange={handleMaxRoomsChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </Box>
  );
}
