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
  };
  maakonnad.map((option) => option.title);
  const [minRooms, setMinRooms] = React.useState<number | null>(null);
  const [maxRooms, setMaxRooms] = React.useState<number | null>(null);
  const [minPrice, setMinPrice] = useState<number | null>(null)
  const [maxPrice, setMaxPrice] = useState<number | null>(null)
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const [propertyType, setPropertyType] = useState<string>('Üür')
  const [fromOwner, setfromOwner] = useState<boolean>(false)
  const [swapOption, setSwapOption] = useState<boolean>(false)

  const handleMinRoomsChange = (value: number | null) => {
    setMinRooms(value);
  };

  const handleMaxRoomsChange = (value: number | null) => {
    setMaxRooms(value);
  }

  const handleMinPriceChange = (value: number | null) => {
    setMinPrice(value)
  }

  const handleMaxPriceChange = (value: number | null) => {
    setMaxPrice(value)
  }

  const handleTagDelete = (tagToDelete: string) => {
    setSelectedTags((prevTags) => prevTags.filter((tag) => tag !== tagToDelete));
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form submitted with the following data:");
    console.log("Kinnisvaratüüp:", propertyType);
    console.log("Otse omanikult:", fromOwner);
    console.log("Vahetuse võimalus:", swapOption);
    console.log("Selected tags:", selectedTags);
    console.log("Min Rooms:", minRooms);
    console.log("Max Rooms:", maxRooms);
    console.log("Min Price:", minPrice);
    console.log("Max Price:", maxPrice);
    setMinRooms(null);
    setMaxRooms(null);
    setMinPrice(null);
    setMaxPrice(null);
    setSelectedTags([]);
    setPropertyType('Üür');
    setfromOwner(false);
    setSwapOption(false);
  };

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
            options={["Üür", "Müük"]}
            id="clear-on-escape"
            clearOnEscape
            value={propertyType}
            onChange={(event, value) => setPropertyType(value!)}
            renderInput={(params) => (
            <TextField {...params} label="Kinnisvaratüüp" variant="standard" />
            )}
        />
        </Stack>
      <div className="radio-button-fields-buytype">
            <FormGroup>
            <FormControlLabel 
            control={<Checkbox checked={fromOwner} onChange={() => setfromOwner(!fromOwner)} />} 
            label="Otse omanikult" 
            />
            <FormControlLabel 
            control={<Checkbox checked={swapOption} onChange={() => setSwapOption(!swapOption)} />} 
            label="Vahetuse võimalus" 
            />
            </FormGroup>
      </div>
      <div className="districts">
            <District
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
              handleTagDelete={handleTagDelete}
             />
              
      </div>
      <div className="rooms">
            <Rooms
              minRooms={minRooms}
              maxRooms={maxRooms}
              handleMinRoomsChange={handleMinRoomsChange}
              handleMaxRoomsChange={handleMaxRoomsChange}
            />
      </div>
      <div className="pricerange">
            <Pricerange 
              minPrice={minPrice}
              maxPrice={maxPrice}
              handleMinPriceChange={handleMinPriceChange}
              handleMaxPriceChange={handleMaxPriceChange}
            />
      </div>
      <div className="submit-button">
        <button onClick={handleSubmit}>Otsi</button>
      </div>
    </>
  );
}

interface DropdownOption {
  title: string;
}

const maakonnad = [
  { title: 'Harjumaa' },
];

