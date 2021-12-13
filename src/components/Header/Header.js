import { AppBar, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles(theme => ({
    centerItems:  {
        margin: 'auto',
        fontSize: 1.2 +'rem'
    },
    barPosition: {
        position: 'relative'

    }

}))

export default function Header() {
    const classes = useStyles()
    const displayBar = () => {
        return <Toolbar className={classes.centerItems }>Contact Manager App</Toolbar>
    }
    return (
        <div>
            <AppBar position="sticky">{displayBar()}</AppBar>
            
        </div>
    )
}
