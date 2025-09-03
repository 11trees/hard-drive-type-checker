import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnalytics } from '@/hooks/useAnalytics';

interface SearchFormProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
}

export default function SearchForm({ onSearch, isLoading = false }: SearchFormProps) {
  const [query, setQuery] = useState('');
  const { t } = useLanguage();
  const { trackSearch } = useAnalytics();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleInputBlur = () => {
    // Trigger search when input loses focus
    if (query.trim()) {
      onSearch(query);
    } else {
      // Clear results if query is empty
      onSearch('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow Enter key to trigger search immediately
    if (e.key === 'Enter') {
      e.preventDefault();
      if (query.trim()) {
        onSearch(query);
      }
    }
  };

  // Enhanced onSearch function to include analytics
  const enhancedOnSearch = (searchQuery: string) => {
    onSearch(searchQuery);
    
    // Track search event if query is not empty
    if (searchQuery.trim()) {
      // We'll need to get results count from parent component
      // For now, we'll track the search event
      trackSearch(searchQuery.trim(), 0); // Results count will be updated in parent
    }
  };

  const handleSearchWithAnalytics = () => {
    if (query.trim()) {
      enhancedOnSearch(query);
    }
  };

  const handleBlurWithAnalytics = () => {
    if (query.trim()) {
      enhancedOnSearch(query);
    } else {
      onSearch('');
    }
  };

  const handleKeyDownWithAnalytics = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (query.trim()) {
        enhancedOnSearch(query);
      }
    }
  };

  return (
    <Card className="p-6 w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">{t('search.title')}</h2>
          <p className="text-gray-600">{t('search.subtitle')}</p>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder={t('search.placeholder')}
            value={query}
            onChange={handleInputChange}
            onBlur={handleBlurWithAnalytics}
            onKeyDown={handleKeyDownWithAnalytics}
            className="pl-10 text-lg py-3"
            disabled={isLoading}
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full py-3 text-lg"
          disabled={isLoading || !query.trim()}
          onClick={handleSearchWithAnalytics}
        >
          {isLoading ? t('search.searching') : t('search.button')}
        </Button>
        
        <div className="text-sm text-gray-500 text-center">
          <p>{t('search.support')}</p>
          <p className="mt-1">{t('search.example')}</p>
          <p className="mt-2 text-xs text-blue-600">
            💡 {t('language.chinese') === '中文' ? '提示：输入完成后点击其他区域或按回车键进行搜索' : 'Tip: Click outside the search box or press Enter to search'}
          </p>
        </div>
      </form>
    </Card>
  );
}