import Link from "next/link";

export const metadata = {
  title: "My Store",
  description: "Generated by create next app",
};

export default function TiendaLayout({ children }) {
  return (
    <>
      <nav>
        <h3>Seccion Tienda</h3>

        <ul>
          <li>
            <Link href="/tienda/categorias/computadoras"> laptops</Link>
          </li>
          <li>
            <Link href="/tienda/categorias/computadoras">digital</Link>
          </li>
        </ul>
      </nav>

      {children}
    </>
  );
}
