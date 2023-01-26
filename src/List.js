import React, { useState, useEffect } from 'react';
import {Badge, ListGroup, ListGroupItem} from 'reactstrap';

export default function List() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("http://localhost:8000")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ListGroup>
          {items.map(item => (
            <ListGroupItem key={item.id}>
              {item.naam}  
              
              <Badge color={item.status === "goed" ? "success": "warning"}>
                {item.status}
              </Badge>
             
            </ListGroupItem>
          ))}
        </ListGroup>
      );
    }
}