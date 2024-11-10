import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 mt-8">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-center space-x-2 text-sm">
          <span>Made with</span>
          <Heart className="h-3 w-3 text-red-500 fill-current" />
          <span>by</span>
          <span className="gradient-text font-semibold">Christy Maria Sebastian</span>
          <span className="text-gray-400">• Copyright © 2024</span>
        </div>
      </div>
    </footer>
  );
}