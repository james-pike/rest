        //video.tsx

        import React from 'react';

        export default function Video() {
            return (
                <div className="relative">
                    <video
                        src={"/video/wellington.mp4"}
                        loop
                        autoPlay
                        muted
                        style={{ opacity: 0.75, height: '40vh' }}
                        className='object-cover w-full h-full border-b-2'
                    >
                    </video>
                    <div className="absolute top-1/2 left-1/4 transform -translate-x-1/4 -translate-y-1/2 z-20 space-y-3">
                        <h1 className="text-6xl text-white font-bold">Joe's Italian Kitchen</h1>
                        <p className="text-2xl text-white">Now serving Almonte, Nepean & Wellington</p>
                    </div>
                </div>
            );
        }