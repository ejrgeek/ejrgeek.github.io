document.addEventListener('DOMContentLoaded', () => {
    const translations = {};
  
    const getDefaultLanguage = () => {
      const browserLang = navigator.language || navigator.userLanguage;
      return browserLang.startsWith('pt') ? 'pt' : 'en';
    };
  
    const loadLanguage = async (lang) => {
      try {
        const response = await fetch(`/i18n/${lang}.json`);
        translations[lang] = await response.json();
        applyTranslations(lang);
      } catch (error) {
        console.error('Erro ao carregar o arquivo de idioma:', error);
      }
    };
  
    const applyTranslations = (lang) => {
      Object.entries(translations[lang]).forEach(([key, value]) => {
        const element = document.getElementById(key);
        if (element) {
          if (key === "cvLink") {
            element.href = value;
          } else {
            element.innerHTML = value;
          }
        }
      });
    };
  
    const defaultLanguage = getDefaultLanguage();
    loadLanguage(defaultLanguage);
  });
  