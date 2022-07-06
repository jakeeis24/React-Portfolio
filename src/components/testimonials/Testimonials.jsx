// import React from "react";
// import "./testimonials.css";
// import Avt1 from "../../assets/avatar1.jpg";
// import Avt2 from "../../assets/avatar2.jpg";
// import Avt3 from "../../assets/avatar3.jpg";
// import Avt4 from "../../assets/avatar4.jpg";

// // import Swiper core and required modules
// import { Pagination, Navigation } from "swiper";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// const data = [
//   {
//     avatar: Avt1,
//     name: "Seth Barnes",
//     review:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis molestiae consequatur deleniti! Amet quod consequatur ex repellat esse vel temporibus sunt, inventore voluptatibus optio sint at hic laudantium accusantium possimus.",
//   },
//   {
//     avatar: Avt2,
//     name: "Charlie Eissler",
//     review:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis molestiae consequatur deleniti! Amet quod consequatur ex repellat esse vel temporibus sunt, inventore voluptatibus optio sint at hic laudantium accusantium possimus.",
//   },
//   {
//     avatar: Avt3,
//     name: "Kim Eissler",
//     review:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis molestiae consequatur deleniti! Amet quod consequatur ex repellat esse vel temporibus sunt, inventore voluptatibus optio sint at hic laudantium accusantium possimus.",
//   },
//   {
//     avatar: Avt4,
//     name: "James Notary",
//     review:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis molestiae consequatur deleniti! Amet quod consequatur ex repellat esse vel temporibus sunt, inventore voluptatibus optio sint at hic laudantium accusantium possimus.",
//   },
// ];
// const Testimonials = () => {
//   return (
//     <section id="testimonials">
//       <h5>Review From Peers</h5>
//       <h2>Testimonials</h2>

//       <Swiper
//         className="container testimonials__container"
//         // install Swiper modules
//         modules={[Pagination, Navigation]}
//         spaceBetween={40}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//       >
//         {data.map(({ avatar, name, review }, index) => {
//           return (
//             <SwiperSlide key={index} className="testimonial">
//               <div className="client__avatar">
//                 <img src={avatar} alt={`Avatar ${index + 1}`} />
//               </div>
//               <h5>{name}</h5>
//               <small className="client__review">{review}</small>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </section>
//   );
// };

// export default Testimonials;
