import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-2xl font-bold">Primeluckarts Academy</div>
      <div className="flex space-x-4">
        <Link to="/">
          <Button variant="ghost" className="text-white">Home</Button>
        </Link>
        <Link to="/about">
          <Button variant="ghost" className="text-white">About</Button>
        </Link>
        <Link to="/products">
          <Button variant="ghost" className="text-white">Products</Button>
        </Link>
        <Link to="/classes">
          <Button variant="ghost" className="text-white">Classes</Button>
        </Link>
        <Link to="/contact">
          <Button variant="ghost" className="text-white">Contact</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;