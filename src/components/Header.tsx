import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './LanguageSelector';

export const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-2xl font-semibold bg-gradient-to-r from-primary-purple to-primary-pink text-transparent bg-clip-text">
        {t('title')}
      </h1>
      <LanguageSelector />
    </div>
  );
};