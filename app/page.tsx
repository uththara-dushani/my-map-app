'use client'
import { MapPoc } from "./map/page";
import dynamic from 'next/dynamic';
import Link from 'next/link';

// const GoogleMap = dynamic(() => import('./google-map/page'),{ ssr: false});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Maps</h1>
    {/* <MapPoc/> */}
    {/* <GoogleMap/> */}
    <p className="mb-5">Click the link below to view the Google Map:</p>
      <Link href="/google-map" className="px-6 py-3 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-600 transition duration-300">
        Go to Google Map
      </Link>
    </div>
  );
}
