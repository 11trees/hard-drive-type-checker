import { Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function FeedbackButton() {
  const { t } = useLanguage();
  const { trackFeedbackClick } = useAnalytics();

  const handleFeedbackClick = () => {
    // Track feedback click event
    trackFeedbackClick();
    // Redirect to GitHub repo
    window.open('https://github.com/11trees/hard-drive-type-checker', '_blank');
  };

  return (
    <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <MessageSquare className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">
              {t('feedback.title')}
            </h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            {t('feedback.description')}
          </p>
        </div>
        <div className="ml-4">
          <Button 
            onClick={handleFeedbackClick}
            className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
            size="sm"
          >
            <Mail className="h-4 w-4" />
            {t('feedback.button')}
          </Button>
        </div>
      </div>
    </Card>
  );
}