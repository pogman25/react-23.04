import React from 'react'
import { Box, FormControl, InputLabel, OutlinedInput, Button } from '@material-ui/core/'
import { Save } from '@material-ui/icons/'

const ProfilePage = () => {
  const handleChange = (event) => {
    // setName(event.target.value);
  }

  return (
    <Box height={500} p={3}>
      <h2>Редактирование профиля</h2>
      <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined" color="secondary">Name</InputLabel>
        <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" color="secondary" />
      </FormControl>
      <Box my={2}>
        <Button variant="contained" startIcon={<Save />}>
          Сохранить
        </Button>
      </Box>
    </Box>
  )
}

export default ProfilePage;
