import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <div className="max-w-xl space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {siteConfig.name}
        </h1>
        <p className="text-lg font-medium text-zinc-600 dark:text-zinc-400">
          {siteConfig.role}
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          📍 {siteConfig.author.address.addressLocality}, {siteConfig.author.address.addressRegion}, {siteConfig.author.address.addressCountry}
        </p>
      </div>
    </main>
  );
}
