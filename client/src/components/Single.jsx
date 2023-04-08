import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

export default function Single(props) {
  let params = useParams();
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
    <div>
      <div className="h-10"></div>
      <div className='flex justify-center h-full overflow-scroll'>
        <div className='w-3/6 flex justify-center'>
          <img src={images[params.index].src} alt="" className='w-5/6'/>
        </div>
      </div>
      <div className="h-5"></div>
      <div className="bottom-field h-16 flex justify-center">
        <div className="button-container h-full w-1/4 justify-around flex content-center flex-wrap">

          <button className="button shadow shadow-black dark:bg-lightGreen md:dark:bg-slate-800" onClick={() => document.getElementById('file')}>
            <span className="button-content text-slate-700 md:dark:text-white md:font-normal font-bold" style={{ fontFamily: "Inter" }}>
              Share &nbsp; <FontAwesomeIcon icon={faShareAlt} className="fa-sahre-alt" />
            </span>
          </button>
          <button className="button button-danger shadow shadow-black dark:bg-lightGreen md:dark:bg-slate-800" onClick={() => document.getElementById('file')}>
            <span className="button-content text-slate-700 md:dark:text-white md:font-normal font-bold" style={{ fontFamily: "Inter" }}>
              Delete &nbsp; <FontAwesomeIcon icon={faTrashCan} className="fa-trash-o" />
            </span>
          </button>
          {/* <button className='button bg-red-600 hover:text-white'>Delete <FontAwesomeIcon icon={faTrashCan} className='fa-trash-o' /></button> */}
        </div>
      </div>
    </div>
  )
}
