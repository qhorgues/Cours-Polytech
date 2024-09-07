import React from 'react';
import { useColorMode } from '@docusaurus/theme-common'; //docs: https://v2.docusaurus.io/docs/2.0.0-alpha.69/theme-classic#usethemecontext
import useBaseUrl from '@docusaurus/useBaseUrl';


const ImageSwitcher = ({lightImageSrc, darkImageSrc}) => {
  const isDarkTheme = useColorMode().colorMode === 'dark';
  const path = (isDarkTheme ? darkImageSrc : lightImageSrc);
  return (
    <img src={useBaseUrl({path})} decoding="async" loading="lazy" alt="logo" className="icone-img-button img_ev3q" ></img>
  )
}

export default ImageSwitcher;