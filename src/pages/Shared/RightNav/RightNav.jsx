import React from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'


const RightNav = () => {
  return (
    <div>
      <div className="auth-btn py-4">
        <h4 className="font-bold underline">Login With</h4>
        <Button variant="outline-primary mb-2 w-100%">
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-secondary">
          <FaGithub /> Login with Github
        </Button>
      </div>
      <ListGroup className="py-2 font-2xl">
        <h4>Find Us</h4>
          <ListGroup.Item> <FaFacebook/> Facebook</ListGroup.Item>
          <ListGroup.Item> <FaTwitter/> Twitter</ListGroup.Item>
          <ListGroup.Item> <FaInstagram/> Instagram</ListGroup.Item>
      </ListGroup>
      <div className="zone border py-3 px-2">
        <h4>Q-Zone</h4>
        <div className="text-center">
          <img src={qzone1} alt="" />
          <img src={qzone2} alt="" />
          <img src={qzone3} alt="" />
          </div>
      </div>
      <div className="bg-black text-white py-5 px-4 text-center">
        <h1>Create an Amazing Newspaper</h1>
        <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
        <button className="bg-danger text-white py-3 px-5 border-0">Learn More</button>
      </div>
    </div>
  );
};

export default RightNav;
