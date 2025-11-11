import { Container, Form, Card, Button } from 'react-bootstrap'
import { useState } from 'react'
import { addProduct } from '../services/api'

export default function AddProduct() {
    const [formData, setFormData] = useState({
        productName: '',
        productId: '',
        price: '',
        category: '',
        stock: ''
    })

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        await addProduct(formData);
        alert('Product added successfully')
    }

    return (
        <Container>
            <Card>
                <Card.Header>
                    <h1>Add your products</h1>
                </Card.Header>
            </Card>
            <Form onSubmit={handleSubmit}>
                {
                    Object.keys(formData).map((key) => ( 
                        <Form.Group controlId={key} key={key}>
                            <Form.Label style={{padding:'10px'}}>
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </Form.Label>
                            <Form.Control type="input" name = {key} value = {formData[key]} placeholder={`Enter ${key}`} onChange={handleChange}/>
                        </Form.Group>
                    ))
                }
                <Button variant='primary' type='submit' style={{margin:'10px'}}>Add product</Button>
            </Form>
        </Container>
    )
}