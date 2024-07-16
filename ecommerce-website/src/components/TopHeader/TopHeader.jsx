//import React from 'react'
import ChangeLang from "./ChangeLang";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-black z-40 px-2 md:px-4">
      <div className="bg-black flex justify-between items-center lg:px-64 w-full">
        <div className="text-white flex justify-center gap-2 items-center flex-1">
          <h1 className="text-[11px] max-w-[200px] md:max-w-full md:text-sm">
            Chương trình khuyến mại tháng 4 - Giảm 50%
          </h1>
          <Link to="/allProducts">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm md:text-base font-semibold underline whitespace-nowrap"
            >
              Tất cả sản phẩm
            </button>
          </Link>
        </div>
        <ChangeLang />
      </div>
    </div>
  )
}

export default TopHeader