import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 mt-8">
      <div className="max-w-7xl mx-auto px-3 py-3 sm:px-4 sm:py-4">
        <div className="flex flex-wrap items-center justify-center text-xs sm:text-sm gap-1 sm:gap-2 text-center">
          <span className="inline-flex items-center">
            <span>Made with</span>
            <Heart className="h-3 w-3 sm:h-3 sm:w-3 text-red-500 fill-current mx-1" />
            <span>by</span>
          </span>
          <span className="gradient-text font-semibold">Christy Maria Sebastian</span>
          <span className="text-gray-400 hidden sm:inline">•</span>
          <span className="text-gray-400">Copyright © 2024</span>
        </div>
      </div>
    </footer>
  );
}
