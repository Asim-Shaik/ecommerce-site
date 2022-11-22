import styled from "styled-components";
import Topbar from "../component/topbar/Topbar";
import Announcement from "../component/Announcement";
import Products from "../component/Products";
import Footer from "../component/footer/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  font-size:2rem;
  text-transform:capitalize;
  text-align:center;
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  return (
    <Container>
      <Topbar />
      <Title>{cat}</Title>

      <Products cat={cat} />
      <Footer />
    </Container>
  );
};

export default ProductList;
