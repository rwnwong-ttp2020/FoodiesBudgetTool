import React,{useState} from 'react'
import{Form, InputGroup} from 'react-bootstrap'

export default function OpenConversation() {
    const [text, setText]= useState('')
    const{sendMessage, selectedConversation} = useConversations()

    function handleSubmit(e){
        e.preventDefault()
        
        sendMessage(
            selectedConversation.recipients.map(r => r.id),
             text
            )
            setText('')
    }

    return (
        <div className="d-flex flex-column flex-grow-1">
            <div className="flex-grow-1 overflow-auto">

            </div>
            <Form onSubmit ={handleSubmit}>
                <Form.Group className='m-2'>
                    <InputGoup>
                    <Form.Control
                    as = "textarea"
                    requiredvalue={text}
                    onChange={e => setText(e.target.value)}
                    style={{height: '75px', resize:'none'}}
                />
                <InputGroup.Append>
                <Button type = "submit" >Send</Button>
                </InputGroup.Append>
                    </InputGoup>
                </Form.Group>
            </Form>
        </div>
    )
}
