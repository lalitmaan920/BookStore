import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FreeBook = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstore-bivh.onrender.com/book");
        const data = res.data.filter((data) => data.category === "free");
        setBook(data);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280, // large laptops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768, // tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-20 py-10">
      <div className="mb-8 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Free Offered Courses</h1>
        <p className="text-sm sm:text-base text-white-600 max-w-2xl mx-auto">
          Learn without limits. Explore our top-rated free courses carefully curated to help you grow your skills without spending a dime.
        </p>
      </div>

      <div className="w-full mx-auto sm:w-3/12 md:w-8/12 lg:w-11/12">
        <Slider {...settings}>
          {book.map((item) => (
            <div key={item.id} className="w-6/12">
              <Cards item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FreeBook;
