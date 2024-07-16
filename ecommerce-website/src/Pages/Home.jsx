//import React from 'react'
import Row1 from "../components/Home/Row1"
import FlashSale from "../components/Home/FlashSale";
import Categories from "../components/Home/Categories";

const Home = () => {
  return (
    <div dir="ltr" className="flex flex-col xl:mx-32 mt-28 gap-3">
      <Row1/>
      <FlashSale/>
      <Categories/>
    </div>
  )
}

export default Home