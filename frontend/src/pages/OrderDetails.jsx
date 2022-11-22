import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./orderDetails.css"
import { Link } from "react-router-dom";
const OrderDetails = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const [productname, setProductname] = useState();
  const [productimage, setProductimage] = useState();
  const [productquantity, setProductquantity] = useState();
  const [shopId, setShopId] = useState();
  const [userId, setUserId] = useState([]);
  const [address, setAddress] = useState({});
  const [landmarks, setLandmarks] = useState();
  const [pincode, setPincode] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();


  const handleClick = async (e) => {
    e.preventDefault();
    console.log(shopId);
    
    await setUserId(user.currentUser._id);
    console.log(userId);

    const neworder = {
      orders: {
        productdetails: {
          productname,
          productimage,
          productquantity,
        },
        userId,
        shopId,
        landmarks,
        address,
        pincode,
        phone,
        email,
        name,
      },
    };
    var options = {
      key: "rzp_live_UH49MSqCjEE8OR",
      key_secret:"tHDfOSSXtso0KBEaNvbd3kX5",
      amount: cart.total *100,
      currency:"INR",
      name:"STARTUP_PROJECTS",
      description:"for testing purpose",
      handler: function(response){
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name:"Velmurugan",
        email:"mvel1620r@gmail.com",
        contact:"7904425033"
      },
      notes:{
        address:"Razorpay Corporate office"
      },
      theme: {
        color:"#3399cc"
      }
    };
    var pay = new window.Razorpay(options);
    pay.open();
  
    console.log(neworder);



    try {
      await cart.products.map((item) => {
        setProductname(item.name);
        setProductimage(item.image);
        setProductquantity(item.quantity);
        const shopname = item.shopname;
        const getid = async () => {
          const res = await axios.get(
            `http://localhost:5000/api/shop?shop=${shopname}`
          );
          setShopId(res.data.shop.map((item) => item._id));
        };
        getid();
      });
      const resshop = await axios.patch(
        `http://localhost:5000/api/shop/${shopId}`,
        neworder
      );
      console.log(resshop);
    } catch (err) {
      console.log(err);
    }

    try {
      const resuser = await axios.patch(
        `http://localhost:5000/api/user/${userId}`,
        neworder
      );
      console.log(resuser);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="conatiner">

    <div className="newProduct">
      <h1 className="addProductTitle">Order details</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="james@mail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input
            name="name"
            type="text"
            placeholder="eg: Asim shaik"
            onChange={(e) => setName(e.target.value)}
            />
        </div>

        <div className="addProductItem">
          <label>Address</label>
          <input
            name="Address"
            type="textarea"
            placeholder="Home address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Landmarks</label>
          <input
            name="landmarks"
            type="text"
            placeholder="eg: Hotel hayatt"
            onChange={(e) => setLandmarks(e.target.value)}
            />
        </div>

        <div className="addProductItem">
          <label>Pincode</label>
          <input
            name="Pincode"
            type="text"
            placeholder="eg: 403601"
            onChange={(e) => setPincode(e.target.value)}
            />
        </div>
        <div className="addProductItem">
          <label>Phone Number</label>
          <input
            name="Phone number"
            type="text"
            placeholder="eg: 7972926489"
            onChange={(e) => setPhone(e.target.value)}
            />
        </div>
        {
          user? 
        <button  onClick={handleClick} className="addProductButton">
          Place order
        </button>:<Link to='/login'>login please</Link>
        }
      </form>
    </div>
            </div>
  );
};

export default OrderDetails;
