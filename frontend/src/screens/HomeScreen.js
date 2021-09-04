import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProductCategories, listProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';
import { Link } from 'react-router-dom';
import Row from '../../node_modules/react-bootstrap/esm/Row';
import Col from '../../node_modules/react-bootstrap/esm/Col';
import Container from '../../node_modules/react-bootstrap/esm/Container';
import Image from '../../node_modules/react-bootstrap/esm/Image';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const userTopSellersList = useSelector((state) => state.userTopSellersList);
  const {
    loading: loadingSellers,
    error: errorSellers,
    users: sellers,
  } = userTopSellersList;

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;



  useEffect(() => {
    dispatch(listProducts({}));
    dispatch(listTopSellers());
    dispatch(listProductCategories())
  }, [dispatch]);
  return (
    <div>
        <>

              <Row>
         
              <img className='banner-img' src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/8/27/d80dfd35-e43a-4125-80e2-4244865548c61630073347456-Pay-day-prebuzz-1-DK.jpg' alt=''/>
           
              </Row>
        </>


       
          {/* <Col md={12} >
             <h2>Categories</h2>
          </Col>
          <Row>
          <Col md={3} xs={6}>
             <Link to={`/search/category/Pants`}>
             <img style={{height:"400px"}} src='https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/e72c82f2-cfd5-4f9a-b1b0-ba9e2b3e51251598892519506-W.jpg' alt=''/>
                 
                    Pants
               </Link>
          </Col>
          <Col  md={3} xs={6}>
             <Link to={`/search/category/Pants`}>
             <img style={{height:"400px"}} src='https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/6e0a9fa0-9e8d-4c29-9250-995c9f1ba9331605363273176-Home---U.S.-Polo-Assn..jpg' alt=''/>
                 
                    Pants
             </Link>
          </Col>
          <Col  md={3} xs={6}>
              <Link to={`/search/category/Pants`}>
              <img style={{height:"400px"}} src='https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/6e0a9fa0-9e8d-4c29-9250-995c9f1ba9331605363273176-Home---U.S.-Polo-Assn..jpg' alt=''/>
                 
                    Pants
              </Link>
          </Col>
          <Col  md={3} xs={6}>
             <Link to={`/search/category/Pants`}>
                  <img style={{height:"400px"}} src='https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/6e0a9fa0-9e8d-4c29-9250-995c9f1ba9331605363273176-Home---U.S.-Polo-Assn..jpg' alt=''/>
                 
                    Pants
               </Link>
          </Col>
          </Row> */}
          <Row>
            <h2>BIGGEST DEALS ON TOP BRANDS</h2>
          </Row>
          <Row>
            <Col   className="card new-card">
             <Link to={`/product`}>
                <img className="medium" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/0524cbd5-f034-4155-9e3b-336c4e530ee41605363272658-Home---Levis.jpg"  />
             </Link>
            </Col>
            <Col  className="card new-card">
             <Link to={`/product`}>
                <img className="medium" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/e72c82f2-cfd5-4f9a-b1b0-ba9e2b3e51251598892519506-W.jpg"  />
             </Link>
            </Col>
            <Col   className="card new-card">
             <Link to={`/product`}>
                <img className="medium" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/64ecc170-58af-473f-8144-b1639895a8291598892519457-Veromodo.jpg"  />
             </Link>
            </Col>
            <Col   className="card new-card">
             <Link to={`/product`}>
                <img className="medium" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/581e2bf6-6d47-4a4b-a11f-43200dc9c6791598892519362-Puma.jpg"  />
             </Link>
            </Col>
            <Col   className="card new-card">
             <Link to={`/product`}>
                <img className="medium" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/4/e6c7a718-acc0-4aa6-b04c-470ab139d66c1599230080722-F21--4-.jpg"  />
             </Link>
            </Col>
          </Row>

     
       
          <Row className='row fashion-banners'>
         <img md={6} xs={12} className='fashion-banner' src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/8/28/0efb1bb7-e131-4fd8-ab1a-4d448abd7b1c1630145601297-Desktop-HPW-Day3.jpg' alt=''/>
       
     

         {/* <img md={6} xs={12} className='fashion-banner' src='/images/2.jpg' alt=''/> */}
        
</Row>
        
 
      {/* <h2>Top Sellers</h2>
      {loadingSellers ? (
        <LoadingBox></LoadingBox>
      ) : errorSellers ? (
        <MessageBox variant="danger">{errorSellers}</MessageBox>
      ) : (
        <>
          {sellers.length === 0 && <MessageBox>No Seller Found</MessageBox>}
          <Carousel showArrows autoPlay showThumbs={false}>
            {sellers.map((seller) => (
              <div key={seller._id}>
                <Link to={`/seller/${seller._id}`}>
                  <img src={seller.seller.logo} alt={seller.seller.name} />
                  <p className="legend">{seller.seller.name}</p>
                </Link>
              </div>
            ))}
          </Carousel>
        </>
      )} */}
      <h2>Featured Products</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center" xs={6} >
       
             {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          
           
          </div>
        </>
      )}

  <Container>
     
      
    </Container>

     {/* <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src='/images/1.jpg'  />
    </Col>
    <Col xs={6} md={4}>
      <Image src='/images/1.jpg' />
    </Col>
    <Col xs={6} md={4}>
      <Image src='/images/1.jpg'  />
    </Col>
  </Row>
</Container> */}
   
    </div>
  );
}
