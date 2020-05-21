import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from '../../selectors/chatsSelectors'
import { updateProfile } from '../../actions/chatsActions'
import { Box, FormControl, InputLabel, OutlinedInput, Button } from '@material-ui/core/'
import { Save } from '@material-ui/icons/'

class Profile extends Component {
  state = {
    name: this.props.user.name,
    lastName: this.props.user.lastName
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  onSave = () => {
    const { updateProfile } = this.props
    const { name, lastName } = this.state
    updateProfile({ name, lastName })
  }

  render() {
    const { name, lastName } = this.state
    return (
      <Box height={500} p={3}>
        <h2>Редактирование профиля</h2>
      
        <FormControl variant="outlined">
          <InputLabel htmlFor="name" color="primary">Имя</InputLabel>
          <OutlinedInput name="name" id="name" value={name} onChange={this.handleChange} label="Имя" color="primary" />
        </FormControl>
        <FormControl variant="outlined" my={2}>
          <InputLabel htmlFor="lastName" color="primary">Фамилия</InputLabel>
          <OutlinedInput name="lastName" id="lastName" value={lastName} onChange={this.handleChange} label="Фамилия" color="primary" />
        </FormControl>
        <Box my={2}>
          <Button variant="contained" startIcon={<Save />} onClick={this.onSave}>
            Сохранить
          </Button>
        </Box>
      </Box>
    )
  }
}

const mapStateToProps = store => ({
  user: getCurrentUser(store)
})

const mapDispatchToProps = {
  updateProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
