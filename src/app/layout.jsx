// src/app/layout.jsx
import '../styles/global.css'; // custom styles
import './globals.css'; // Tailwind styles (with @tailwind base/components/utilities)

export const metadata = {
  title: "Ahmed Raza || Portfolio",
  description: "Web Developer Portfolio Template that helps you showcase your work and skills",
  keywords: "BestPortfolio, HTML, CSS, JavaScript, Portfolio, FreeWebPortfolio",
  authors: [{ name: "Ahmed Raza" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* SEO and Social Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="huLhKeVIUKVJa3fLMnpkfIJV_-57Ag-6AtE96KRbSko" />

        {/* Open Graph (Facebook) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ahmedraza-portfolio.netlify.app/" />
        <meta property="og:title" content="Ahmed Raza || Portfolio" />
        <meta property="og:description" content="Web Developer Portfolio Template that helps you showcase your work and skills" />

        {/* Twitter Card */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ahmedraza-portfolio.netlify.app/" />
        <meta property="twitter:title" content="Ahmed Raza || Portfolio" />
        <meta property="twitter:description" content="Web Developer Portfolio Template that helps you showcase your work and skills" />

        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

        {/* Icons */}
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

        {/* Email.js */}
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                emailjs.init("user_LTfJaD1P0OGKt61H6CoDR");
              })();
            `,
          }}
        />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZBMW4X08JQ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZBMW4X08JQ');
            `,
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TDPRVM2');
            `,
          }}
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9004285372762378" crossOrigin="anonymous"></script>
      </head>
      <body>
        {/* Google Tag Manager NoScript Fallback */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TDPRVM2" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>

        {children}
      </body>
    </html>
  );
}
