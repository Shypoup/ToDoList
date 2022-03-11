import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

interface DefaultDatePickerInterface {
    label?:string,
    value:any,
    onChange:Function;
}
const  DefaultDatePicker =(props:DefaultDatePickerInterface)=> {

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={props.label}
        value={props.value}
        onChange={(newValue) => {
          props.onChange(newValue);
        }}
        renderInput={(params) => <TextField {...params} variant="standard" />}
      />
    </LocalizationProvider>
  );
}


export default  DefaultDatePicker;