import React, { useState, useEffect } from 'react';
import '../App.scss';
import { Links } from '../Types/types';

function App() {

  const links: Links = [
    { name: 'Home', link: 'www.forethought.ai' },
    { name: 'About Us', link: 'www.forethought.ai/about-us' },
    { name: 'Products', link: 'www.forethought.ai/products' },
    { name: 'Careers', link: 'www.forethought.ai/careers' }
  ];

  const [lnks, setLnks] = useState<Links>(links);

  // useEffect(() => {
  //   let counter = 0;
  //   if (counter && counter === 0 || counter < 1) {
  //     if (counter === 0) {
  //       console.log('counter is 0', counter === 0);
  //       setLnks(links);
  //     }
  //   }
  // }); // TODO UNCOMMENT

  const createLinks = (): Links => {
    const items = []
    for (var i = 0; i < lnks.length; i++) {
      if (i === 0 || i === 1 || i === 3 || i === 4) {
        for (const property in links) {
          var obj = links[i];
          const { link, name } = obj;
          items.push(<li><a href={link}>{name}</a></li>)
        }
      }
    }

    var navLinks = items.reduce((unique: any, o: any) => {
      if (!unique.some((obj: any) => {
        return obj.props.children.props.children === o.props.children.props.children && obj.props.children.props.href === o.props.children.props.href
      })) {
        unique.push(o);
      }
      return unique;
    }, []);
    return navLinks;
  }

  return (
    <div className="Nav">
      {/* logo */}
      <ul className='Nav-links'>
        {createLinks()}
      </ul>
    </div>
  );
}

export default App;
