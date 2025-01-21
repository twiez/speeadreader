import React from 'react';
import { useTranslation } from 'react-i18next';

export const InfoSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="mt-12 p-6 bg-dark-800 rounded-lg border border-dark-700">
      <h2 className="text-lg font-semibold mb-4 bg-gradient-to-r from-primary-purple to-primary-pink text-transparent bg-clip-text">
        {t('about')}
      </h2>
      <p className="text-sm text-gray-400 leading-relaxed">
        {t('aboutText')}
      </p>
    </div>
  );
};