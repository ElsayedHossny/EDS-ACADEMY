import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-10">
      <div className="mx-auto max-w-4xl space-y-10">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Elsayed Hossny</h1>
          <p className="text-muted-foreground">
            Testing Next.js, Tailwind CSS v4 & shadcn/ui
          </p>
        </header>

        {/* Tailwind Test */}
        <section className="rounded-xl border bg-card p-6 space-y-4">
          <h2 className="text-xl font-semibold">Tailwind CSS Test</h2>

          <div className="flex flex-wrap gap-3">
            <div className="rounded-lg bg-red-500 p-4 text-white">
              Red Background
            </div>

            <div className="rounded-lg bg-blue-500 p-4 text-white">
              Blue Background
            </div>
          </div>
        </section>

        {/* shadcn Buttons */}
        <section className="rounded-xl border bg-card p-6 space-y-4">
          <h2 className="text-xl font-semibold">Button Variants</h2>

          <div className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>

        {/* Button Sizes */}
        <section className="rounded-xl border bg-card p-6 space-y-4">
          <h2 className="text-xl font-semibold">Button Sizes</h2>

          <div className="flex flex-wrap items-center gap-3">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>
      </div>
    </main>
  );
}
