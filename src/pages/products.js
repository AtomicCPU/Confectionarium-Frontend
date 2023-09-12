import React, { useEffect, useState } from 'react';
import useFetch from 'react-fetch-hook';
import { Form, Card } from 'react-bootstrap';
import './styleSheets/productCard.css';

export const Products = () => {
  const { isLoading, data } = useFetch('http://127.0.0.1:4098/api/v1/products');

  if (isLoading) {
    return <div>Loading Products...</div>;
  }

  const productData = JSON.stringify(data.data);

  const parsedData = JSON.parse(productData);

  return (
    // productData
    <div>
      <div className="overhead">
          <h1>Here are our products.</h1>
      </div>
      <div className="paddingCards">
        <div className="grid">{parsedData.data.map(cardRender)}</div>
      </div>
    </div>
  );
};
const cardRender = (product, index) => {
  return (
    //Revise style to fit however it should
    <div>
      <Card className="cardStyle" key={index}>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Body>{product.description}</Card.Body>
          <Card.Body>https://confectionarium/productPage/{product.id}</Card.Body>
        </Card.Body>
      </Card>
    </div>
  );
};
