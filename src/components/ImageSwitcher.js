import React from 'react';
import { useColorMode } from '@docusaurus/theme-common'; //docs: https://v2.docusaurus.io/docs/2.0.0-alpha.69/theme-classic#usethemecontext

const ImageSwitcher = ({lightImageSrc, darkImageSrc}) => {
  const isDarkTheme = useColorMode().colorMode === 'dark';
  const path = isDarkTheme ? darkImageSrc : lightImageSrc;
  return (
    <img src={require({path}).default} decoding="async" loading="lazy" alt="logo" className="icone-img-button img_ev3q" ></img>
  )
}

export default ImageSwitcher;