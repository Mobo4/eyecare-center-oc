import React from 'react';

const testimonials = [
  {
    quote: "The care I received at Eye Care Center OC was exceptional. Dr. Smith was thorough, patient, and explained everything clearly. The entire staff is friendly and professional. I wouldn't trust my eyes to anyone else.",
    name: 'Jessica M.',
    location: 'Mission Viejo, CA',
  },
  {
    quote: "I've been going to Eye Care Center OC for years for my glaucoma treatment. They have the most advanced technology, and I always feel confident that I'm getting the best possible care. Highly recommend!",
    name: 'David R.',
    location: 'Irvine, CA',
  },
  {
    quote: 'Finding an eye doctor who understands my complex condition was a challenge until I found this center. Their expertise in rare retinal diseases is unmatched. My vision has been stable for the first time in years.',
    name: 'Sarah L.',
    location: 'Newport Beach, CA',
  },
   {
    quote: "From the moment I walked in, I was impressed by the warm and welcoming atmosphere. The team made me feel comfortable, and the exam was the most comprehensive I've ever had. A truly five-star experience.",
    name: 'Michael B.',
    location: 'Laguna Niguel, CA',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">What Our Patients Say</h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            We are proud to provide top-tier ophthalmology services to the Orange County community. Here is what some of our patients have to say about their experience.
          </p>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <figure key={index} className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Exceptional Care and Expertise</h3>
                <p className="my-4">"{testimonial.quote}"</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>{testimonial.name}</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">{testimonial.location}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
