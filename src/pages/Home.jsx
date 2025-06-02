import React, { useEffect, useState } from "react";
import Row from "../components/layout/Row";
import Col from "../components/layout/Col";
import Section from "../components/layout/Section";

function Page() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <>
      <title>Home - Radu Nicolau</title>
      <meta name="description" content="My career" />

      <main>
        <Section>
          <Row>
            <Col>
              <h1 className="hero">Home</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className="hero">Users</h2>
              {users.length > 0 && (
                <ul>
                  {users.map((user) => (
                    <li key={user.id}>
                      <strong>
                        {user.firstName} {user.lastName}
                      </strong>
                      , {user.age} - {user.email}
                    </li>
                  ))}
                </ul>
              )}
            </Col>
          </Row>
        </Section>
      </main>
    </>
  );
}

export default Page;
