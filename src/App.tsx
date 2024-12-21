import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { DestinationList } from './pages/DestinationList';
import { DestinationDetail } from './pages/DestinationDetail';
import { SearchResults } from './pages/SearchResults';
import { Hotels } from './pages/Hotels';
import { Activities } from './pages/Activities';
import { Profile } from './pages/Profile';
import { Bookings } from './pages/Bookings';

export function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<DestinationList />} />
            <Route path="/destination/:id" element={<DestinationDetail />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/bookings" element={<Bookings />} />
          </Routes>
          <ScrollToTop />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;