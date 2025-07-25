import React from "react";
import Cards from "./Cards";
// import list from "../../public/list.json";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Course() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
     const getBook = async()=>{
      try{
        const res = await axios.get("https://bookstore-bivh.onrender.com/book");
        console.log(res.data);
        setBook(res.data);
      }catch (error) {
        console.log(error);
      }
     }
     getBook();
  },[])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <Link to="/"><button className="mt-6 bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-info duration-300" >
            back
          </button></Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
            {
                book.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }

        </div>
      </div>
    </>
  );
}

export default Course;
