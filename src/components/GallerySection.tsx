import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export const GallerySection = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [imageIndex, setImageIndex] = useState<number>(0)


    const handleImageClick = (imageId: number) => {
        setIsOpen(true)
        setImageIndex(imageId - 1)
    }

    type ImageProps = {
        id: number
        src: string
        large?: boolean
        animation?: string
        animationDelay?: number
    }

    const images: ImageProps[] = [
        {
            id: 1,
            src: "assets/images/gallery_1.jpg",
            animation: "fade-right",
            animationDelay: 200
        },
        {
            id: 2,
            src: "assets/images/gallery_2.jpg",
            animation: "fade-right",
        },
        {
            id: 3,
            src: "assets/images/gallery_5.jpg",
            large: true,
            animation: "fade-right",
            animationDelay: 400
        },
        {
            id: 4,
            src: "assets/images/gallery_6.jpg",
            large: true,
            animation: "fade-left",
            animationDelay: 200
        },
        {
            id: 5,
            src: "assets/images/gallery_3.jpg",
            animation: "fade-left",
            animationDelay: 400
        },
        {
            id: 6,
            src: "assets/images/gallery_4.jpg",
            animation: "fade-left",
            animationDelay: 500
        }
    ]

    return (
        <>
            <Lightbox
                open={isOpen}
                index={imageIndex}
                close={() => setIsOpen(false)}
                slides={images}
                plugins={[Fullscreen, Zoom, Counter, Thumbnails]}
            />
            <section className='mt-16 lg:px-16 px-4 gallery-section'>
                <h2 className="text-green mb-6 lg:text-5xl text-3xl font-bold uppercase">
                    Referenciák
                </h2>
                <div className="container mx-auto py-2 lg:px-32 lg:pt-24 p-4">
                    <div className="-m-1 flex flex-wrap md:-m-2">
                        <div className="flex lg:w-1/2 flex-wrap justify-center">
                            {images.slice(0, images.length / 2).map((image, index) => (
                                <div
                                    key={index}
                                    className={`p-1 md:p-2 drop-shadow-md cursor-pointer ${image.large ? 'w-full' : 'lg:w-1/2'}`}
                                    onClick={() => handleImageClick(image.id)}
                                    data-aos={image.animation}
                                    data-aos-delay={image.animationDelay}
                                >
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src={image.src}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex lg:w-1/2 flex-wrap justify-center">
                            {images.slice(images.length / 2).map((image, index) => (
                                <div
                                    key={index}
                                    className={`p-1 md:p-2 drop-shadow-md cursor-pointer ${image.large ? 'w-full' : 'lg:w-1/2'}`}
                                    onClick={() => handleImageClick(image.id)}
                                    data-aos={image.animation}
                                    data-aos-delay={image.animationDelay}
                                >
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src={image.src}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}