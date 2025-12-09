import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define all your pages with their specific meta tags
const pages = [
  {
    filename: 'about-us.html',
    title: 'About Us - Society Threads',
    description: 'Learn about Society Threads, a student-led brand dedicated to creating premium custom apparel for university societies. Quality, affordability, and community-driven designs by students, for students.',
    image: 'https://societythreads.co.uk/hero/hero1.jpg',
    url: 'https://societythreads.co.uk/about-us',
  },
  {
    filename: 'privacy-policy.html',
    title: 'Privacy Policy - Society Threads',
    description: 'Read our privacy policy to understand how Society Threads protects your personal information.',
    image: 'https://societythreads.co.uk/hero/hero1.jpg',
    url: 'https://societythreads.co.uk/privacy-policy',
  },
  {
    filename: 'terms-of-service.html',
    title: 'Terms of Service - Society Threads',
    description: 'Review our terms of service for using Society Threads services.',
    image: 'https://societythreads.co.uk/hero/hero1.jpg',
    url: 'https://societythreads.co.uk/terms-of-service',
  },
  {
    filename: 'refund-policy.html',
    title: 'Refund Policy - Society Threads',
    description: 'Learn about our refund and return policy for custom apparel orders.',
    image: 'https://societythreads.co.uk/hero/hero1.jpg',
    url: 'https://societythreads.co.uk/refund-policy',
  },
];

const generateHTML = (page) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/Logo.png" type="image/png" />
    
    <!-- Primary Meta Tags -->
    <title>${page.title}</title>
    <meta name="description" content="${page.description}" />
    <meta name="author" content="Society Threads" />
    
    <!-- Open Graph / Facebook / WhatsApp -->
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:image" content="${page.image}" />
    <meta property="og:image:secure_url" content="${page.image}" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${page.title}" />
    <meta property="og:url" content="${page.url}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Society Threads" />
    <meta property="og:locale" content="en_GB" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.description}" />
    <meta name="twitter:image" content="${page.image}" />
    <meta name="twitter:image:alt" content="${page.title}" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${page.url}" />
    
    <!-- Theme color -->
    <meta name="theme-color" content="#000000" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;

// Main execution
const distDir = path.join(__dirname, 'dist');

// Check if dist directory exists
if (!fs.existsSync(distDir)) {
  console.error('❌ Error: dist directory not found!');
  console.error('Please run "npm run build" first to create the dist directory.');
  process.exit(1);
}

console.log('🚀 Generating static HTML pages...\n');

// Generate each page
pages.forEach((page) => {
  const htmlContent = generateHTML(page);
  const filePath = path.join(distDir, page.filename);
  
  try {
    fs.writeFileSync(filePath, htmlContent);
    console.log(`✅ Generated: ${page.filename}`);
  } catch (error) {
    console.error(`❌ Error generating ${page.filename}:`, error.message);
  }
});

console.log('\n✨ All static pages generated successfully!');
console.log('📦 Ready to upload to GoDaddy!\n');