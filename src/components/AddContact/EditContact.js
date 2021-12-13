import React, { Component, useState } from 'react'
import { Box, Button, Container, Input } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/styles';
import { useLocation,  useNavigate } from 'react-router-dom';


const useStyles = makeStyles(theme => ({

    inputItem: {
       
        width: 87 + '%',
        marginTop: '10px'

    },
    submitButton : {
        width: 10 + '%',
        marginTop: '18px'
    }

}))

function EditContact(props) {
    const editData = useLocation()
    const history = useNavigate()
    const {id, name, email} = editData.state
    const [state, setState] = useState(
       {
           id: id,
           name: name,
           email: email
       }
    )

    const ariaLabel = { 'aria-label': 'description' };
        const classes = useStyles()
        const update = () => {
          
       
            if(state.name === '' && state.email === '') {
                alert('All fields are mandatory')
                return;
            } 
            
            history("/")
            props.updateContact(state)
            
            
          
          
            
        }
        return (
            <div>
                <Container>
                    <h2 style={{ textAlign: 'left' }}>Edit Contact</h2>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        display="flex"
                        flexDirection="column"
                        
                    >
                     {/*    onChange={(e) => this.setState({name: e.target.value })} */}
                   {/*   onChange={(e) => this.setState({ email: e.target.value })} */}
                  {/*  value={this.state.name } */}
                 {/*  value={this.state.email} */}
                        <Input className={classes.inputItem}  placeholder="Contact Name" value={state.name}  onChange={(event) => setState({ ...state, name: event.target.value })}    inputProps={ariaLabel} />
                        <Input className={classes.inputItem} placeholder="Email" value={state.email}  onChange={(e) => setState({ ...state,  email: e.target.value })}   inputProps={ariaLabel} />
                        <Button  color="primary" onClick={() => update()} className={classes.submitButton } variant="contained">Update</Button>
                      


                    </Box>


                </Container>

            </div>
        )
}

export default EditContact
