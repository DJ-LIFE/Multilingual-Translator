import React from "react";
import { Language } from "../types/languages";
import { IoIosArrowDown } from "react-icons/io";

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
  label,
}: LanguageSelectorProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-sm text-gray-400">{label}</label>
      <div className="relative flex items-center bg-gray-700 text-white rounded-lg py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <select
          value={selected.code}
          onChange={(e) => {
            const language = languages.find(
              (lang) => lang.code === e.target.value
            );
            if (language) onChange(language);
          }}
          className="w-full appearance-none bg-gray-700 focus:outline-none px-4"
        >
          {languages.map((language) => (
            <option key={language.code} value={language.code}>
              {language.name}
            </option>
          ))}
        </select>
        <div className="absolute right-3 pointer-events-none">
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
}
