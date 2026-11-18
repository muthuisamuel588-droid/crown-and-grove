import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-5 text-center">
      <p className="text-7xl font-black text-accent-500/30">404</p>
      <h1 className="mt-4 text-3xl font-bold text-white">That page has moved on</h1>
      <p className="mt-4 text-slate-400">The page you were looking for is not here. Let's get you back to something useful.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-primary">Back to home</Link>
        <Link href="/contact" className="btn-outline">Contact us</Link>
      </div>
    </section>
  );
}
