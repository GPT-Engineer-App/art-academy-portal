import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Primeluckarts Academy</h1>
      <p className="text-center max-w-2xl">
        Discover the world of art with Primeluckarts Academy. We offer a variety of art products and online classes to help you unleash your creativity.
      </p>
      <div className="flex space-x-4">
        <Link to="/about">
          <Button variant="outline">About Us</Button>
        </Link>
        <Link to="/products">
          <Button variant="outline">Art Products</Button>
        </Link>
        <Link to="/classes">
          <Button variant="outline">Online Classes</Button>
        </Link>
        <Link to="/contact">
          <Button variant="outline">Contact Us</Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;