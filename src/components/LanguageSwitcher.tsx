import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const { trackLanguageChange } = useAnalytics();

  const toggleLanguage = () => {
    const newLanguage = language === 'zh' ? 'en' : 'zh';
    const oldLanguage = language;
    
    // Track language change event
    trackLanguageChange(oldLanguage, newLanguage);
    
    setLanguage(newLanguage);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2"
    >
      <Globe className="h-4 w-4" />
      {language === 'zh' ? t('language.english') : t('language.chinese')}
    </Button>
  );
}