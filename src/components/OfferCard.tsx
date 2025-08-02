import Image from "next/image";

const OfferCard = () => {
  return (
    <div className="w-full group">
      <div className="h-full">
        <div className="flex flex-col gap-4">
          {/* First Image */}
          <div className="relative w-full h-44 rounded-lg overflow-hidden">
            <Image
              src="/offer3.jpg"
              alt="offer image"
              fill
              className="object-cover"
            />
          </div>
          {/* Second Image */}
          <div className="relative w-full h-48 rounded-lg overflow-hidden">
            <Image
              src="/offer4.jpg"
              alt="offer image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
