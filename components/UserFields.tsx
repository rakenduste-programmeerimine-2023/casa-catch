'use client';

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

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
    </Stack>
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