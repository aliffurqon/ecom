//import component Bootstrap React
import { Card, Container, Row, Col, Button } from "react-bootstrap";

function DashboardAdmin() {
  return (
    <Container className="mt-3">
      <Row>
        <Col md="{12}">
          <Card className="border-0 rounded shadow-sm">
            <Card.Body className="p-4">
              <h1>Dasboard Admin</h1>
              <p class="lead">
                Selamat Datang di <strong>Dashboard Admin</strong>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DashboardAdmin;
