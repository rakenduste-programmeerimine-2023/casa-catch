import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

interface RoomsProps {
  minRooms: number | null;
  maxRooms: number | null;
  handleMinRoomsChange: (value: number | null) => void;
  handleMaxRoomsChange: (value: number | null) => void;
}

export default function Rooms(props: RoomsProps) {
  const { minRooms, maxRooms, handleMinRoomsChange, handleMaxRoomsChange } = props;

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '22.5ch' },
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
          onChange={(e) => handleMinRoomsChange(parseInt(e.target.value, 10))}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="maxRooms"
          label="Tubade arv kuni"
          type="number"
          value={maxRooms !== null ? maxRooms : ''}
          onChange={(e) => handleMaxRoomsChange(parseInt(e.target.value, 10))}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </Box>
  );
}
