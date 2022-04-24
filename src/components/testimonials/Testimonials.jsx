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
    review: ` It is a distinct pleasure for me to recommend Mohamed services to any and all interested parties. 
    He has been professional, comprehensive and competent throughout the process of our working together. 
    `,
  },
  {
    avatar: AVTR2,
    name: "James makovish",
    review: ` 
    This guy is a true professional in every aspect. 
    He listened to my needs, offered relevant options, was prompt to respond to all of my questions, and most importantly, he never BS’d me about anything
.`,
  },
  {
    avatar: AVTR3,
    name: "Melvin Alen",
    review: `The reaction to our new web site has been overwhelmingly positive; as one commented the site is “FANTASTIC. 
    The same can be said for our view of Mohamed's work for us...”`,
  },
  {
    avatar: AVTR4,
    name: "Shatta Wale",
    review: `Since having our new website built by Bouthouri Mohamed, 
    we have seen a 200% increase in the number of online contact forms being filled out and returned to us`,
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
        dynamicHeight={false}
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
