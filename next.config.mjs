/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: {
      buildActivity: false, // Отключение индикатора загрузки билдов
      autoPrerender: false, // Отключение уведомлений о Static Routes
      reactStrictMode: false,
    },
  };
  
  export default nextConfig;