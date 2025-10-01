import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-6">
      <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">YOURALGO</h1>
      <p className="text-base sm:text-lg opacity-90 max-w-2xl">
        AI-native social media. Launching on iOS in ~2 weeks.
      </p>
      <div className="flex items-center gap-4">
        <span className="text-sm opacity-80">Get support and legal info:</span>
        <Link className="underline" href="/privacy">Privacy</Link>
        <Link className="underline" href="/terms">Terms</Link>
        <Link className="underline" href="/data-deletion">Data Deletion</Link>
        <Link className="underline" href="/contact">Contact</Link>
      </div>
    </div>
  );
}
