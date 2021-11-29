//import hook useState from react
import { useState } from "react";

//import component Bootstrap React
import { Card, Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

//import axios
import axios from "axios";

//import hook history dari react router dom
import { useHistory } from "react-router-dom";

function CreateProduct() {
  //state
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [weight, setWeight] = useState("");
  const [categoryName, setCategoryName] = useState("");

  //state validation
  const [validation, setValidation] = useState({});

  //history
  const history = useHistory();

  //method "storePost"
  const storeProduct = async (e) => {
    e.preventDefault();

    //send data to server
    await axios
      .post("http://localhost:3001/products/add", {
        name: name,
        desc: desc,
        price: price,
        stock: stock,
        weight: weight,
        categoryId: categoryName,
      })
      .then(() => {
        //redirect
        history.push("/products");
      })
      .catch((error) => {
        //assign validation on state
        setValidation(error.response.data);
      });
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md="{12}">
          <Card className="border-0 rounded shadow-sm">
            <Card.Body>
              {validation.errors && (
                <Alert variant="danger">
                  <ul class="mt-0 mb-0">
                    {validation.errors.map((error, index) => (
                      <li key={index}>{`${error.param} : ${error.msg}`}</li>
                    ))}
                  </ul>
                </Alert>
              )}

              <Form onSubmit={storeProduct}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Insert Product Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="email" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Insert Product Price" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicGender">
                  <Form.Label>Stock</Form.Label>
                  <Form.Control type="text" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="Insert Product Stock" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAddress">
                  <Form.Label>Product Description</Form.Label>
                  <Form.Control as="textarea" rows={5} value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Insert Product Description" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicGender">
                  <Form.Label>Stock</Form.Label>
                  <Form.Control type="text" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="Insert Product Stock" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicGender">
                  <Form.Label>Weight</Form.Label>
                  <Form.Control type="text" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Insert Product Weight" />
                </Form.Group>

                {/* kurang select box untuk category name */}

                <Button variant="primary" type="submit">
                  SIMPAN
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateProduct;
