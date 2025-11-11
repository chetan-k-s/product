import { Container, Form, Card, Button, Row } from 'react-bootstrap'
import { useState } from 'react'
import { deleteProduct } from '../services/api'

export default function DeleteProduct() {
    const [productId, setProductId] = useState('')
    const [result, setResult] = useState('')

    const handleChange = e => setProductId(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await deleteProduct(productId)
        console.log(data)
        setResult(data)
    }

    return (
        <Container>
            <Card>
                <Card.Header style={{ padding: '10px' }}><h1>Delete Products</h1></Card.Header>
            </Card>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label style={{ padding: '10px' }}>Product ID</Form.Label>
                    <Form.Control type="input" placeholder='Enter Product ID' onChange={handleChange}></Form.Control>
                </Form.Group>
                <Button variant='primary' type='submit' style={{ margin: '10px' }}>Search</Button>
            </Form>
            <Card>
                <Card.Header style={{ padding: '10px' }}><h3>Deleted Item</h3></Card.Header>
            </Card>
            {Object.keys(result).length > 0 && (
                <Card>
                    <Card.Body style={{ padding: '10px' }}>
                        {Object.keys(result).map((key) => (
                            key !== '_id' && key !== '__v' && (
                                <div key={key}>
                                    <strong>{key.charAt(0).toUpperCase() + key.slice(1)}: </strong> {result[key]}
                                </div>
                            )
                        ))}
                    </Card.Body>
                </Card>
            )}
        </Container>
    )
}