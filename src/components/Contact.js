import React from 'react'
import { Button, Card, Container, Icon, Row, Select, TextInput, Textarea } from 'react-materialize'
const handleSubmit = (e) => {
    e.preventDefault()
}
export default function Contact() {
    return (


        <Container className='containerForm'>
            <Card>
                <h3>Contact Us</h3>
                <form onSubmit={handleSubmit}>
                    <Row>
                        <TextInput s={12} label="Your Name" />
                        <TextInput s={12} label="Your Phone" />
                        <TextInput s={12} label="Your Email" />
                        <Select s={12} id='Select-46' defaultValue='' multiple={false} label="Choose your option">
                            <option value="" disabled>Choose your option</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </Select>
                        <Textarea s={12} icon={<Icon>mode_edit</Icon>} label='Your content' />
                        <Button waves='light'>Submit</Button>
                    </Row>
                </form>
            </Card>
        </Container>

    )
}
