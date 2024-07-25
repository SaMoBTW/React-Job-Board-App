import Link from "next/link";

function Header() {
  return (
    <header>
      <div className="flex items-center justify-between mx-auto">
        <Link href="/" className="font-bold text-xl">
          Job Board
        </Link>
        {/* Nav bar */}
        <nav className="flex gap-2 *:py-2 *:px-4 *:rounded-md">
          <Link className="bg-gray-200" href={"/Login"}>
            Login
          </Link>
          <Link className="bg-blue-600 text-white" href={"/Postjob"}>
            Post a job
          </Link>
        </nav>
        {/* Nav bar */}
      </div>
    </header>
  );
}

export default Header;
