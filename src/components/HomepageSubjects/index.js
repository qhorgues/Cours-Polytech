import React from "react";
import Link from "@docusaurus/Link";

const ListSubject = [
  {
    id: "analyses-de-donnees",
    title: "Analyses de données",
    Svg: require("@site/static/img/data-analysis.svg").default,
    link: "/docs/category/analyses-de-donn%C3%A9es/maths",
  },
  {
    id: "maths",
    title: "Mathématiques",
    Svg: require("@site/static/img/math-ico.svg").default,
    link: "/docs/category/ensemble-des-chapitres",
  },
  {
    id: "info",
    title: "Programmation",
    Svg: require("@site/static/img/prog-ico.svg").default,
    link: "/docs/category/ensemble-des-langagues-de-programmation",
  },
  {
    id: "algo",
    title: "Algorithmique",
    Svg: require("@site/static/img/algo-ico.svg").default,
    link: "/docs/category/ensemble-des-chapitres-1",
  },
  {
    id: "archi_os",
    title: "Architecture & OS",
    Svg: require("@site/static/img/archi-ico.svg").default,
    link: "/docs/category/ensemble-des-chapitres-2",
  },
  {
    id: "en",
    title: "Anglais",
    Svg: require("@site/static/img/en-ico.svg").default,
    link: "/docs/category/all-english-chapters",
  },
  {
    id: "reseau",
    title: "Réseaux",
    Svg: require("@site/static/img/reseaux-ico.svg").default,
    link: "/docs/category/ensemble-des-chapitres-3",
  },
];

function Subject({ id, Svg, title, link }) {
  return (
    <article className="col col--6 margin-bottom--lg">
      <Link className="card padding--lg card-img-button" to={link}>
        <div className="scaling-svg-container">
          <Svg id={id} role="img" className="img-button" />
        </div>
        <div className="text-img-button">
          <h2 className="text--truncate">{title}</h2>
        </div>
      </Link>
    </article>
  );
}

export default function HomepageSubjects() {
  return (
    <article className="list_content margin-top--lg">
      <section className="list-item row">
        {ListSubject.map((props, idx) => (
          <Subject key={idx} {...props} />
        ))}
      </section>
    </article>
  );
}
