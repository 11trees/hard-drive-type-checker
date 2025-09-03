import { useState, useEffect } from 'react';
import { HardDrive } from '@/data/type';
import { searchHardDrives } from '@/data/hardDriveDatabase';
import SearchForm from '@/components/SearchForm';
import DriveResult from '@/components/DriveResult';
import TechExplanation from '@/components/TechExplanation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import FeedbackButton from '@/components/FeedbackButton';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function Index() {
  const [searchResults, setSearchResults] = useState<HardDrive[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useLanguage();
  const { trackPageView, trackSearch } = useAnalytics();

  // Track initial page view
  useEffect(() => {
    trackPageView();
  }, [trackPageView]);

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    setIsLoading(true);
    
    // Simulate search delay for better UX
    setTimeout(() => {
      const results = searchHardDrives(query);
      setSearchResults(results);
      setIsLoading(false);
      
      // Track search with results count
      if (query.trim()) {
        trackSearch(query.trim(), results.length);
      }
    }, 300);
  };

  const handleFooterFeedbackClick = () => {
    // Track footer feedback click
    const { trackFeedbackClick } = useAnalytics();
    trackFeedbackClick();
    
    const subject = encodeURIComponent(t('feedback.email.subject'));
    const body = encodeURIComponent(t('feedback.email.body'));
    const mailtoLink = `mailto:sfijd@qq.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header with Language Switcher */}
        <div className="flex justify-between items-start mb-8">
          <div className="text-center flex-1">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
              {t('page.title')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('page.subtitle')}
            </p>
          </div>
          <div className="ml-4">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Search Section */}
        <div className="mb-8">
          <SearchForm onSearch={handleSearch} isLoading={isLoading} />
        </div>

        {/* Results Section */}
        {(searchQuery || searchResults.length > 0) && (
          <div className="mb-8">
            <DriveResult drives={searchResults} query={searchQuery} />
          </div>
        )}

        {/* Feedback Section - Show after search results or before tech explanation */}
        {(searchQuery || searchResults.length > 0) && (
          <div className="mb-8">
            <FeedbackButton />
          </div>
        )}

        {/* Separator */}
        <div className="mb-12">
          <Separator className="my-8" />
        </div>

        {/* Technology Explanation Section */}
        <div className="mb-8">
          <TechExplanation />
        </div>

        {/* Footer with additional feedback option */}
        <footer className="text-center text-sm text-gray-500 mt-12 pt-8 border-t">
          <p>
            {t('footer.disclaimer')}
          </p>
          <p className="mt-2">
            {t('footer.feedback')}
          </p>
              
        {/* Github PR suggestion */}
        <a
          href="https://github.com/11trees/hard-drive-type-checker"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline text-sm"
        >
          {t('feedback.submitPR')}
        </a>
        </footer>
      </div>
    </div>
  );
}