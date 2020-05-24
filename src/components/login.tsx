import React from 'react'
import { useState } from 'react'
import { Button, Icon, Modal, Input } from 'semantic-ui-react'
import { useMutation } from '@apollo/client'
import { LOGIN } from '../queries/queries'




const LoginModal:React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [tryLogin] = useMutation(LOGIN)
    
    const handleLogin = async () => {
        const response = await tryLogin({
            variables: {
                username, password
            }
        })
        if (response){
            const token = response.data.Login.value
            localStorage.setItem('lifestyleuser-token', token)
        }
        setUsername('')
        setPassword('')
        handleClose()
    }

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
        <Input onChange={({target})=> setUsername(target.value)} value={username} placeholder='Username'/>
        </Modal.Content>
        <Modal.Content>
        <Input onChange={({target}) => setPassword(target.value)} value={password} type="password" placeholder='Enter password'/>
        </Modal.Content>
        <Modal.Actions>
        <Button onClick={handleLogin} color='green'>
            <Icon name="checkmark" /> Login
        </Button>
        </Modal.Actions>

      </Modal>
    )
}





export default LoginModal