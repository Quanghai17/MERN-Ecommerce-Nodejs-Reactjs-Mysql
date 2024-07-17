import calculateTimeLeft from "../../common/functions/calculateTimeLeft";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DealItem from "../../assets/JBL_BOOMBOX.png";

const Deal = () => {
    const [timeLeft, setTimeLeft] = useState(
        calculateTimeLeft(new Date("2024-07-27T00:00:00"))
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft(new Date("2024-07-27T00:00:00")));
        }, 1000);

        return () => clearTimeout(timer);
    });
    return (
        <div className=" flex gap-10 md:my-10 mt-10 items-center justify-center flex-col-reverse md:flex-row  min-h-[500px] bg-black text-white">
            <div className="flex flex-col gap-5 items-center md:items-start  md:mx-12">
                <h3 className="text-green text-sm">Danh mục sản phẩm</h3>
                <h2 className="xl:w-[500px] text-center md:text-start text-2xl sm:text-3xl lg:text-5xl font-semibold font-inter">
                    Enhance Your Listening Experience
                </h2>
                <div className="font-semibold text-base flex flex-row gap-6 text-black">
                    <div className="flex flex-col  items-center justify-center py-3 bg-white rounded-full">
                        <span>{timeLeft.days}</span>
                        <span className=" font-light text-xs w-[62px] text-center">
                           Ngày
                        </span>
                    </div>
                    <div className="flex flex-col  items-center justify-center py-3 bg-white rounded-full">
                        <span>{timeLeft.hours}</span>
                        <span className=" font-light text-xs w-[62px] text-center">
                            Giờ
                        </span>
                    </div>
                    <div className="flex flex-col  items-center justify-center py-3 bg-white rounded-full">
                        <span>{timeLeft.minutes}</span>
                        <span className=" font-light text-xs w-[62px] text-center">
                            Phút
                        </span>
                    </div>
                    <div className="flex flex-col  items-center justify-center py-3 bg-white rounded-full">
                        <span>{timeLeft.seconds}</span>
                        <span className=" font-light text-xs w-[62px] text-center">
                            Giây
                        </span>
                    </div>
                </div>
                <Link
                >
                    <button className="bg-green   mb-8 py-4 px-12 rounded  ease-in-out  duration-300 transform hover:scale-105 hover:-translate-y-1">
                        <span> Mua ngay</span>
                    </button>
                </Link>
            </div>
            <div className="mt-4">
                <Link
                >
                    <img
                        src={DealItem}
                        loading="lazy"
                        className="transition-transform duration-300 transform hover:-translate-y-4 hover:scale-110 hover:motion-safe:animate-pulse"
                    />
                </Link>
            </div>
        </div>
    )
}

export default Deal