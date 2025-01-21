export interface ReaderConfig {
  wordsPerMinute: number;
  text: string;
  isPlaying: boolean;
  currentWordIndex: number;
}

export interface Word {
  text: string;
  orpIndex: number;
}