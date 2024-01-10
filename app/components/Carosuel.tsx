import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "./Card";

export default function Carosuel() {
  return (
    <Carousel className="w-full mb-16 max-w-sm md:max-w-2xl lg:max-w-4xl rounded p-2 ">
      <CarouselContent>
        <CarouselItem className="md:basis-1/3 basis-1/2 ">
          <Card />
        </CarouselItem>
        <CarouselItem className="md:basis-1/3 basis-1/2">
          <Card />
        </CarouselItem>
        <CarouselItem className="md:basis-1/3 basis-1/2">
          <Card />
        </CarouselItem>
        <CarouselItem className="md:basis-1/3 basis-1/2">
          <Card />
        </CarouselItem>
        <CarouselItem className="md:basis-1/3 basis-1/2">
          <Card />
        </CarouselItem>
        <CarouselItem className="md:basis-1/3 basis-1/2">
          <Card />
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
