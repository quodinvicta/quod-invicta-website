
"use client"
import dynamic from 'next/dynamic';

const AwesomeTestimonial = dynamic(() => import('react-awesome-testimonials'), {
  ssr: false,
});


// const Testimonials = () => {
//   return (
//       <>
//       {/* <h1>Testimonials</h1> */}
//       <AwesomeTestimonial
//         testimonials={[
//       {
//         name: "Eva",
//         company: "Amazon",
//         img_src: "https://i.ibb.co/84h8svL/eight.png",
//         review:
//           "Lorem 1 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
//       },
//       {
//         name: "Evelyn",
//         company: "Netflix",
//         img_src: "https://i.ibb.co/k8Jnx61/five.png",
//         review:
//           "Lorem 2 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
//       },
//       {
//         name: "Jack",
//         company: "Google",
//         img_src: "https://i.ibb.co/Yj8pMF8/four.png",
//         review:
//           "Lorem 3 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
//       },
//       {
//         name: "Sam",
//         company: "Microsoft",
//         img_src: "https://i.ibb.co/ph360c6/nine.png",
//         review:
//           "Lorem 4 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
//       },
//       {
//         name: "Abigail",
//         company: "Netflix",
//         img_src: "https://i.ibb.co/gwNmrLn/one.png",
//         review:
//           "Lorem 5 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
//       },
//       {
//         name: "Mortal",
//         company: "Google",
//         img_src: "https://i.ibb.co/6PF0kMg/seven.png",
//         review:
//           "Lorem 6 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
//       },
//       {
//         name: "Bruno",
//         company: "Netflix",
//         img_src: "https://i.ibb.co/7G9rtfD/six.png",
//         review:
//           "Lorem 7 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
//       },
//       {
//         name: "Vernoica",
//         company: "Facebook",
//         img_src: "https://i.ibb.co/pXMvXhK/three.png",
//         review:
//           "Lorem 8 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
//       },
//       {
//         name: "Astro",
//         company: "Netflix",
//         img_src: "https://i.ibb.co/WzJD5sj/two.png",
//         review:
//           "Lorem 9 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
//       },
//     ]}
//      />
//     </>
//   );
// };

// export default Testimonials;


// import React from "react";

// import Marquee from "react-fast-marquee";

// const Testimonials = () => (
//   <Marquee gradient={true} gradientColor={"0 0 0"}>
//     <div><h1>1</h1></div>
//     <div><h1>1</h1></div>
//     <div><h1>1</h1></div>
//   </Marquee>
// );

// export default Testimonials;

import React from 'react';
import Marquee from 'react-fast-marquee';
import styled from 'styled-components';

const CardContainer = styled.div`
  ${'' /* background-color: white; */}
  padding: 20px;
  border-radius: 10px;
  display: inline-block;
  margin-right: 20px;
  max-width: 300px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const CardTitle = styled.h3`
  margin-top: 10px;
  font-size: 1.2rem;
`;

const CardContent = styled.p`
  margin-top: 10px;
  font-size: 0.9rem;
`;

const Card = () => (
  <CardContainer>
    <CardImage src="https://via.placeholder.com/300x200" alt="Card Image" />
    <CardTitle>Card Title</CardTitle>
    <CardContent>
      Card content goes here. This is a sample text to demonstrate the content
      section of the card.
    </CardContent>
  </CardContainer>
);

const GradientMarquee = styled(Marquee)`
  
  ${'' /* padding: 10px; */}
  ${'' /* border-radius: 10px; */}
`;

const Testimonials = () => (
  <GradientMarquee gradient={true} gradientColor={['#1F2544']} pauseOnHover={true} speed={50}>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </GradientMarquee>
);

export default Testimonials;