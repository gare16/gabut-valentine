import { useState } from "react";
import "../index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function EciPage() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const isYourPicture = () => {
    const pictures = [
      "../../public/Images/image1.jpeg",
      "../../public/Images/image2.jpeg",
      "../../public/Images/image3.jpeg",
      "../../public/Images/image4.jpeg",
      "../../public/Images/image5.jpeg",
    ];
    if (pictures.length < noCount) {
      console.log("true");
      return pictures[Math.max(noCount, pictures.length + 1)];
    } else {
      console.log("false");
      return pictures[Math.min(noCount, pictures.length - 1)];
    }
  };

  const getNoButtonText = () => {
    const phrases = ["Engga?!", "Yakin nih?", "Yakin banget?"];

    return phrases[Math.min(noCount, phrases.length - 1)].toString();
  };
  //   () => setYesPressed(true)
  return (
    <div className="mx-96">
      <section className="section">
        <h1>Gallery Ayang</h1>
        <div className="grid">
          <div className="item"></div>
          <div className="item item--large"></div>
          <div className="item item--medium"></div>
          <div className="item item--large"></div>
          <div className="item item--full"></div>
          <div className="item item--medium"></div>
          <div className="item item--large"></div>
          <section className="flex justify-center items-center">
            <Carousel showThumbs={false}>
              <div>
                <iframe
                  className="border border-white"
                  src="https://mega.nz/embed/UXkC1aIB#yR6267JodYbpQ_IPUnZQMVs1Oe6X6Ruuz0OIVqjB43Y"
                ></iframe>
              </div>
              <div>
                <iframe src="https://mega.nz/embed/Ve1X0LhT#SuomWSYJiMTfbFp7v8cy3114qBbLHPHjfPj0abuhouA"></iframe>
              </div>
              <div>
                <iframe src="https://mega.nz/embed/FLlHgRCQ#1JJ2MrXvSBzZhf9e7qMqw9PAATLNfDAbLrE_s2bRZeo"></iframe>
              </div>
              <div>
                <iframe src="https://mega.nz/embed/Ve1X0LhT#SuomWSYJiMTfbFp7v8cy3114qBbLHPHjfPj0abuhouA"></iframe>
              </div>
              <div>
                <iframe src="https://mega.nz/embed/sPECRTpA#DyJ9_UG5hINk7OyyHBIQYN8n3GO-8PpOsSdzzrN3Abs"></iframe>
              </div>
            </Carousel>
          </section>
          <div className="item"></div>
          <div className="item item--medium"></div>
          <div className="item item--large"></div>
          <div className="item"></div>
          <div className="item item--medium"></div>
          <div className="item item--medium"></div>
          <div className="item item--large"></div>
          <div className="item"></div>
        </div>
      </section>
    </div>
  );
}
