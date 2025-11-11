import { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { updateProducts } from "../services/api";

export default function UpdateProduct() {
    const [productId, setProductId] = useState("");
    const [formData, setFormData] = useState({
        productName: "",
        price: "",
        category: "",
        stock: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!productId) {
            alert("Please enter a valid Product ID to update.");
            return;
        }
        try {
            const response = await updateProducts(productId, formData);
            console.log("Updated product:", response);
            alert(response.message || "Product updated successfully!");
        } catch (err) {
            console.error("Error updating product:", err);
            alert("Error updating product.");
        }
    };

    return (
        <Container>
            <Card className="mt-3 p-3">
                <Card.Header>
                    <h1>Update Product</h1>
                </Card.Header>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="productId">
                        <Form.Label style={{ padding: "10px" }}>
                            Product ID
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Product ID to update"
                            value={productId}
                            onChange={(e) => setProductId(e.target.value)}
                            required
                        />
                    </Form.Group>

                    {Object.keys(formData).map((key) => (
                        <Form.Group controlId={key} key={key}>
                            <Form.Label style={{ padding: "10px" }}>
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name={key}
                                value={formData[key]}
                                placeholder={`Enter new ${key} (leave blank to keep old value)`}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    ))}

                    <Button
                        variant="warning"
                        type="submit"
                        style={{ margin: "10px" }}
                    >
                        Update Product
                    </Button>
                </Form>
            </Card>
        </Container>
    );
}
