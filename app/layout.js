import "./globals.css";

export const metadata = {
  title: "Vikas Baboria — Full-Stack Developer",
  description: "Portfolio of Vikas Baboria: React, Next.js, Node.js, Express and MongoDB projects with maximalist pop art & smooth transitions.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#a50f0c",
};

const init = `try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Shrikhand&family=Yatra+One&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: init }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
