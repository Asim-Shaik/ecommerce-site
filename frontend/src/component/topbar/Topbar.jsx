import React from "react";
import styled from "styled-components";
// import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/userRedux";

const Container = styled.div`
  height: 60px;
`;
// const Link = styled.link`
// text-decoration:none;
// text-transform:capitalize;
// `

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  width: 25%;
  padding: 5px;
  height: 75%;
  background-color: black;
  color: white;
  font-weight: 600;
  margin-left: 10px;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-wieght: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-item: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  margin-left: 25px;
  font-size: 1.2rem;
  cursor: pointer;
`;
function Topbar() {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(quantity);
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Button onClick={handleClick}>Logout</Button>
        </Left>
        <Center>
          <Logo>
            <i>Your Garden</i>
          </Logo>
        </Center>
        <Right>
          <Link to="/register">
            <MenuItem>Register</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>Sign in</MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Topbar;
