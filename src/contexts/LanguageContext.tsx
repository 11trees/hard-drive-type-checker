import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'zh';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, string>> = {
  zh: {
    // Page titles and headers
    'page.title': '硬盘技术查询工具',
    'page.subtitle': '快速查询硬盘是PMR（垂直磁记录）还是SMR（叠瓦磁记录）技术，帮助您做出明智的购买决策',
    'search.title': '硬盘技术查询',
    'search.subtitle': '输入硬盘品牌或型号来查询是PMR还是SMR技术',
    
    // Search form
    'search.placeholder': '例如：WD Blue, Seagate Barracuda, ST2000DM008...',
    'search.button': '搜索硬盘',
    'search.searching': '搜索中...',
    'search.support': '支持搜索：品牌名、型号、系列名或容量',
    'search.example': '例如：Western Digital, WD Blue, ST2000DM008, 2TB',
    
    // Search results
    'results.found': '找到 {count} 个匹配结果',
    'results.notfound.title': '未找到匹配的硬盘',
    'results.notfound.subtitle': '请尝试搜索其他关键词，如品牌名（Western Digital, Seagate）或型号',
    
    // Technology types
    'tech.pmr': 'PMR - 垂直磁记录',
    'tech.smr': 'SMR - 叠瓦磁记录',
    'tech.pmr.full': 'Perpendicular Magnetic Recording',
    'tech.smr.full': 'Shingled Magnetic Recording',
    
    // Technology explanation
    'explanation.title': 'PMR vs SMR 技术对比',
    'explanation.subtitle': '了解两种硬盘记录技术的区别和特点',
    
    // PMR features
    'pmr.features.title': '技术特点：',
    'pmr.feature1': '磁道不重叠，数据独立存储',
    'pmr.feature2': '随机读写性能优秀',
    'pmr.feature3': '数据可直接覆盖写入',
    'pmr.feature4': '技术成熟稳定',
    'pmr.usage.title': '适用场景：',
    'pmr.usage1': '系统盘和程序安装',
    'pmr.usage2': '频繁读写的应用',
    'pmr.usage3': '数据库和虚拟机',
    'pmr.usage4': '游戏和专业软件',
    'pmr.recommendation': '✅ 推荐用于需要高性能的场景',
    
    // SMR features
    'smr.features.title': '技术特点：',
    'smr.feature1': '磁道部分重叠，提高存储密度',
    'smr.feature2': '顺序写入性能良好',
    'smr.feature3': '随机写入需要重写相邻数据',
    'smr.feature4': '成本较低，容量较大',
    'smr.usage.title': '适用场景：',
    'smr.usage1': '冷数据存储和备份',
    'smr.usage2': '媒体文件归档',
    'smr.usage3': '监控录像存储',
    'smr.usage4': '大容量数据仓库',
    'smr.warning': '⚠️ 不适合频繁随机写入场景',
    
    // Purchase advice
    'advice.title': '选购建议',
    'advice.pmr.title': '选择PMR硬盘：',
    'advice.pmr1': '作为系统盘使用',
    'advice.pmr2': '运行数据库或虚拟机',
    'advice.pmr3': '需要频繁修改文件',
    'advice.pmr4': '对性能要求较高',
    'advice.smr.title': '选择SMR硬盘：',
    'advice.smr1': '用于数据备份存储',
    'advice.smr2': '存储媒体文件',
    'advice.smr3': '预算有限需要大容量',
    'advice.smr4': '主要进行顺序读写',
    
    // Footer
    'footer.disclaimer': '数据来源于公开资料整理，仅供参考。购买前请确认官方规格说明。',
    'footer.feedback': '如有数据错误或需要添加新型号，欢迎反馈。',
    
    // Language switcher
    'language.chinese': '中文',
    'language.english': 'English',
    
    // Feedback
    'feedback.button': '数据反馈',
    'feedback.report': '报告问题',
    'feedback.title': '发现数据问题？',
    'feedback.description': '如果您发现硬盘信息有误或需要添加新型号，请点击下方按钮发送邮件反馈。',
    'feedback.email.subject': '硬盘数据反馈',
    'feedback.email.body': `您好！

我在使用硬盘技术查询工具时发现了以下问题：

硬盘型号：[请填写具体型号]
问题描述：[请详细描述发现的问题]
建议修改：[如有建议请填写]

我的联系方式：[可选]

感谢您的时间！

---
此邮件来自硬盘技术查询工具用户反馈`
  },
  en: {
    // Page titles and headers
    'page.title': 'Hard Drive Technology Query Tool',
    'page.subtitle': 'Quickly identify whether a hard drive uses PMR (Perpendicular Magnetic Recording) or SMR (Shingled Magnetic Recording) technology to make informed purchasing decisions',
    'search.title': 'Hard Drive Technology Query',
    'search.subtitle': 'Enter hard drive brand or model to check if it uses PMR or SMR technology',
    
    // Search form
    'search.placeholder': 'e.g.: WD Blue, Seagate Barracuda, ST2000DM008...',
    'search.button': 'Search Drive',
    'search.searching': 'Searching...',
    'search.support': 'Search by: Brand name, Model, Series, or Capacity',
    'search.example': 'e.g.: Western Digital, WD Blue, ST2000DM008, 2TB',
    
    // Search results
    'results.found': 'Found {count} matching results',
    'results.notfound.title': 'No matching hard drives found',
    'results.notfound.subtitle': 'Try searching with other keywords like brand names (Western Digital, Seagate) or model numbers',
    
    // Technology types
    'tech.pmr': 'PMR - Perpendicular Recording',
    'tech.smr': 'SMR - Shingled Recording',
    'tech.pmr.full': 'Perpendicular Magnetic Recording',
    'tech.smr.full': 'Shingled Magnetic Recording',
    
    // Technology explanation
    'explanation.title': 'PMR vs SMR Technology Comparison',
    'explanation.subtitle': 'Understand the differences and characteristics of both hard drive recording technologies',
    
    // PMR features
    'pmr.features.title': 'Technical Features:',
    'pmr.feature1': 'Non-overlapping tracks, independent data storage',
    'pmr.feature2': 'Excellent random read/write performance',
    'pmr.feature3': 'Data can be directly overwritten',
    'pmr.feature4': 'Mature and stable technology',
    'pmr.usage.title': 'Use Cases:',
    'pmr.usage1': 'System drives and program installation',
    'pmr.usage2': 'Frequent read/write applications',
    'pmr.usage3': 'Databases and virtual machines',
    'pmr.usage4': 'Gaming and professional software',
    'pmr.recommendation': '✅ Recommended for high-performance scenarios',
    
    // SMR features
    'smr.features.title': 'Technical Features:',
    'smr.feature1': 'Partially overlapping tracks, higher storage density',
    'smr.feature2': 'Good sequential write performance',
    'smr.feature3': 'Random writes require rewriting adjacent data',
    'smr.feature4': 'Lower cost, larger capacity',
    'smr.usage.title': 'Use Cases:',
    'smr.usage1': 'Cold data storage and backup',
    'smr.usage2': 'Media file archiving',
    'smr.usage3': 'Surveillance recording storage',
    'smr.usage4': 'Large capacity data warehouses',
    'smr.warning': '⚠️ Not suitable for frequent random write scenarios',
    
    // Purchase advice
    'advice.title': 'Purchase Recommendations',
    'advice.pmr.title': 'Choose PMR drives for:',
    'advice.pmr1': 'System drive usage',
    'advice.pmr2': 'Running databases or VMs',
    'advice.pmr3': 'Frequent file modifications',
    'advice.pmr4': 'High performance requirements',
    'advice.smr.title': 'Choose SMR drives for:',
    'advice.smr1': 'Data backup storage',
    'advice.smr2': 'Media file storage',
    'advice.smr3': 'Budget-limited large capacity needs',
    'advice.smr4': 'Mainly sequential read/write',
    
    // Footer
    'footer.disclaimer': 'Data compiled from public sources for reference only. Please confirm official specifications before purchase.',
    'footer.feedback': 'If you find data errors or need to add new models, feedback is welcome.',
    
    // Language switcher
    'language.chinese': '中文',
    'language.english': 'English',
    
    // Feedback
    'feedback.button': 'Data Feedback',
    'feedback.report': 'Report Issue',
    'feedback.title': 'Found a Data Issue?',
    'feedback.description': 'If you found incorrect hard drive information or need to add new models, please click the button below to send email feedback.',
    'feedback.email.subject': 'Hard Drive Data Feedback',
    'feedback.email.body': `Hello!

I found the following issue while using the Hard Drive Technology Query Tool:

Hard Drive Model: [Please specify the model]
Issue Description: [Please describe the issue in detail]
Suggested Changes: [Optional suggestions]

My Contact Information: [Optional]

Thank you for your time!

---
This email is from Hard Drive Technology Query Tool user feedback`
  }
};