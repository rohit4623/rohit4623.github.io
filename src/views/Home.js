import React, { useState } from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import { Button, ButtonGroup } from 'semantic-ui-react';
import PhotoGallery from '../components/sections/PhotoGallery';
import Timeline from '../components/sections/Timeline';
import SectionHeader from '../components/sections/partials/SectionHeader';
import ModalComponent, { exampleReducer } from '../components/sections/Modal';

const sectionHeader = {
  title: 'Best Wishes to you !',
  paragraph: 'On this special day, May all your wishes come true, and may you get everything what you want in life ! Because you are so special, may this special day of your life be filled with very special things that life can offer. Happy birthday, sweetheart ! :)'
};

const Home = () => {

  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: true,
    dimmer: "blurring",
  })
  const { open, dimmer } = state

  return (
    <>
      {/* <ModalComponent open={open} dimmer={dimmer} /> */}
      <Hero className="illustration-section-01" />
      <br />
      <div className="container-sm has-top-divider pt-16 pb-32">
      <SectionHeader data={sectionHeader} className="center-content" />
      </div>
      <div className="container-sm has-top-divider pt-16 pb-32">
        <PhotoGallery />
      </div>
      {/* <FeaturesTiles className="pt-16"/> */}
      {/* <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" /> */}
      <div className="container-sm has-top-divider pt-16 pb-32">
        <Timeline />
      </div>
      {/* <Testimonial topDivider /> */}
    </>
  );
}

export default Home;