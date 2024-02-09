import Card from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <main className="flex justify-center items-center ">
      <Card
        responsive={responsive}
        className="w-full h-96 sm:mx-auto border border-red-300 rounded-lg object-cover"
      >
        <figure>
          <img
            src="../../public/Images/image1.jpeg"
            alt="image1"
            width={500}
            height={600}
          />
        </figure>
        <figure className="h-full flex justify-center items-center mx-2">
          <img
            src="../../public/Images/image2.jpeg"
            alt="image2"
            width={500}
            height={600}
          />
        </figure>
        <figure className="h-full flex justify-center items-center">
          <img
            src="../../public/Images/image3.jpeg"
            alt="image3"
            width={500}
            height={600}
          />
        </figure>
        <figure>
          <img
            src="../../public/Images/image4.jpeg"
            alt="image4"
            width={500}
            height={600}
          />
        </figure>
        <figure>
          <img
            src="../../public/Images/image5.jpeg"
            alt="image5"
            width={500}
            height={600}
          />
        </figure>
      </Card>
    </main>
  );
};

export default Carousel;
