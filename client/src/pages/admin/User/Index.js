//import hook useState dan useEffect from react
import { useState, useEffect } from "react";

//import react router dom
import { Link } from "react-router-dom";

//import component Bootstrap React
import { Card, Container, Row, Col, Button, Table } from "react-bootstrap";

//import axios
import axios from "axios";

function UserIndex() {
  //define state
  const [users, setUsers] = useState([]);

  // useEffect hook
  useEffect(() => {
    //panggil method "getData"
    getData();
  }, []);

  const getData = async () => {
    //panggil end point
    const response = await axios.get("http://localhost:3001/users/all");
    //get response data
    const data = await response.data;

    //assign response data to state "setUsers"
    setUsers(data);
  };

  //function "deletePost"
  const deleteUser = async (id) => {
    //sending
    await axios.delete(`http://localhost:3001/users/delete/${id}`);

    //panggil function "fetchData"
    getData();
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md="{12}">
          <Card className="border-0 rounded shadow-sm">
            <Card.Body>
              <Button as={Link} to="/users/create" variant="success" className="mb-3">
                +New User
              </Button>
              <Table striped bordered hover className="mb-1">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, i) => (
                    <tr key={i}>
                      <td key={user.id + 1}>{(i += 1)}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <Button as={Link} to={`/users/update/${user.id}`} variant="primary" size="sm" className="me-2">
                          EDIT
                        </Button>
                        <Button onClick={() => deleteUser(user.id)} variant="danger" size="sm">
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

export default UserIndex;
