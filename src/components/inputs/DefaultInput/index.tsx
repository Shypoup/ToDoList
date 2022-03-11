import * as React from 'react';
import { TextField } from '@mui/material';




 interface DefaultInputInterface {
     placehloder:string,
     label?:string,
     value:string,
     onChange:Function;
     multiline?:boolean;

 }
 const DefaultInput =(props:DefaultInputInterface)=> {
  return (
   
  <TextField
          id="standard-multiline-flexible"
          label={props.label}
          multiline={props.multiline? true:false}
          maxRows={4}
          value={props.value}
          onChange={()=>props.onChange()}
          variant="standard"
        />

  );
}

export default DefaultInput;