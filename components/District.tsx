import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function Tags() {
  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={districts}
        getOptionLabel={(option) => option.title}
        defaultValue={[districts[5]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Linnaosad"
            placeholder="Vali"
          />
        )}
      />
     
    
    </Stack>
  );
}

const districts = [
  
  { title: 'Haabersti'},
  { title: 'Kadriorg'},
  { title: 'Kesklinn'},
  { title: "Kristiine"},
  { title: 'Lasnamäe'},
  { title: 'Mustamäe'},
  { title: 'Nõmme'},
  { title: 'Pirita' },
  { title: 'Põhja-Tallinn'},
  { title: 'Vanalinn'},
  { title: 'Kalamaja'}
];