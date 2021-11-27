import React, { useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Checkbox from '@mui/material/Checkbox'
import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import UserDetailsCard from '../UserDetailsCard'
import users from '../../__mock__/users.json'

const ContactList = () => {
  const [checked, setChecked] = React.useState([1])
  const [currentUser, setCurrentUser] = useState(null)
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value)

    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {users.map((user) => {
              const labelId = `checkbox-list-secondary-label-${user.username}`
              return (
                <ListItem
                  key={user.username}
                  disablePadding
                  onClick={handleToggle(user.username)}
                >
                  <ListItemButton>
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(user.username)}
                      checked={checked.indexOf(user.username) !== -1}
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                    <ListItemAvatar>
                      <Avatar
                        alt={user.username}
                        src={user.username}
                      />
                    </ListItemAvatar>
                    <ListItemText id={labelId} primary={user.username} />
                    <ListItemText primary={user.company.name} />
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
        </Grid>
        <Grid item xs={6}>
          <UserDetailsCard />
        </Grid>
      </Grid>

    </>
  )
}


export default ContactList