import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertCircle, Info } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TechExplanation() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('explanation.title')}</h2>
        <p className="text-gray-600">{t('explanation.subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* PMR Card */}
        <Card className="p-6 border-green-200 bg-green-50">
          <div className="flex items-center space-x-2 mb-4">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <Badge className="bg-green-100 text-green-800 border-green-200">
              {t('tech.pmr')}
            </Badge>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            {t('tech.pmr.full')}
          </h3>
          
          <div className="space-y-3 text-sm">
            <div>
              <h4 className="font-medium text-gray-900 mb-1">{t('pmr.features.title')}</h4>
              <ul className="space-y-1 text-gray-700 ml-4">
                <li>• {t('pmr.feature1')}</li>
                <li>• {t('pmr.feature2')}</li>
                <li>• {t('pmr.feature3')}</li>
                <li>• {t('pmr.feature4')}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-1">{t('pmr.usage.title')}</h4>
              <ul className="space-y-1 text-gray-700 ml-4">
                <li>• {t('pmr.usage1')}</li>
                <li>• {t('pmr.usage2')}</li>
                <li>• {t('pmr.usage3')}</li>
                <li>• {t('pmr.usage4')}</li>
              </ul>
            </div>
            
            <div className="bg-green-100 p-3 rounded-lg">
              <p className="text-green-800 font-medium">
                {t('pmr.recommendation')}
              </p>
            </div>
          </div>
        </Card>

        {/* SMR Card */}
        <Card className="p-6 border-orange-200 bg-orange-50">
          <div className="flex items-center space-x-2 mb-4">
            <AlertCircle className="h-6 w-6 text-orange-600" />
            <Badge className="bg-orange-100 text-orange-800 border-orange-200">
              {t('tech.smr')}
            </Badge>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            {t('tech.smr.full')}
          </h3>
          
          <div className="space-y-3 text-sm">
            <div>
              <h4 className="font-medium text-gray-900 mb-1">{t('smr.features.title')}</h4>
              <ul className="space-y-1 text-gray-700 ml-4">
                <li>• {t('smr.feature1')}</li>
                <li>• {t('smr.feature2')}</li>
                <li>• {t('smr.feature3')}</li>
                <li>• {t('smr.feature4')}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-1">{t('smr.usage.title')}</h4>
              <ul className="space-y-1 text-gray-700 ml-4">
                <li>• {t('smr.usage1')}</li>
                <li>• {t('smr.usage2')}</li>
                <li>• {t('smr.usage3')}</li>
                <li>• {t('smr.usage4')}</li>
              </ul>
            </div>
            
            <div className="bg-orange-100 p-3 rounded-lg">
              <p className="text-orange-800 font-medium">
                {t('smr.warning')}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Additional Info */}
      <Card className="p-6 bg-blue-50 border-blue-200">
        <div className="flex items-start space-x-3">
          <Info className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('advice.title')}</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <h4 className="font-medium text-gray-900 mb-1">{t('advice.pmr.title')}</h4>
                <ul className="space-y-1 ml-4">
                  <li>• {t('advice.pmr1')}</li>
                  <li>• {t('advice.pmr2')}</li>
                  <li>• {t('advice.pmr3')}</li>
                  <li>• {t('advice.pmr4')}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">{t('advice.smr.title')}</h4>
                <ul className="space-y-1 ml-4">
                  <li>• {t('advice.smr1')}</li>
                  <li>• {t('advice.smr2')}</li>
                  <li>• {t('advice.smr3')}</li>
                  <li>• {t('advice.smr4')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}