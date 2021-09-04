import React from 'react';
import { Link } from 'react-router-dom';
import Col from '../../node_modules/react-bootstrap/esm/Col';
import Row from '../../node_modules/react-bootstrap/esm/Row';
import Rating from './Rating';
import './Product.css'

export default function Product(props) {
  const { product } = props;
  return (
    <Row>
    <Col xs={6} md={3} key={product._id} className="card new-card">
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2 className='product-name'>{product.name}</h2>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="row">
          <div className="price">${product.price}</div>
          <div>
            <Link to={`/seller/${product.seller._id}`}>
              {product.seller.seller.name}
            </Link>
          </div>
        </div>
      </div>
    </Col>
    </Row>
  );
}
