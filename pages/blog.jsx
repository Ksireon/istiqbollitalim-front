import '../app/globals.scss'
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Image from 'next/image';

// Array of image paths from the imgs folder
import { useState, useEffect } from 'react';

// Use relative imports for local images
const blogImages = [
    require('../imgs/IMG_6926.JPG'),
    require('../imgs/IMG_6946.JPG'),
    require('../imgs/IMG_6963.JPG'),
    require('../imgs/photo_2025-01-30_00-58-13.jpg'),
    require('../imgs/photo_2025-01-30_00-57-28.jpg'),
    require('../imgs/photo_2025-01-30_00-57-36.jpg'),
    require('../imgs/photo_2025-01-30_00-57-54.jpg'),
    require('../imgs/photo_2025-01-30_00-57-43.jpg'),
    require('../imgs/photo_2025-01-30_00-57-45.jpg'),
    require('../imgs/photo_2025-01-30_00-57-49.jpg'),
    require('../imgs/photo_2025-01-30_00-57-51.jpg'),
    require('../imgs/photo_2025-01-30_00-58-16.jpg')
];

export default function Blog() {
    return (
        <div>
            <Header />
            <div className="school-blog">
                <h1>Школьный блог</h1>
                <div className="container-blog">
                    {blogImages.slice(0, 4).map((src, index) => (
                        <div className="div" key={`blog1-${index}`}>
                            <Image 
                                src={src.default.src} 
                                alt={`Blog image ${index + 1}`} 
                                fill 
                                sizes="(max-width: 768px) 100vw, 380px"
                                priority
                                style={{ objectFit: 'cover' }} 
                            />
                        </div>
                    ))}
                </div>
                <div className="container-blog2">
                    {blogImages.slice(4, 8).map((src, index) => (
                        <div className="div" key={`blog2-${index}`}>
                            <Image 
                                src={src.default.src} 
                                alt={`Blog image ${index + 5}`} 
                                fill 
                                sizes="(max-width: 768px) 100vw, 380px"
                                priority
                                style={{ objectFit: 'cover' }} 
                            />
                        </div>
                    ))}
                </div>
                <div className="container-blog3">
                    {blogImages.slice(8, 12).map((src, index) => (
                        <div className="div" key={`blog3-${index}`}>
                            <Image 
                                src={src.default.src} 
                                alt={`Blog image ${index + 9}`} 
                                fill 
                                sizes="(max-width: 768px) 100vw, 380px"
                                priority
                                style={{ objectFit: 'cover' }} 
                            />
                        </div>
                    ))}
                </div>
            </div>
            
            <Footer />
        </div>
    );
}
