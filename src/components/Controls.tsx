import React from 'react';
import { useTranslation } from 'react-i18next';
import { useStore } from '../store/useStore';

export const Controls: React.FC = () => {
  const { t } = useTranslation();
  const { isPlaying, wordsPerMinute } = useStore((state) => state.reader);
  const togglePlayPause = useStore((state) => state.togglePlayPause);
  const setWordsPerMinute = useStore((state) => state.setWordsPerMinute);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">
          {t('wpmLabel')}
        </label>
        <div className="flex items-center gap-4">
          <div className="flex-1 flex items-center justify-between">
            {[60, 120, 180, 240, 300, 360].map((wpm) => (
              <span
                key={wpm}
                className={`text-sm font-mono ${
                  wordsPerMinute === wpm 
                    ? 'text-primary-purple' 
                    : 'text-gray-500'
                }`}
              >
                {wpm}
              </span>
            ))}
          </div>
        </div>
        <input
          type="range"
          min="60"
          max="360"
          step="60"
          value={wordsPerMinute}
          onChange={(e) => setWordsPerMinute(Number(e.target.value))}
          className="w-full accent-primary-purple"
        />
      </div>

      <button
        onClick={togglePlayPause}
        className="w-full py-3 px-4 bg-gradient-to-r from-primary-purple to-primary-pink hover:opacity-90 text-white rounded-lg transition-all font-medium"
      >
        {isPlaying ? t('stop') : t('start')}
      </button>
    </div>
  );
};