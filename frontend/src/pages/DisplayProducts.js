import { useState, useEffect } from 'react';
import { Container, Card, Row } from 'react-bootstrap';
import { displayProducts } from '../services/api';

export default function DisplayProduct() {
    const [result, setResult] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await displayProducts();
                setResult(data);
                console.log("Fetched products:", data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <Container>
            <Card>
                <Card.Header>
                    <h1>List of Products</h1>
                </Card.Header>
            </Card>

            {Array.isArray(result) && result.length > 0 ? (
                <Row>
                    {result.map((product, index) => (
                        <div key={index} className="mb-3 border-bottom pb-2">
                            <strong>Product Name:</strong> {product.productName} <br />
                            <strong>Product ID:</strong> {product.productId} <br />
                            <strong>Product Price:</strong> {product.price} <br />
                            <strong>Product Stock:</strong> {product.stock} <br />
                            <strong>Product Category:</strong> {product.category} <br />
                            <br/>
                            <br/>
                        </div>
                    ))}
                </Row>
            ) : (
                <p className="mt-3">No products found.</p>
            )}
        </Container>
    );
}
