import * as React from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import {Drawer ,List,ListItem,ListItemIcon,Grid} from '@mui/material';
import './styles.css';

export default function SideDrawer() {

  return (
   
   
      <Drawer variant="permanent" open={false} >
        
        
        <List className="sideBarList">
             {/* item */}
            <ListItem button>
              <ListItemIcon>
                <InboxIcon color='inherit' className='icon' /> 
              </ListItemIcon>
              </ListItem>
              
             {/* item */}
             <ListItem button>
              <ListItemIcon>
                <InboxIcon color='inherit' className='icon' /> 
              </ListItemIcon>
              </ListItem>

                {/* item */}
            <ListItem button>
              <ListItemIcon>
                <InboxIcon color='inherit' className='icon' /> 
              </ListItemIcon>
              </ListItem>
        
        </List>
     
      
      </Drawer>

  );
}
