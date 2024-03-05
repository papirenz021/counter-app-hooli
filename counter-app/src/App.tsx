import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <div className="d-flex align-items-center justify-content-center">
            <h1 className="text-center m-0">Counter:</h1>
            <span className="counter-value ms-3">{count}</span>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-5">
            <Button variant="danger" className="minus-btn mx-2" onClick={() => setCount(count - 1)}>
              <span style={{ color: 'white' }}>-</span>
            </Button>
            <Button variant="primary" className="plus-btn mx-2" onClick={() => setCount(count + 1)}>
              <span style={{ color: 'white' }}>+</span>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;