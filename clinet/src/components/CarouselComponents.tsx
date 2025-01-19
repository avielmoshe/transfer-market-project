import unnamedImage from "/src/assets/img/unnamed.png";
import transfermarktLogo from "/src/assets/img/Transfermarkt_logo.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { itemsType } from "@/pages/TransfersPage";
import { Link } from "react-router-dom";

const subCarouselImages = [
  unnamedImage,
  transfermarktLogo,
  unnamedImage,
  transfermarktLogo,
];

interface CarouselComponentsProps {
  items: itemsType[];
}

const CarouselComponents: React.FC<CarouselComponentsProps> = ({ items }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <div className="w-full h-[full] p-[20px] flex justify-center items-center">
      <div className="relative w-[80%] max-w-[650px]">
        <Carousel
          plugins={[plugin.current]}
          className="w-full relative"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselPrevious className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 text-white text-3xl" />
          <CarouselContent>
            {items.map((item, index) => {
              if (!item.newsSpotlightFirstImage) {
                return null; 
              }
              return (
                <CarouselItem key={index} className="relative">
                  <div  className="h-[400px] relative"
                      style={{
                        backgroundImage: `url(${item.newsSpotlightFirstImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}>
                    <Link
                     
                      to={`news/${item.id}`}
                    >
                      <div className="flex flex-col absolute bottom-0 left-0 right-0">
                        <div className="bg-[rgb(92,166,255)] absolute bottom-20 left-0  text-[15px] text-white font-bold mb-[5px] p-[5px] inline-block">
                          {item.newsTeaser}
                        </div>
                        <div className="bg-[#00193f] bg-opacity-80 p-4 text-white">
                          <div className="flex">
                            <img
                              src={item.newsFirstImage}
                              alt=""
                              className="w-[50px] h-[50px] object-cover rounded-full mr-2"
                            />
                            <div>{item.newsHeadline}</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2 z-20 cursor-pointer" />
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponents;
