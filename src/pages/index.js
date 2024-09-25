import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import HomepageSubjects from '../components/HomepageSubjects';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Acceuil`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageSubjects />
      </main>
    </Layout>
  );
}
