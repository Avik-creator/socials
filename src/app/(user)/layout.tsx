import Logo from "@/components/Logo";
import Header from "./_components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      {children}
      <div className="mt-20 mb-8 grid place-content-center text-center">
        <Logo />
        <p className="text-xs">
          Made with ❤️ by <a href="https://github.com/Avik-creator">Avik</a>
        </p>
      </div>
    </main>
  );
}
