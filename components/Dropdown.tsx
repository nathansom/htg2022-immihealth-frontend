import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

interface DropDown {
  fieldLabel: string,
  shortLabel: string,
  locale: string,
  handleChange: any,
  data: any
}

export default function Dropdown({ fieldLabel, shortLabel, locale, handleChange, data })<DropDown>{
   
    return (
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
          <InputLabel id={`${shortLabel}-select-label`} >{fieldLabel}</InputLabel>
          <Select
              labelId={`${shortLabel}-select-label`}
              id={`${fieldLabel}-select`}
              value={locale}
              label={fieldLabel}
              sx={{backgroundColor:"rgba(250,250,250,0.5)"}}
              onChange={handleChange}
            >
              { 
                Object.entries(data).map( ([key, value]) =>  <MenuItem key={key} value={key}>{value}</MenuItem> ) }
            </Select>
          </FormControl>
        </Box>
      );
}