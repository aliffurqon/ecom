//import hook useState dan useEffect from react
import { useState, useEffect } from "react";

//import react router dom
import { Link } from "react-router-dom";

//import component Bootstrap React
import { Card, Container, Row, Col, Button, Table } from "react-bootstrap";

//import axios
import axios from "axios";

function CategoryIndex() {
  //define state
  const [categories, setCategories] = useState([]);

  // useEffect hook
  useEffect(() => {
    //panggil method "getData"
    getData();
  }, []);

  const getData = async () => {
    //panggil end point
    const response = await axios.get("http://localhost:3001/category");
    //get response data
    const data = await response.data;

    //assign response data to state "setUsers"
    setCategories(data);
  };

  //function "deletePost"
  const deleteCategories = async (id) => {
    //sending
    await axios.delete(`http://localhost:3001/category/delete/${id}`);

    //panggil function "fetchData"
    getData();
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md="{12}">
          <Card className="border-0 rounded shadow-sm">
            <Card.Body>
              <Button as={Link} to="/category/create" variant="success" className="mb-3">
                +New Category
              </Button>
              <Table striped bordered hover className="mb-1">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Name Category</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category, i) => (
                    <tr key={i}>
                      <td key={category.id + 1}>{(i += 1)}</td>
                      <td>{category.category_name}</td>
                      <td>
                        <Button as={Link} to={`/category/update/${category.id}`} variant="primary" size="sm" className="me-2">
                          EDIT
                        </Button>
                        <Button onClick={() => deleteCategories(category.id)} variant="danger" size="sm">
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

export default CategoryIndex;
