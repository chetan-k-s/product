import {Container, Card} from 'react-bootstrap';

export default function Home(){
    return(
        <Container>
            <Card>
                <Card.Header>
                    <h1>Home page is here</h1>
                </Card.Header>
                <Card.Body>
                    <p>So this is the homepage</p>
                </Card.Body>
            </Card>
        </Container>
    )
}