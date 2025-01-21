import React from 'react';
import { Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 py-6 border-t border-dark-700">
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>Created by twiez</span>
        <a
          href="https://github.com/twiez"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-primary-purple transition-colors"
        >
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
};