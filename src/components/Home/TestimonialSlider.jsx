import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoPlayer from '../VideoPlayer';

const TestimonialSlider = (props) => {
  return (
    <div key={props.index} className="row flex flex-row justify-around">
      <span className="col-md-4 text-right my-auto mx-auto">
        <p className="text-xl md:text-2xl font-italic text-gray-200">
          "{props.testimonial.text}"
        </p>
        <p className="mt-2 text-lg md:text-xl text-gray-200">
          ~ {props.testimonial.author},<br />
          {props.testimonial.institution}
        </p>
      </span>
      <span className="col-md-4 my-auto mx-auto">
        <VideoPlayer src={props.testimonial.videoSrc} />
      </span>
    </div>
  );
};

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
  };

  const testimonials = [
    {
      text: "They helped me craft my story and understand my real interest and passion, and now when I bring that to Hong Kong, I can network better I can meet with people better, and I am able to aggregate myself into a network that lends me a lot, and I recommend their service to everyone.",
      author: "Naman Tekriwal",
      institution: "Hong Kong Technological University(HKUST)",
      videoSrc: "/videos/1.mp4",
    },
    {
      text: "Our CEO Shifali and our head mentor and guide Rajiv’s reading suggestions sparked a journey of discovery for this aspiring scholar. Malhar’s story shows how personalized mentorship and the right literary companions can transform potential into extraordinary achievement. It makes a difference when you nurture the next generation of leaders, one book at a time!!",
      author: "Malhar Malik",
      institution: "University of Chicago",
      videoSrc: "/videos/2.mp4",
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="py-5 bg-blue-500">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-white font-bold text-center mb-8">Testimonials</h2>
        <div className="w-full max-w-screen-lg mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <TestimonialSlider testimonial={testimonial} index={index} />
            ))}
          </Slider>
        </div>
        <a href="/testimonials" className="mt-12 block text-center">
          <button className="btn btn-light text-lg">View All</button>
        </a>
      </div>
    </section>
  );
};

export default TestimonialsSection;
