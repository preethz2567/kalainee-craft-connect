import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const languages = [
  { code: 'hi', name: 'हिंदी', english: 'Hindi' },
  { code: 'bn', name: 'বাংলা', english: 'Bengali' },
  { code: 'te', name: 'తెలుగు', english: 'Telugu' },
  { code: 'mr', name: 'मराठी', english: 'Marathi' },
  { code: 'ta', name: 'தமிழ்', english: 'Tamil' },
  { code: 'gu', name: 'ગુજરાતી', english: 'Gujarati' },
  { code: 'kn', name: 'ಕನ್ನಡ', english: 'Kannada' },
  { code: 'ml', name: 'മലയാളം', english: 'Malayalam' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ', english: 'Punjabi' },
  { code: 'or', name: 'ଓଡ଼ିଆ', english: 'Odia' },
  { code: 'as', name: 'অসমীয়া', english: 'Assamese' },
  { code: 'en', name: 'English', english: 'English' }
];

const LanguageSelect = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const navigate = useNavigate();

  const handleLanguageSelect = (langCode: string) => {
    setSelectedLanguage(langCode);
    localStorage.setItem('selectedLanguage', langCode);
  };

  const handleContinue = () => {
    if (selectedLanguage) {
      navigate('/portal-select');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle pattern-mandala flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-primary rounded-full flex items-center justify-center animate-glow">
              <span className="text-xl md:text-2xl font-bold text-primary-foreground">कला</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display bg-gradient-primary bg-clip-text text-transparent">
              KalaiNee
            </h1>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground font-cultural mb-2">
            भारतीय कलाकारों का डिजिटल घर
          </p>
          <p className="text-sm md:text-base text-muted-foreground">
            Choose your preferred language | अपनी भाषा चुनें
          </p>
        </div>

        {/* Language Selection Grid */}
        <Card className="p-6 md:p-8 bg-card/80 backdrop-blur-sm border-border/50 shadow-cultural">
          <h2 className="text-xl md:text-2xl font-display text-center mb-6 md:mb-8 text-foreground">
            भाषा चुनें | Select Language
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 mb-8">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`p-3 md:p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                  selectedLanguage === lang.code
                    ? 'border-primary bg-primary/10 shadow-warm'
                    : 'border-border hover:border-primary/50 bg-card/50'
                }`}
              >
                <div className="text-center">
                  <div className="text-lg md:text-xl font-cultural mb-1 text-foreground">
                    {lang.name}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    {lang.english}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Continue Button */}
          <div className="text-center">
            <Button
              onClick={handleContinue}
              disabled={!selectedLanguage}
              className="px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-cultural bg-gradient-primary hover:shadow-warm transition-all duration-300 disabled:opacity-50"
            >
              आगे बढ़ें | Continue
            </Button>
          </div>
        </Card>

        {/* Cultural Pattern */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm md:text-base">
            <span className="w-8 h-px bg-gradient-primary"></span>
            <span className="font-cultural">सांस्कृतिक विरासत को जोड़ना</span>
            <span className="w-8 h-px bg-gradient-primary"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelect;