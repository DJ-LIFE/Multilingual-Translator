import React from 'react';
import { Language } from '../types/languages';

interface LanguageSelectorProps {
  selected: Language;
  languages: Language[];
  onChange: (language: Language) => void;
  label: string;
}

export default function LanguageSelector({ 
  selected, 
  languages, 
  onChange, 
  label 
}: LanguageSelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-400">{label}</label>
      <select
        value={selected.code}
        onChange={(e) => {
          const language = languages.find(lang => lang.code === e.target.value);
          if (language) onChange(language);
        }}
        className="bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    </div>
  );
}