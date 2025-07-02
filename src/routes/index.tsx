import { createFileRoute } from "@tanstack/react-router";
import { fbt, useLocaleContext } from "fbtee";
import AvailableLanguages from "~/components/AvailableLanguages";

export const Route = createFileRoute("/")({
  component: Home,
  ssr: false,
});

const LocaleSwitcher = () => {
  const { locale, setLocale } = useLocaleContext();

  return (
    <div>
      <a
        className="cursor-pointer text-pink-500 underline select-none hover:no-underline dark:text-pink-400"
        onClick={() => setLocale(locale === "ja_JP" ? "en_US" : "ja_JP")}
      >
        {AvailableLanguages.get(locale)}
      </a>
    </div>
  );
};

function Home() {
  const greeting = fbt("Hello, World!", "Greeting");

  console.log("Greeting key:", greeting.key);

  return (
    <div className="p-2">
      <h1 className="text-4xl">
        <fbt desc="Greeting">Welcome</fbt>
      </h1>
      {greeting}
      <LocaleSwitcher />
    </div>
  );
}
