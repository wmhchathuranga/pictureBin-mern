import { Link } from 'react-router-dom';

export default function MyGallery() {

    const images = [
        {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            width: 320,
            height: 174,
            // isSelected: true,
            caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            width: 320,
            height: 174,
            // isSelected: true,
            caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            width: 320,
            height: 174,
            // isSelected: true,
            caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            width: 320,
            height: 174,
            // isSelected: true,
            caption: "After Rain (Jeshu John - designerspics.com)",
        },

        {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            width: 320,
            height: 212,
            tags: [
                { value: "Ocean", title: "Ocean" },
                { value: "People", title: "People" },
            ],
            alt: "Boats (Jeshu John - designerspics.com)",
        },

        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            width: 320,
            height: 212,
        },
        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            width: 320,
            height: 212,
        },
        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            width: 320,
            height: 212,
        },
    ];

    return (
        <div className='flex justify-center h-5/6'>
            <div className='mt-5 w-5/6 flex flex-wrap overflow-scroll p-2 scroll-smooth'>
                {images.map((image, index) => {
                    let url = `/single/${index}`;
                    return (
                        <Link to={url} className='w-2/6 p-2'>
                            <img src={image.src} alt="" className='w-full rounded-lg hover:scale-105 transition ease-in' />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
