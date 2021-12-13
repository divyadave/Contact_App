import { Button, ButtonBase, capitalize, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useLocation, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import user from '../../../src/user.png'

const useStyles = makeStyles(theme => ({
    profileImage: {
        maxWidth: '25%'
    },
    image: {
        width: 128,
        height: 128,
      },
    img: {
        maxWidth: '100%'
    },
    paper: {
        maxWidth: '500px',
        margin: '45px' + ' ' + 'auto',
        padding: '16px'
    }

}))

function ContactCard(props) {
    const classes = useStyles()
    const routeData = useLocation()
    const { name, email} = routeData.state

    return (
        <div>
             <Paper className={classes.paper}>
            <Grid container>
                <Grid xs={6} item>
                    <ButtonBase className={classes.image}>
                    <img className={classes.img} src={user}></img>
                    </ButtonBase>
                   
                </Grid>
                <Grid item  xs={12} sm container>
                <Grid tem xs direction="column" container>
                <Grid item xs>
                <Typography align="left" gutterBottom variant="h5">
                 { capitalize(name) }
                </Typography>
                <Typography align="left" variant="body2" gutterBottom>
                 {email}
                </Typography>
              </Grid>
             
                </Grid>
                </Grid>

            </Grid>
           </Paper>
          
           <Button component={Link} to="/"  color="primary" variant="contained">Back to Contact</Button>
          
            
        </div>
    )
}

export default ContactCard
