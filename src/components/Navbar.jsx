import React from "react";
import { IoMenu } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  return (
    <>
    <section>
    <div className="navbar nav d-flex justify-content-between align-items-center">
        {/* <MenuOutline color={"#00000"} height="40px" width="40px" /> */}
        <IoMenu className="icons"/>
        <div className="search ">
          <input className="border-0 searchinput " type="search" placeholder="search" />
          <CiSearch className="searchicon"/>
        </div>
        <IoPersonCircleOutline className="icons"/>
      </div>
    </section>
     
    </>
  );
};

export default Navbar;