import React from 'react';
import LogoDict from './Types/types'
import './index.scss';

const Logo: React.FC<LogoDict> = ({ imageSource, altText, styleClass }: LogoDict) => {
  return <img className={styleClass} alt={altText} src={imageSource} />;
};

export default Logo;
