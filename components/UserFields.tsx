'use client';

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, {AutocompleteRenderInputParams} from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import District from '@/components/District';
import Rooms from '@/components/Rooms';
import Pricerange from '@/components/Pricerange';

interface UserFieldsProps {
  options: { title: string }[];
}

export default function UserFields() {
  const defaultProps: UserFieldsProps = {
    options: maakonnad,
  };
  maakonnad.map((option: { title: string }) => option.title);
  const [minRooms, setMinRooms] = React.useState<number | null>(null);
  const [maxRooms, setMaxRooms] = React.useState<number | null>(null);
  const [minPrice, setMinPrice] = useState<number | null>(null)
  const [maxPrice, setMaxPrice] = useState<number | null>(null)
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const [propertyType, setPropertyType] = useState<string>('Üür')
  const [fromOwner, setFromOwner] = useState<boolean>(false)
  const [swapOption, setSwapOption] = useState<boolean>(false)

  const handleMinRoomsChange = (value: number | null): void => {
    setMinRooms(value);
  };

  const handleMaxRoomsChange = (value: number | null): void => {
    setMaxRooms(value);
  }

  const handleMinPriceChange = (value: number | null): void => {
    setMinPrice(value)
  }

  const handleMaxPriceChange = (value: number | null): void => {
    setMaxPrice(value)
  }

  const handleTagDelete = (tagToDelete: string): void => {
    setSelectedTags((prevTags: string[]) => prevTags.filter((tag: string): boolean => tag !== tagToDelete));
  };

  const handleSubmit = (): void => {
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
    setFromOwner(false);
    setSwapOption(false);
  };

  return (
    <>
        <Stack spacing={1} className="data-stack-dropdown">
        <Autocomplete
            {...defaultProps}
            id="clear-on-escape"
            clearOnEscape
            renderInput={(params: AutocompleteRenderInputParams) => (
            <TextField {...params} label="Maakond" variant="standard" />
            )}
        />
        <Autocomplete
            {...defaultProps}
            id="clear-on-escape"
            clearOnEscape
            renderInput={(params: AutocompleteRenderInputParams) => (
            <TextField {...params} label="Linn/vald" variant="standard" />
            )}
        />
         <Autocomplete
            options={["Üür", "Müük"]}
            id="clear-on-escape"
            clearOnEscape
            value={propertyType}
            onChange={(event, value: string | null) => setPropertyType(value!)}
            renderInput={(params: AutocompleteRenderInputParams) => (
            <TextField {...params} label="Kinnisvaratüüp" variant="standard" />
            )}
        />
        </Stack>
      <div className="radio-button-fields-buytype">
            <FormGroup>
            <FormControlLabel 
            control={<Checkbox checked={fromOwner} onChange={() => setFromOwner(!fromOwner)} />}
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

const maakonnad: { title: string }[] = [
  { title: 'Harjumaa' },
];

