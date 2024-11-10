import React from 'react';

interface TranslationBoxProps {
  value: string;
  onChange?: (value: string) => void;
  placeholder: string;
  readOnly?: boolean;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

export default function TranslationBox({
  value,
  onChange,
  placeholder,
  readOnly = false,
  onKeyDown
}: TranslationBoxProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      readOnly={readOnly}
      rows={4}
      className="w-full bg-gray-700 text-white rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
    />
  );
}