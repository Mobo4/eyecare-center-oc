'use client';

import React from 'react';
import { MapPin } from 'lucide-react';
import { City } from '@/data/cities';

interface LocalServiceAreaProps {
  city: City;
  className?: string;
}

const LocalServiceArea: React.FC<LocalServiceAreaProps> = ({ city, className = '' }) => {
  return (
    <div className={`bg-gray-50 p-6 rounded-lg border border-gray-200 ${className}`}>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Serving {city.name}</h3>
      <div className="flex items-start gap-4 mb-4">
        <MapPin className="w-6 h-6 text-eyecare-blue flex-shrink-0 mt-1" />
        <div>
          <p className="font-semibold text-gray-900">{city.name}, California</p>
          <p className="text-gray-600 text-sm">{city.county}</p>
          <p className="text-gray-600 text-sm mt-1">Population: {city.population}</p>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-semibold text-gray-900 mb-2">Neighborhoods We Serve:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {city.neighborhoods.slice(0, 6).map((neighborhood, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-eyecare-blue rounded-full"></span>
              {neighborhood}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold text-gray-900 mb-2">Zip Codes:</h4>
        <p className="text-sm text-gray-600">{city.zipCodes.slice(0, 6).join(', ')}</p>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          {city.description}
        </p>
      </div>
    </div>
  );
};

export default LocalServiceArea;

