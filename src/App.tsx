import React, { useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import { languages, Language } from "./types/languages";
import LanguageSelector from "./components/LanguageSelector";
import TranslationBox from "./components/TranslationBox";
import LoadingSpinner from "./components/LoadingSpinner";
import Hero from "./components/Hero";
import Features from "./components/Features";
import { translateText } from "./services/translationService";
import Footer from "./components/Footer";

export default function App() {
  const [sourceLanguage, setSourceLanguage] = useState<Language>(languages[0]);
  const [targetLanguage, setTargetLanguage] = useState<Language>(languages[1]);
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;

    setIsTranslating(true);
    setError(null);

    try {
      const result = await translateText(
        sourceText,
        sourceLanguage.code,
        targetLanguage.code
      );
      setTranslatedText(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Translation failed");
      setTranslatedText("");
    } finally {
      setIsTranslating(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      handleTranslate();
    }
  };

  const swapLanguages = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-800 rounded-xl shadow-xl p-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
            <LanguageSelector
              selected={sourceLanguage}
              languages={languages}
              onChange={setSourceLanguage}
              label="Translate from"
            />

            <div className="flex items-end justify-center md:justify-start">
              <button
                onClick={swapLanguages}
                className="md:mt-6 p-2 hover:bg-gray-700 rounded-lg transition-colors"
                disabled={isTranslating}
              >
                <ArrowLeftRight className="text-gray-400" />
              </button>
            </div>

            <LanguageSelector
              selected={targetLanguage}
              languages={languages}
              onChange={setTargetLanguage}
              label="Translate to"
            />
          </div>

          <div className="space-y-4">
            <TranslationBox
              value={sourceText}
              onChange={setSourceText}
              placeholder="Enter text to translate..."
              onKeyDown={handleKeyDown}
            />

            <div className="flex flex-col items-center gap-2">
              <button
                onClick={handleTranslate}
                disabled={isTranslating || !sourceText.trim()}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isTranslating ? <LoadingSpinner /> : "Translate"}
              </button>
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <p className="text-xs text-gray-400">
                Press Ctrl/Cmd + Enter to translate
              </p>
            </div>

            <TranslationBox
              value={translatedText}
              placeholder="Translation will appear here..."
              readOnly
            />
          </div>
        </div>

        <Features />
      </div>
      <Footer />
    </div>
  );
}
