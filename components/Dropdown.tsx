import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown({ label, shortLabel, locale, handleChange, data }){
    // start debug  
    console.log("logging",`${shortLabel}-select-label`);
    for (const [key, value] of Object.entries(data)) {
      console.log(`${key}:${value}`);
    }

    Object.entries(data).map( (key, value) => { console.log(key,value) }) 
    //end debug
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
                Object.entries(data).map( ([key, value]) =>  <MenuItem value={key}>{value}</MenuItem> ) }
            </Select>
          </FormControl>
        </Box>
      );
}