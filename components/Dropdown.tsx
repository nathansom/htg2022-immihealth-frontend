import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown({ label, shortLabel, locale, handleChange, data }){
   
    return (
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
          <InputLabel id={`${shortLabel}-select-label`}>{label}</InputLabel>
          <Select
              labelId={`${shortLabel}-select-label`}
              id={`${label}-select`}
              value={locale}
              label={label}
              onChange={handleChange}
            >
              { 
                Object.entries(data).map( ([key, value]) =>  <MenuItem key={key} value={key}>{value}</MenuItem> ) }
            </Select>
          </FormControl>
        </Box>
      );
}