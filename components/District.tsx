import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

interface District {
  title: string;
}

export default function Tags() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagDelete = (tagToDelete: string) => {
    setSelectedTags((prevTags) => prevTags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={districts}
        value={selectedTags}
        onChange={(_, newValue) => setSelectedTags(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Linnaosad"
            placeholder="Vali"
          />
        )}
      />
      {selectedTags.map((tag) => (
        <Chip key={tag} label={tag} onDelete={() => handleTagDelete(tag)} />
      ))}
    </Stack>
  );
}

const districts: District[] = [
  { title: 'Haabersti' },
  { title: 'Kadriorg' },
  { title: 'Kesklinn' },
  { title: 'Kristiine' },
  { title: 'Lasnamäe' },
  { title: 'Mustamäe' },
  { title: 'Nõmme' },
  { title: 'Pirita' },
  { title: 'Põhja-Tallinn' },
  { title: 'Vanalinn' },
  { title: 'Kalamaja' },
];
