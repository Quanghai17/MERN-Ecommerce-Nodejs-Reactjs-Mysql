//import React from 'react'
import Row1 from "../components/Home/Row1"
import FlashSale from "../components/Home/FlashSale";
import Categories from "../components/Home/Categories";
import BestSelling from "../components/Home/BestSelling";
import Deal from "../components/Home/Deal";
import ListProduct from "../components/Home/ListProduct";
import Services from "../common/components/Services";

const Home = () => {
  return (
    <div dir="ltr" className="flex flex-col xl:mx-32 mt-28 gap-3">
      <Row1 />
      <FlashSale />
      <Categories />
      <BestSelling />
      <Deal />
      <ListProduct />
      <Services />
    </div>
  )
}

export default Home