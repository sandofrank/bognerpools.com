import Link from 'next/link';

export default function Header() {
  return (
    <div className="bg-blue-600 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-sm">
          <div className="font-bold">Paul Bogner Pools Inc.</div>
          <div className="flex space-x-4">
            <a href="tel:9516885543" className="hover:underline">
              (951) 688-5543
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
