import React, { useState, useEffect } from 'react';
import * as mysql from 'mysql';

// Components
import Button from '../Components/Button'
import Logo from '../Components/Logo';

// Types
import { Links } from '../Types/types';

import './App.scss';

function App() {

  const links: Links = [
    { name: 'Home', link: 'www.forethought.ai' },
    { name: 'About Us', link: 'www.forethought.ai/about-us' },
    { name: 'Products', link: 'www.forethought.ai/products' },
    { name: 'Careers', link: 'www.forethought.ai/careers' }
  ];

  const [navLinks, setNavLinks] = useState<Links>(links);

  // useEffect(() => {
  //   let counter = 0;
  //   if (counter && counter === 0 || counter < 1) {
  //     if (counter === 0) {
  //       console.log('counter is 0', counter === 0);
  //       setLnks(links);
  //     }
  //   }
  // });

  const createLinks = (): Links => {
    const items = []
    for (var i = 0; i < navLinks.length; i++) {
      if (i === 0 || i === 1 || i === 3 || i === 4) {
        for (const property in links) {
          var obj = links[i];
          const { link, name } = obj;
          items.push(<li><a href={link}>{name}</a></li>)
        }
      }
    }

    var navigationLinks = items.reduce((unique: any, o: any) => {
      if (!unique.some((obj: any) => {
        return obj.props.children.props.children === o.props.children.props.children && obj.props.children.props.href === o.props.children.props.href
      })) {
        unique.push(o);
      }
      return unique;
    }, []);
    return navigationLinks;
  }

  return (
    <div className="Nav">
      <Logo
        styleClass={'Logo'}
        altText={'Forethought Logo'}
        imageSource={'/src/Assets/icon-ft-opaque-green.svg'}
      />
      <ul className='Nav-links'>
        {createLinks().map(link => {
          return <Button btnTxt={link}
            btnLnk={(link as any).props.children.props.href}
            btnCls='Nav-links'
            myfunction={() => { }} />
        })}
      </ul>
    </div>
  );
}

export default App;
