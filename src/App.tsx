import React, { useEffect } from 'react';
import { useStore } from './store/useStore';
import { WordDisplay } from './components/WordDisplay';
import { Controls } from './components/Controls';
import { TextInput } from './components/TextInput';
import { Header } from './components/Header';
import { InfoSection } from './components/InfoSection';
import { Footer } from './components/Footer';
import { splitIntoWords, calculateDelay } from './utils/textProcessor';
import { useTranslation } from 'react-i18next';
import './i18n/config';

export default function App() {
  const { t } = useTranslation();
  const { text, isPlaying, wordsPerMinute, currentWordIndex } = useStore((state) => state.reader);
  const setCurrentWordIndex = useStore((state) => state.setCurrentWordIndex);
  const words = splitIntoWords(text);

  useEffect(() => {
    let interval: number;
    
    if (isPlaying && words.length > 0) {
      interval = window.setInterval(() => {
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
      }, calculateDelay(wordsPerMinute));
    }

    return () => clearInterval(interval);
  }, [isPlaying, wordsPerMinute, words.length, currentWordIndex]);

  return (
    <div className="min-h-screen bg-dark-900 text-gray-100 font-sans">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Header />
        
        <div className="space-y-8">
          <div className="space-y-2">
            <label className="block text-sm font-medium mb-1 text-gray-300">
              {t('text')}
            </label>
            <TextInput />
          </div>
          
          <div className="h-32 flex items-center justify-center bg-dark-800 rounded-lg border border-dark-700">
            {words.length > 0 && <WordDisplay word={words[currentWordIndex]} />}
          </div>
          
          <Controls />
          
          <InfoSection />
          
          <Footer />
        </div>
      </div>
    </div>
  );
}