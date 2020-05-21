import React from 'react'
import { useState } from 'react'
import { Button, Icon, Modal, Input } from 'semantic-ui-react'
import { useQuery } from '@apollo/client'



const LoginModal: React.FC = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Modal 
            trigger={<Button 
            onClick={handleOpen}
            open={open}
            onClose={handleClose}
            basic
            size='mini'
        >Login</Button>}>
        <Modal.Header>Login</Modal.Header>
        <Modal.Content>
        <Input placeholder='Username'/>
        </Modal.Content>
        <Modal.Content>
        <Input type="password" placeholder='Enter password'/>
        </Modal.Content>
        <Button onClick={handleClose} color='green'>
            <Icon name="checkmark" /> Login
        </Button>
      </Modal>
    )
}





export default LoginModal