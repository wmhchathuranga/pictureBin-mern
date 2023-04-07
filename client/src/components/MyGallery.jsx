import React, { Component } from 'react'
import { Gallery } from "react-grid-gallery";
import { Link } from 'react-router-dom';

export class MyGallery extends Component {


    render() {
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
            // {
            //     src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            //     width: 1020,
            //     height: 1174,
            //     // isSelected: true,
            //     caption: "After Rain (Jeshu John - designerspics.com)",
            // },
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
        ];

        return (
            <div className='flex justify-center'>
                <div className='mt-5 w-5/6'>
                    <Link to={"/single"}>
                        <Gallery images={images} margin={5} tagStyle={{ borderRadius: 5 }} enableImageSelection={false} />
                    </Link>
                </div>
            </div>
        )
    }
}

export default MyGallery