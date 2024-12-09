import React from 'react';
import { Shield, Award, CheckCircle, Clock } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: "Board Certified",
    description: "American Board of Internal Medicine",
    icon: Award
  },
  {
    id: 2,
    title: "State Licensed",
    description: "Multiple State Medical Licenses",
    icon: Shield
  },
  {
    id: 3,
    title: "HIPAA Compliant",
    description: "Secure Communication & Records",
    icon: CheckCircle
  },
  {
    id: 4,
    title: "24/7 Availability",
    description: "Round-the-clock Support",
    icon: Clock
  }
];

export function TrustIndicators() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {certifications.map((cert) => (
            <div key={cert.id} className="text-center">
              <div className="flex justify-center">
                <cert.icon className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{cert.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}