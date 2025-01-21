import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const languages = [
  { code: 'en', name: 'EN' },
  { code: 'tr', name: 'TR' }
];

export const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-2 p-2 rounded-lg bg-dark-800 border border-dark-700 hover:bg-dark-700 transition-colors">
      <Languages className="w-5 h-5 text-primary-purple" />
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="bg-transparent border-none focus:outline-none text-sm font-medium cursor-pointer text-gray-300"
      >
        {languages.map((lang) => (
          <option 
            key={lang.code} 
            value={lang.code}
            className="bg-dark-800 text-gray-300"
          >
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};