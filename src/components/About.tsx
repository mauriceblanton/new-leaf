import React from 'react';

export function About() {
  return (
    <div id="about" className="bg-blue-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Dr. Sarah Mitchell
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Board-certified in Internal Medicine with over 15 years of experience in both clinical practice and nurse practitioner collaboration. I understand the unique challenges and opportunities in independent NP practice.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <span className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">1</span>
                <span className="ml-4 text-lg text-gray-700">15+ years of clinical experience</span>
              </div>
              <div className="flex items-center">
                <span className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">2</span>
                <span className="ml-4 text-lg text-gray-700">50+ successful NP collaborations</span>
              </div>
              <div className="flex items-center">
                <span className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">3</span>
                <span className="ml-4 text-lg text-gray-700">Available in multiple states</span>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <img
              className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Dr. Sarah Mitchell"
            />
          </div>
        </div>
      </div>
    </div>
  );
}