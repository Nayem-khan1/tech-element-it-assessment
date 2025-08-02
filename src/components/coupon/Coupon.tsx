"use client";

const Coupon: React.FC = () => {
  return (
    <>
      <div className="coupon coupon-home mx-4 my-5 block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white shadow">
        <div className="tengah py-2 px-3 flex items-center justify-items-start">
          <div className="ml-3">
            <div className="flex items-center font-serif">
              <h6 className="pl-1 text-base font-medium text-gray-600">
                <span className="text-lg md:text-xl lg:text-xl text-red-500 font-bold">
                  fgdgfg
                </span>
                Off
              </h6>
              <div className="ml-2"></div>
            </div>
            <h2 className="pl-1 font-serif text-base text-gray-700 leading-6 font-semibold mb-2">
              coupon.title
            </h2>
          </div>
        </div>

        <div className="md:border-l-2 lg:border-l-2 border-dashed lg:w-1/3 md:w-1/3 relative px-4">
          <div className="info flex items-center">
            <div className="w-full"></div>
            <p className="text-xs leading-4 text-gray-500 mt-2">
              * This coupon applies when shopping more than{" "}
              <span className="font-bold">৳</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coupon;
