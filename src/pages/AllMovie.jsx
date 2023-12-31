import React, { useEffect, useState } from "react";
import { Navbar } from "../assets/components/Navbar";
import bgfilm from "../assets/img/bgFilm.jpg";
import { fetchDataPopular } from "../services/get-data-movie-Popular";
import { useNavigate } from "react-router-dom";

export const AllMovie = () => {
  const [Popular, setPopular] = useState([]);
  const navigate = useNavigate();

  const getDataPopular = async () => {
    const data = await fetchDataPopular();
    setPopular(data.results);
  };

  useEffect(() => {
    setTimeout(() => {
      getDataPopular();
    }, 0);
  }, []);
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div className="w-screen h-1/2">
          <div className="w-screen h-1/2 absolute z-10 flex">
            <h2 className="text-white text-[2.5rem] font-bold flex justify-center items-center pl-[6rem]">All Movie</h2>
          </div>
          <img src={bgfilm} alt="" className="w-screen h-full object-cover"></img>
          <div className="absolute inset-[1px] h-100 bg-gradient-to-b from-transparent to-black bottom-1/2 transform"></div>
        </div>
        <div className="w-screen bg-black flex flex-wrap">
          {Popular.map((value) => {
            return (
              <div className="m-auto w-[15rem] h-[32rem] cursor-pointer" key={value.id} onClick={() => navigate(`/detail/${value.id}`)}>
                <img src={`https://image.tmdb.org/t/p/original/${value.poster_path}`} alt="" className="w-[15rem] m-auto rounded-md hover:scale-105" />
                <div className="pt-[1rem] pl-[0.2rem]">
                  <h6 className="text-white text-[1.2rem] font-semibold">{value.original_title}</h6>
                  <p className="text-white font-thin italic">{value.release_date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
