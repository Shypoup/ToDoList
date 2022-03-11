import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface DefaultSelectInterface {
    label:string,
    value:string,
    onChange:Function,
    options:any,

}

const DefaultSelect =(props:DefaultSelectInterface)=> {


  const handleChange = (event: SelectChangeEvent) => {
    props.onChange(event.target.value);
  };

  const slectOptions =()=>{
      return props.options.map((item:any)=>{
          return(
            <MenuItem value={item.value}>{item.label}</MenuItem>
          )
      })
  }

  return (
    <div>
      <FormControl variant="standard" sx={{  minWidth: '100%' }}>
        <InputLabel id="demo-simple-select-standard-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={props.value}
          onChange={handleChange}
          label={props.label}
        >
          <MenuItem value="" >
            <em>None</em>
          </MenuItem>
         {slectOptions()}
        </Select>
      </FormControl>
    
    </div>
  );
}
export default DefaultSelect;