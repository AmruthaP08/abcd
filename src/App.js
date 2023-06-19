import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropdownExampleIcon = () => (
  <Dropdown
    text='Filter'
    icon='filter'
    floating
    labeled
    button
    className='icon'>
    <Dropdown.Menu>
      <Dropdown.Header icon='tags' content='Filter by tag' />
      <Dropdown.Divider />
      <Dropdown.Item icon='money' text='Amount' />
      <Dropdown.Item icon='road' text='Distance' />
      <Dropdown.Item icon='comment' text='Rating' />
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleIcon