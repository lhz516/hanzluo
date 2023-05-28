import ThemeToggle from '@/components/theme-toggle';

export default function Header() {
  return (
    <header className="flex justify-center dark:bg-slate-900">
      <nav className="container flex justify-between p-4">
        <img src="/hanz-logo.png" alt="Logo" width={44} height={44} />
        <ThemeToggle />
      </nav>
    </header>
  );
}
