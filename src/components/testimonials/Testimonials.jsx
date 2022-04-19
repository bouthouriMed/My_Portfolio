import React from "react";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import "./testimonials.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima et
    aliquam sequi cupiditate dignissimos at vero nostrum dolor mollitia,
    ipsum assumenda consequuntur vitae repellat cum rerum deleniti
    inventore molestiae ex.`,
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima et
    aliquam sequi cupiditate dignissimos at vero nostrum dolor mollitia,
    ipsum assumenda consequuntur vitae repellat cum rerum deleniti
    inventore molestiae ex.`,
  },
  {
    avatar: AVTR3,
    name: "Melvin Alen",
    review: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima et
    aliquam sequi cupiditate dignissimos at vero nostrum dolor mollitia,
    ipsum assumenda consequuntur vitae repellat cum rerum deleniti
    inventore molestiae ex.`,
  },
  {
    avatar: AVTR4,
    name: "James makovish",
    review: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima et
    aliquam sequi cupiditate dignissimos at vero nostrum dolor mollitia,
    ipsum assumenda consequuntur vitae repellat cum rerum deleniti
    inventore molestiae ex.`,
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Carousel
        className="container testimonials__container"
        infiniteLoop
        autoPlay
        swipeable
        emulateTouch
        interval={2000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        {testimonials.map(({ name, avatar, review }, index) => (
          <article
            className="testimonial"
            // spaceBetween={50}
            // slidesPerView={3}
            // centeredSlides
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
            key={index}
          >
            <div className="client__avatar">
              <img src={avatar} alt="avatar one" />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </article>
        ))}
      </Carousel>
    </section>
  );
}

export default Testimonials;
