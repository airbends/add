import type { Hotel } from '../types';

export const hotels: Hotel[] = [
  {
    id: 'taj-mumbai',
    name: 'Taj Mahal Palace',
    location: 'Mumbai, Maharashtra',
    imageUrl: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80',
    rating: 4.9,
    reviewCount: 3421,
    pricePerNight: 25000,
    amenities: ['Spa', 'Pool', 'Fine Dining', 'Sea View'],
    description: 'Luxury 5-star hotel overlooking the Gateway of India.'
  },
  {
    id: 'itc-agra',
    name: 'ITC Mughal Agra',
    location: 'Agra, Uttar Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80',
    rating: 4.7,
    reviewCount: 2156,
    pricePerNight: 12000,
    amenities: ['Spa', 'Pool', 'Multiple Restaurants', 'Taj Mahal View'],
    description: 'Luxury resort with views of the Taj Mahal.'
  },
  {
    id: 'leela-delhi',
    name: 'The Leela Palace New Delhi',
    location: 'New Delhi, Delhi',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
    rating: 4.8,
    reviewCount: 1987,
    pricePerNight: 20000,
    amenities: ['Rooftop Pool', 'Spa', 'Fine Dining', 'Butler Service'],
    description: 'Modern palace hotel in the Diplomatic Enclave.'
  },
  {
    id: 'taj-lake-udaipur',
    name: 'Taj Lake Palace',
    location: 'Udaipur, Rajasthan',
    imageUrl: 'https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&q=80',
    rating: 4.9,
    reviewCount: 1876,
    pricePerNight: 35000,
    amenities: ['Lake View', 'Heritage Property', 'Spa', 'Royal Butler'],
    description: 'Luxury hotel floating on Lake Pichola.'
  }
];