import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';

const ListMatiere = [
  {
    scale: 1.8,
    id: 'maths',
    title: 'Mathématiques',
    Svg: require('@site/static/img/math-ico.svg').default,
    link: '/docs/category/ensemble-des-chapitres',
  },
  {
    scale: 1.8,
    id: 'info',
    title: 'Informatiques',
    Svg: require('@site/static/img/info-ico.svg').default,
    link: '/docs/category/ensemble-des-chapitres-1',
  },
];


function Matiere({ scale, fill, id, Svg, title, link }) {

  // Custom code to change the fill color of the Cloud Arrow Up SVG
  // depending on if user is in dark/light mode
  const { colorMode } = useColorMode()
  if (colorMode === 'light') {
    fill = 'black' // Battleship Gray
  } else if (colorMode === 'dark') {
    fill = 'white'
  }
  return (
    <article className="col col--6 margin-bottom--lg">
      <Link className="card padding--lg cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module card-img-button"
        to={link}>
        <Svg transform={"scale(" + scale + ") translate(0 11)"} fill={fill} id={id} role="img" />
        <div className="text-img-button">
          <h2 className="text--truncate cardTitle_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module" style={{color: fill}}>
            {title}
          </h2>
        </div>
      </Link>
    </article>
  );
}

export default function HomepageFeatures() {
  return (
    <article className="list_content margin-top--lg">
      <section className="list-item row list_node_modules-@docusaurus-theme-classic-lib-theme-DocCategoryGeneratedIndexPage-styles-module">
        {ListMatiere.map((props, idx) => (
          <Matiere key={idx} {...props} />
        ))}
      </section>
    </article>
  );
}
