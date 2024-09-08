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


function Matiere({ scale, id, Svg, title, link }) {

  return (
    <article className="col col--6 margin-bottom--lg">
      <Link className="card padding--lg card-img-button"
        to={link}>
        <Svg transform={"scale(" + scale + ") translate(0 11)"} id={id} role="img" />
        <div className="text-img-button">
          <h2 className="text--truncate">
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
      <section className="list-item row">
        {ListMatiere.map((props, idx) => (
          <Matiere key={idx} {...props} />
        ))}
      </section>
    </article>
  );
}
