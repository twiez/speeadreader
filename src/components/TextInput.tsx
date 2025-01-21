import React from 'react';
import { useTranslation } from 'react-i18next';
import { useStore } from '../store/useStore';

export const TextInput: React.FC = () => {
  const { t } = useTranslation();
  const setText = useStore((state) => state.setText);

  return (
    <textarea
      className="w-full h-32 p-4 rounded-lg border border-dark-700 bg-dark-800 text-gray-100 focus:ring-2 focus:ring-primary-purple focus:border-transparent resize-none text-sm font-mono"
      placeholder={t('placeholder')}
      onChange={(e) => setText(e.target.value)}
    />
  );
};