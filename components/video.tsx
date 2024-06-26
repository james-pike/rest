        //video.tsx

        import React from 'react';

        export default function Video() {
            
            return (
                <div className="relative">
                    <video
                        src={"/video/almonte1.mp4"}
                        loop
                        autoPlay
                        muted
                        style={{ opacity: 0.75, height: '20vh' }}
                        className='object-cover w-full h-full lg:px-40 '
                    >
                    </video>
                    <div className="absolute top-1/2 left-1/4 transform -translate-x-1/4 -translate-y-1/2 z-20 space-y-3">
                        <h1 className="text-6xl text-white font-bold">Menu</h1>
                        <p className="text-2xl text-white">This content should display the Wellington Menu</p>
                    </div>
                </div>
            );
        }