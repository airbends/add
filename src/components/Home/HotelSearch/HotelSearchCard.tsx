import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Users } from 'lucide-react';
import { DatePicker } from './DatePicker';

export function HotelSearchCard() {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle hotel search
    console.log({ location, checkIn, checkOut, guests });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-xl p-6 max-w-4xl mx-auto -mt-20 relative z-10"
    >
      <h3 className="text-2xl font-bold mb-6">Find Your Perfect Stay</h3>
      
      <form onSubmit={handleSearch} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Where are you going?"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          <DatePicker
            label="Check In"
            value={checkIn}
            onChange={setCheckIn}
            min={new Date().toISOString().split('T')[0]}
          />

          <DatePicker
            label="Check Out"
            value={checkOut}
            onChange={setCheckOut}
            min={checkIn || new Date().toISOString().split('T')[0]}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Guests
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="number"
                min="1"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center"
          >
            <Search className="h-5 w-5 mr-2" />
            Search Hotels
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}