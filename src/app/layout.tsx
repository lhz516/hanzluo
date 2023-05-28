import './globals.css';
import Header from './header';

export const metadata = {
  icons: {
    icon: '/hanz-logo.png',
    shortcut: '/hanz-logo.png',
    apple: '/hanz-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-[100vh] flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
