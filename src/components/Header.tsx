import { Link } from '@tanstack/react-router';
import { Heart, Activity, Droplets, Moon, BarChart3 } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              HealthTracker
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors font-medium">
              <Activity className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>
            <Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors font-medium">
              <BarChart3 className="w-4 h-4" />
              <span>Steps</span>
            </Link>
            <Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors font-medium">
              <Droplets className="w-4 h-4" />
              <span>Water</span>
            </Link>
            <Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors font-medium">
              <Moon className="w-4 h-4" />
              <span>Sleep</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}