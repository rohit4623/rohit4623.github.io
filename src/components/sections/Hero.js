import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';


const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
    <div className="container-sm">
      <div className={innerClasses}>
        <div className="hero-content">
          <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            Happy Birthday <span className="text-color-primary">Manali !</span>
          </h1>
          <div className="container-xs">
            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              Hey Love! it's your Birthday! &#127881;
            </p>
            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              Here's wishing you all the joy and happiness on your special day! &#x1F60A;
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="parallax"></div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;