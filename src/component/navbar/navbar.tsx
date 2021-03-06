import { useState, useEffect } from 'react';
import * as React from 'react';
import Image from 'next/image'
import Router, { useRouter } from 'next/router';
import Modal_window from './modal';
import 'bootstrap/dist/css/bootstrap.css';
import github from "../../img/github.png";
import linkedin from "../../img/lk.png";
// import { motion } from 'framer-motion';
import shortid from 'shortid'
import { motion, useViewportScroll, useAnimation, useTransform } from "framer-motion";

export function Navbar(props: any) {
  const router = useRouter()
  const { scrollYProgress } = useViewportScroll();
  const controls = useAnimation();
  // const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  const [hookedYPostion, setHookedYPosition] = React.useState(0);
  // const Variants = {
  //   enhaut: {
  //     backgroundColor: 'rgb(49,55,62)',
  //     height: '50px'
  //   },
  //   pasenhaut: {
  //     backgroundColor: '#f00',
  //     height: '40px',
  //     // position: '-webkit-sticky',
  //     position: 'sticky',
  //   }
  // };
  useEffect(() => {
    console.log("rr");
    scrollYProgress.onChange(v => setHookedYPosition(v));
    if (hookedYPostion > 0) {
      controls.start("pasenhaut")

      console.log("pasenhaut");
    }
    if (hookedYPostion === 0) {
      controls.start("enhaut")
      console.log("enahut");

    }
  }, [scrollYProgress]);

  return (
    <>

      <nav className="navbar-perso">

        {/* {hookedYPostion} */}
        <ul className="navbar-nav-perso">{props.children}</ul>
      </nav>
    </>
  );
}


{/* <motion.div
      key={shortid.generate()}
      initial="enhaut"
      animate={controls}
      variants={{
        enhaut: {
          backgroundColor: 'rgb(49,55,62)',
          height: '50px',
          position: 'sticky',
        },
        pasenhaut: {
          backgroundColor: '#f00',
          height: '40px',
          // position: '-webkit-sticky',
          position: 'sticky',
        }
      }}
    transition={{ type: "spring", duration: 1 }}
    > */}

// export default function Lien(props: any) {
//   const router = useRouter()
//   // console.log(router.pathname);
//   return (
//     <>
//       {
//         router.pathname === '/planet' ?

//           <span className='navtext' onClick={() => Router.push('/')} > ???  Suivi de campagne vaccinatoire</span>
//           :

//           <span className='navtext' onClick={() => Router.push('/planet')} > ???  Dashboard exoplan??te</span>

//       }</>)
// }

export function NavItem(props: any) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter()

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    console.log(open);
    setOpen(!open);
  }

  let hover: string = ""
  let hover_planet: string = ""
  hover_planet = router.pathname === '/planet' ? "nav-item noselect nav_item_selected" : "nav-item noselect"
  hover = router.pathname === '/planet' ? "nav-item noselect" : "nav-item noselect nav_item_selected"
  return (
    <>
      <li >
        <div>
          aa
          <a style={{ margin: "auto", top: "55%", bottom: "45%" }} href="https://github.com/amapic/app">
            <Image
              width={35}
              height={35}
              src={github} />
          </a>

          <a style={{ margin: "auto", top: "50%", bottom: "50%" }} href="https://www.linkedin.com/in/amaurypichat/">
            <Image
              width={30}
              height={30}
              src={linkedin} />
          </a>
        </div>
      </li>
      {router.pathname === '/planet' ?
        <>
          <li className={hover_planet}>
            <span className="navtext" onClick={() => Router.push('/planet')}>Dashboard Exoplan??te</span>
          </li>
          <li className={hover}>
            <span className="navtext" onClick={() => Router.push('/')}>Suivi campagne de vaccination</span>
          </li>
        </>
        :
        <>
          <li className={hover}>
            <span className="navtext" onClick={() => Router.push('/')}>Suivi campagne de vaccination</span>
          </li>
          <li className={hover_planet}>
            <span className="navtext" onClick={() => Router.push('/planet')}>Dashboard Exoplan??te</span>
          </li>

        </>
      }



      {/* <li className={hover}>
        <span className="navtext" onClick={() => Router.push('/detail_dev')}>Temps de d??veloppement</span>
      </li> */}


      {/* <li className="nav-item noselect">

        <a href="#" onClick={handleOpen}>

          <span className='navtext'>Temps de d??veloppement</span>
        </a>

        <Modal_window
          show={open}
          onHide={handleClose}
        />
      </li> */}

    </>
  );
}



