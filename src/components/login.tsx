import React from 'react'
import { useState } from 'react'
import { Button, Icon, Modal, Input } from 'semantic-ui-react'

const LoginModal = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    //add a handleLogin button here
    

    return (
        <Modal 
            open={open}
            onClose={handleClose}
            size='mini'
            trigger={<Button 
            onClick={handleOpen}
            basic
        >Login</Button>}>
        <Modal.Header>Login</Modal.Header>
        <Modal.Content>
        <Input placeholder='Username'/>
        </Modal.Content>
        <Modal.Content>
        <Input type="password" placeholder='Enter password'/>
        </Modal.Content>
        <Modal.Actions>
        <Button onClick={handleClose} color='green'>
            <Icon name="checkmark" /> Login
        </Button>
        </Modal.Actions>

      </Modal>
    )
}





export default LoginModal