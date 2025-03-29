'use client';

import { useEffect, useState } from 'react';

export default function LoadingPage() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="relative w-20 h-20 flex items-center justify-center">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400 rounded-full"
                        style={{
                            transform: `rotate(${i * 45}deg) translateY(-30px)`,
                            animation: `fadeInOut 1.5s infinite ease-in-out ${i * 0.1}s`,
                        }}
                    ></div>
                ))}
            </div>
            <p className="mt-6 text-lg font-semibold">Բեռնում...</p>
            <style jsx>{`
                @keyframes fadeInOut {
                    0%, 100% { opacity: 0.2; }
                    50% { opacity: 1; }
                }
            `}</style>
        </div>
    );
}
