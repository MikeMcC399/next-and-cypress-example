import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <div>
      <Link href="/" style={linkStyle}>
        Home
      </Link>
      <Link href="/about" style={linkStyle}>
        About
      </Link>
    </div>
  );
}
