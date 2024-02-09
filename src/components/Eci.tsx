import "../index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function EciPage() {
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
