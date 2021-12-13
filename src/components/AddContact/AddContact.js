import { Box, Button, Container, Input } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/styles';
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';

const useStyles = theme => ({
    inputItem: {
       
        width: 87 + '%',
        marginTop: '10px'

    },
    submitButton : {
        width: 10 + '%',
        marginTop: '18px'
    }

})

class AddContact extends Component {
    state = {
        name: '',
        email: ''
    }
    add = (e) => {
       
        e.preventDefault()
        if(this.state.name === '' && this.state.email === '') {
            alert('All fields are mandatory')
            return;
        }
      
        this.props.addContact(this.state)
        this.setState({email:'', name:''})
        
      
        
    }
    render() {
        const ariaLabel = { 'aria-label': 'description' };
        const { classes } = this.props;
        return (

            <div>
                <Container>
                    <h2 style={{ textAlign: 'left' }}>Add Contact</h2>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        display="flex"
                        flexDirection="column"
                        
                    >
                        <Input className={classes.inputItem} value={this.state.name } onChange={(e) => this.setState({name: e.target.value })} placeholder="Contact Name" inputProps={ariaLabel} />
                        <Input className={classes.inputItem} placeholder="Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} inputProps={ariaLabel} />
                        <Button  color="primary" onClick={this.add} className={classes.submitButton } variant="contained">Submit</Button>
                      


                    </Box>


                </Container>

            </div>
        )
    }
}
export default withStyles(useStyles) (AddContact)