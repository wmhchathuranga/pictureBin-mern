import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faShareAlt } from '@fortawesome/free-solid-svg-icons';

export class Single extends Component {
  render() {
    const images = [
      {
        original: 'https://picsum.photos/id/1018/1000/600/'
      }]
    return (
      <div>
        <div className="top-field h-16"></div>
        <div className='flex justify-center'>
          <div className='w-3/6 flex justify-center'>
            <ImageGallery items={images} showFullscreenButton={true} />
          </div>
        </div>
        <div className="bottom-field h-16 flex justify-center">
          <div className="button-container h-full w-1/4 justify-around flex content-center flex-wrap">
            {/* <button className='button bg-lightGreen'>Share</button> */}
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
}

export default Single