// 'use client'

// import React, { useState } from 'react'
// import Nav from './NavLinks'
// import MobileNav from './MobileNavLinks'

// export default function ResponsiveNav() {

//   const [showNav, setShowNav] = useState(false);
//   const showNavHandler = () => setShowNav(true);
//   const closeNavHandler = () => setShowNav(false);

//   return (
//     <div>
//         <Nav openNav={showNavHandler} />
//         <MobileNav nav={showNav} closeNav={closeNavHandler}/>
//     </div>
//   )
// }


'use client';

import React, { useState } from 'react';
import Nav from './NavLinks';
import MobileNav from './MobileNavLinks';

export default function ResponsiveNav() {
  const [showNav, setShowNav] = useState(false);

  const openNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div>
      <Nav openNav={openNavHandler} />
      <MobileNav nav={showNav} closeNav={closeNavHandler} />
    </div>
  );
}

