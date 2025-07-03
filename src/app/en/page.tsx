import Link from "next/link";

export default async function Page() {
  return (
    <html lang="en">
      <body>
        <div>
          <h1>Page EN</h1>
          <Link href="/" prefetch>
            ROOT
          </Link>{" "}
          <br />
          <Link href="/en" prefetch>
            EN
          </Link>
          <br />
          <Link href="/en/404">EN 404</Link>
        </div>
      </body>
    </html>
  );
}
