import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ReaderConfig } from '../types';

interface Store {
  reader: ReaderConfig;
  setText: (text: string) => void;
  setWordsPerMinute: (wpm: number) => void;
  togglePlayPause: () => void;
  setCurrentWordIndex: (index: number) => void;
  resetReader: () => void;
}

export const useStore = create<Store>()(
  persist(
    (set) => ({
      reader: {
        wordsPerMinute: 300,
        text: '',
        isPlaying: false,
        currentWordIndex: 0,
      },
      setText: (text) =>
        set((state) => ({
          reader: { ...state.reader, text, currentWordIndex: 0, isPlaying: false },
        })),
      setWordsPerMinute: (wpm) =>
        set((state) => ({
          reader: { ...state.reader, wordsPerMinute: wpm },
        })),
      togglePlayPause: () =>
        set((state) => ({
          reader: { ...state.reader, isPlaying: !state.reader.isPlaying },
        })),
      setCurrentWordIndex: (index) =>
        set((state) => ({
          reader: { ...state.reader, currentWordIndex: index },
        })),
      resetReader: () =>
        set((state) => ({
          reader: { ...state.reader, currentWordIndex: 0, isPlaying: false },
        })),
    }),
    {
      name: 'speed-reader-storage',
    }
  )
);