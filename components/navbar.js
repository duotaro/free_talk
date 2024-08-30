import Link from "next/link";

export default function Navigation({  }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
            <Link href={`/`} className="navbar-brand">アリゾナ学園補習授業校</Link>
            <p className="text-secondary me-auto mb-2 mb-lg-0 ms-lg-4"><small>アリゾナ学園スクールは日本の学校文化を学べる週一の補習授業校です。</small></p>
        </div>
    </nav>
  );
}