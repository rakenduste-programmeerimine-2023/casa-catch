'use client';

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import District from '@/components/District';
import Rooms from '@/components/Rooms';
import Pricerange from '@/components/Pricerange';



export default function UserFields() {
  const defaultProps = {
    options: maakonnad,
    getOptionLabel: (option: FilmOptionType) => option.title,
  };
  const flatProps = {
    options: maakonnad.map((option) => option.title),
  };
  const [value, setValue] = useState<FilmOptionType | null>(null);



  return (
    <>
        <Stack spacing={1} className="data-stack-dropdown">
        <Autocomplete
            {...defaultProps}
            id="clear-on-escape"
            clearOnEscape
            renderInput={(params) => (
            <TextField {...params} label="Maakond" variant="standard" />
            )}
        />
        <Autocomplete
            {...defaultProps}
            id="clear-on-escape"
            clearOnEscape
            renderInput={(params) => (
            <TextField {...params} label="Linn/vald" variant="standard" />
            )}
        />
         <Autocomplete
            {...defaultProps}
            id="clear-on-escape"
            clearOnEscape
            renderInput={(params) => (
            <TextField {...params} label="Kinnisvaratüüp" variant="standard" />
            )}
        />
        </Stack>
        <div className="radio-button-fields-housetype">
            <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Tüüp</FormLabel>
            <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            >
            <FormControlLabel value="myyk" control={<Radio />} label="Müük" />
            <FormControlLabel value="yyr" control={<Radio />} label="Üür" />
            </RadioGroup>
        </FormControl>
      </div>
      <div className="radio-button-fields-buytype">
            <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Otse omanikult" />
            <FormControlLabel control={<Checkbox />} label="Vahetuse võimalus" />
            </FormGroup>
      </div>
      <div className="districts">
            <District />
      </div>
      <div className="rooms">
            <Rooms />
      </div>
      <div className="pricerange">
            <Pricerange />
      </div>
    </>
  );
}

interface FilmOptionType {
  title: string;
}

const maakonnad = [
  { title: 'Harjumaa' },
  { title: 'The Godfather' },
  { title: 'The Godfather: Part II' }
];

//  function RadioButtonsGroup() {
//     return (
//       <FormControl>
//         <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
//         <RadioGroup
//           aria-labelledby="demo-radio-buttons-group-label"
//           defaultValue="female"
//           name="radio-buttons-group"
//         >
//           <FormControlLabel value="myyk" control={<Radio />} label="Müük" />
//           <FormControlLabel value="yyr" control={<Radio />} label="Üür" />
//         </RadioGroup>
//       </FormControl>
//     );
//   }