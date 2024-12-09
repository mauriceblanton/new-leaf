import React from 'react';
import { ClipboardCheck, Users, Phone, Shield } from 'lucide-react';

const services = [
  {
    title: 'Collaborative Practice Agreements',
    description: 'Comprehensive agreements tailored to your practice needs and state requirements.',
    icon: ClipboardCheck,
  },
  {
    title: 'Chart Reviews & Consultations',
    description: 'Regular chart reviews and availability for case consultations when needed.',
    icon: Users,
  },
  {
    title: '24/7 Availability',
    description: 'Round-the-clock support for urgent clinical questions and patient care needs.',
    icon: Phone,
  },
  {
    title: 'Legal Compliance',
    description: 'Ensuring all collaboration agreements meet state regulations and requirements.',
    icon: Shield,
  },
];

export function Services() {
  return (
    <div id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Comprehensive Collaboration Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Everything you need to establish and maintain your independent practice
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-600 ring-4 ring-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}