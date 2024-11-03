import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashScreen from './pages/Splash/SplashScreen';
import OnboardingScreen from './pages/Onboarding/OnboardingScreen';
import AuthScreen from './pages/Auth/AuthScreen';
import MainLayout from './layouts/MainLayout';
import HomeScreen from './pages/Home/HomeScreen';
import SearchScreen from './pages/Search/SearchScreen';
import UploadScreen from './pages/Upload/UploadScreen';
import NotificationsScreen from './pages/Notifications/NotificationsScreen';
import ProfileScreen from './pages/Profile/ProfileScreen';
import VideoDetailScreen from './pages/VideoDetail/VideoDetailScreen';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-md mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl bg-white shadow-lg">
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/onboarding" element={<OnboardingScreen />} />
            <Route path="/auth" element={<AuthScreen />} />
            <Route path="/main" element={<MainLayout />}>
              <Route index element={<HomeScreen />} />
              <Route path="search" element={<SearchScreen />} />
              <Route path="upload" element={<UploadScreen />} />
              <Route path="notifications" element={<NotificationsScreen />} />
              <Route path="profile" element={<ProfileScreen />} />
              <Route path="video/:id" element={<VideoDetailScreen />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
