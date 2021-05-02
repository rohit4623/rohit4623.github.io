import React from 'react'
import SectionHeader from './partials/SectionHeader';

const sectionHeader = {
  title: 'Our Gallery',
  paragraph: 'Some of our pictures :)'
};


const PhotoGallery = () => (
   <>
  <SectionHeader data={sectionHeader} className="center-content" />
  <div class="gallery-row"> 
    <div class="gallery-column">
      <img className="gallery-1 zoom" />
      <img className="gallery-2 zoom" />
      <img className="gallery-3 zoom" />
      <img className="gallery-13 zoom" />
      <img className="gallery-20 zoom" />
    </div>
    <div class="gallery-column">
      <img className="gallery-5 zoom" />
      <img className="gallery-4 zoom" />
      <img className="gallery-6 zoom" />
      <img className="gallery-7 zoom" />
      <img className="gallery-14 zoom" />
      <img className="gallery-19 zoom" />
    </div>
    <div class="gallery-column">
      <img className="gallery-10 zoom" />
      <img className="gallery-11 zoom" />
      <img className="gallery-12 zoom" />
      <img className="gallery-15 zoom" />
      <img className="gallery-21 zoom" />
    </div>
    <div class="gallery-column">
      <img className="gallery-9 zoom" />
      <img className="gallery-8 zoom" />
      <img className="gallery-16 zoom" />
      <img className="gallery-17 zoom" />
      <img className="gallery-18 zoom" />
    </div>
  </div>
  </>
);

export default PhotoGallery;