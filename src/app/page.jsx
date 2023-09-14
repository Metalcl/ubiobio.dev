'use client';
import React, {useState, useEffect} from 'react';
import Header from '../components/Header';

export default function Home() {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen min-w-screen">
      <div className='focus' style={{ left: `${position.x - 20}px`, top: `${position.y - 15}px` }}></div>
      <Header />
      <Header />
      <Header />
    </div>
  );
}
