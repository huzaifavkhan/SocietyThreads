import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  url?: string;
  keywords?: string[];
}

const SEO: React.FC<SEOProps> = ({
  title = 'Society Threads - Custom Apparel for University Societies',
  description = 'Society Threads provides premium custom apparel for university societies. Design and order high-quality hoodies, t-shirts, and more for your student organization.',
  imageUrl = '/hero/hero1.jpg',
  url = 'https://societythreads.co.uk',
  keywords = [
    'custom apparel',
    'university societies',
    'student organizations',
    'custom hoodies',
    'custom t-shirts',
    'society merchandise',
    'university clothing',
    'student apparel',
    'varsity apparel',
    'college society merch',
    'student union clothing',
    'society hoodies',
    'university club apparel',
    'society committee merchandise',
    'freshers week clothing',
    'society branded apparel'
  ]
}) => {
  const currentUrl = url;
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `${url}${imageUrl}`;

  // Organization JSON-LD structured data
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Society Threads',
    url: url,
    logo: `${url}/Logo.png`,
    description: 'Custom Apparel for University Societies',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'en'
    },
    sameAs: [
      'https://www.instagram.com/society._threads/',
      'https://www.tiktok.com/@society.threads',
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Open Graph / Facebook / WhatsApp - ORDER MATTERS! */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Society Threads" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta httpEquiv="content-language" content="en-GB" />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;