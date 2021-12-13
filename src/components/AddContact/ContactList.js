import { Avatar, ListItem, List, ListItemAvatar, makeStyles, Button} from '@material-ui/core'
import {Link, useNavigate } from 'react-router-dom'
import React, { useRef } from 'react'
import { IconButton, InputBase, ListItemText, Paper } from '@mui/material';
import { DeleteOutline, ModeEdit, PersonPinCircleRounded, Search } from '@mui/icons-material';
import { Box } from '@mui/system';

const useStyles = makeStyles(theme => ({
    contactList: {
        width: '86%',
        marginLeft: '16px'
    },
    search: {
        marginLeft: '18px',
        textAlign: 'left',
        paddingLeft: '26px'
      
    }

}))

function ContactList(props) {
    
   const classes = useStyles()
   const history = useNavigate()
   const inputRef = useRef()
   const deleteHandler = (id) => {
        props.deleteContact(id)
    } 
   const getSearchTerm = () => {
       console.log(inputRef.current.value)
       props.searchKeyword(inputRef.current.value)

   }
  
   
    return (
        <div>
            <Box display="flex" justifyContent="space-between">
            <h3 style={{ textAlign: 'left', marginLeft: '20px' }}>Contact List</h3>
           <Button component={Link} to='/add' style={{ maxHeight: '36px', marginTop: '12px', marginRight: '15px', fontSize: '0.75rem'}}  color="primary" variant="contained">Add Contact</Button>
            </Box>
            <Paper className={classes.search} sx={{ width: '86%' }}>
            <InputBase
            placeholder='Search'
            sx={{ width: '93%'}}
            inputRef={inputRef}
            value={props.term}
            onChange={getSearchTerm}
            >
            </InputBase>
            <IconButton>
                <Search></Search>
            </IconButton>
            </Paper>
            <List style={{maxHeight: '100%', overflow: 'auto'}} className={classes.contactList}>
                {
                 props.contacts.length > 0 ? props.contacts.map(contact => (
                     <ListItem component={Link} to={ `/contact/${contact.id}`} state={contact} divider={true} key={contact.id}>
                         <ListItemAvatar>
                             <Avatar>
                                <PersonPinCircleRounded></PersonPinCircleRounded>
                             </Avatar>
                         </ListItemAvatar>
                         <ListItemText primary={contact.name} secondary={contact.email}></ListItemText>
                         <Link to={`contact/edit/${contact.id}`} state={contact}>
                         <ModeEdit style={{ color: 'blue', marginRight: '10px' }} ></ModeEdit>
                         </Link>
                         <DeleteOutline style={{ color: 'red'}} onClick={() => deleteHandler(contact.id)}></DeleteOutline>
                     </ListItem>

                 )) : <p>Not Found</p>
                }
            </List>
            
        </div>
    )
}

export default ContactList
