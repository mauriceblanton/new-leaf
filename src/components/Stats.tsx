import React from 'react';

const stats = [
  { id: 1, number: "15+", label: "Years Experience" },
  { id: 2, number: "50+", label: "NP Collaborations" },
  { id: 3, number: "1000+", label: "Chart Reviews" },
  { id: 4, number: "24/7", label: "Availability" }
];

export function Stats() {
  return (
    <div className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-4xl font-extrabold text-white">{stat.number}</div>
              <div className="mt-2 text-base font-medium text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}