import Link from 'next/link';

const Logo = () => (
  <Link href="/" className="flex items-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8 text-white"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z" />
    </svg>
    <span className="text-2xl font-bold text-white">Shop</span>
  </Link>
);

export default Logo;
