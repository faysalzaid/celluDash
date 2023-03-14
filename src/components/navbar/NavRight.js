import React from 'react'
import Theme from './Theme'
import Notification from './Notification'
import NavSettings from './NavSettings'

function NavRight() {
  return (
    <div className='flex items-center gap-4'>
    <Theme />
    <Notification />
    <NavSettings />
    </div>
  )
}

export default NavRight
