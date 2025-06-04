import Link from "next/link";

export default function Home() {
  return (
    <Link
      href="/employees"
      className='btn btn-primary'
      >
    Employees List
    </Link>
  );
}