import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Dr. Mitchell's collaboration has been instrumental in growing my practice. Her responsiveness and expertise are unmatched.",
    author: "Jessica Thompson, NP",
    role: "Family Nurse Practitioner",
    practice: "Thompson Family Care",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    quote: "The level of support and guidance I receive has given me the confidence to provide the best care for my patients.",
    author: "Michael Rodriguez, NP",
    role: "Adult-Gerontology Nurse Practitioner",
    practice: "Senior Wellness Center",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    quote: "Having Dr. Mitchell as my collaborating physician has made my transition to independent practice seamless.",
    author: "Sarah Chen, NP",
    role: "Psychiatric Nurse Practitioner",
    practice: "Mind & Wellness Clinic",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
  }
];

export function Testimonials() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by Leading Nurse Practitioners
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Hear from nurse practitioners who have successfully established their independent practices
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 text-lg italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div className="ml-4">
                    <div className="text-base font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                    <div className="text-sm text-blue-600">{testimonial.practice}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}