import Link from "next/link";

export default function Title({ title, link = null }) {
    return (
      <h2 className="text-2xl font-black sm:text-3xl text-center">
          {link && (
            <Link href={link}>{title}</Link>
          )}
          {!link && (
            <>{title}</>
          )}
      </h2>
    );
}
