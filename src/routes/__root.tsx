/// <reference types="fbtee/ReactTypes.d.ts" />
/// <reference types="vite/client" />
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { LocaleContext } from "fbtee";
import * as React from "react";
import AvailableLanguages from "~/components/AvailableLanguages";
import { DefaultCatchBoundary } from "~/components/DefaultCatchBoundary";
import { NotFound } from "~/components/NotFound";
import appCss from "~/styles/app.css?url";
import { seo } from "~/utils/seo";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      ...seo({
        title:
          "TanStack Start | Type-Safe, Client-First, Full-Stack React Framework",
        description: `TanStack Start is a type-safe, client-first, full-stack React framework. `,
      }),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
});

const clientLocales = [navigator.language, ...navigator.languages];

const loadLocale = async (locale: string) => {
  let result = {};

  if (locale === "ja_JP") {
    result = (await import("../translations/ja_JP.json")).default.ja_JP;
  }

  console.log(`Loading locale: ${locale}`, JSON.stringify(result, null, 2));

  return result;
};

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <LocaleContext
      availableLanguages={AvailableLanguages}
      clientLocales={clientLocales}
      loadLocale={loadLocale}
    >
      <html>
        <head>
          <HeadContent />
        </head>
        <body>
          {children}
          <TanStackRouterDevtools position="bottom-right" />
          <Scripts />
        </body>
      </html>
    </LocaleContext>
  );
}
