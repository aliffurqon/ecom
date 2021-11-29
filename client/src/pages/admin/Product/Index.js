//import hook useState dan useEffect from react
import { useState, useEffect } from "react";

//import react router dom
import { Link } from "react-router-dom";

//import component Bootstrap React
import { Card, Container, Row, Col, Button, Table } from "react-bootstrap";

//import axios
import axios from "axios";

function ProductsIndex() {
  //define state
  const [products, setProducts] = useState([]);

  // useEffect hook
  useEffect(() => {
    //panggil method "getData"
    getData();
  }, []);

  const getData = async () => {
    //panggil end point
    const response = await axios.get("http://localhost:3001/products");
    //get response data
    const data = await response.data;

    //assign response data to state "setUsers"
    setProducts(data);
  };

  //function "deletePost"
  const deleteProducts = async (id) => {
    //sending
    await axios.delete(`http://localhost:3001/products/delete/${id}`);

    //panggil function "fetchData"
    getData();
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md="{12}">
          <Card className="border-0 rounded shadow-sm">
            <Card.Body>
              <Button as={Link} to="/products/create" variant="success" className="mb-3">
                +New Product
              </Button>
              <Table striped bordered hover className="mb-1">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Category Name</th>
                    <th>Total Sold</th>
                    <th>Rating</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, i) => (
                    <tr key={i}>
                      <td key={product.id + 1}>{(i += 1)}</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.stock}</td>
                      <td>{product.category.category_name}</td>
                      <td>{product.total_sold}</td>
                      <td>{product.rating}</td>
                      <td>
                        <Button as={Link} to={`/products/update/${product.id}`} variant="primary" size="sm" className="me-2">
                          EDIT
                        </Button>
                        <Button onClick={() => deleteProducts(product.id)} variant="danger" size="sm">
                          DELETE
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductsIndex;
