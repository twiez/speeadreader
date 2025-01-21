import React from 'react';
import { calculateORP } from '../utils/textProcessor';

interface WordDisplayProps {
  word: string;
}

export const WordDisplay: React.FC<WordDisplayProps> = ({ word }) => {
  const orpIndex = calculateORP(word);
  
  return (
    <div className="text-4xl font-mono tracking-wide text-center">
      <span className="text-gray-100">
        {word.slice(0, orpIndex)}
      </span>
      <span className="text-primary-pink">
        {word[orpIndex]}
      </span>
      <span className="text-gray-100">
        {word.slice(orpIndex + 1)}
      </span>
    </div>
  );
};