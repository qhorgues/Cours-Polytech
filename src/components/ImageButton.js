import ImageSwitcher from "./ImageSwitcher";
import Link from '@docusaurus/Link';

export default function ImageButton({ logo, logo_dark, name, link }) {
    return (
        <article className="colonne-img-button img-button-col col col--6 margin-bottom--lg">
            <Link className="card cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module card-img-button"
                to={link}>
                <ImageSwitcher lightImageSrc={logo} darkImageSrc={logo_dark}/>
                <div className="text-img-button">
                    <h2 className="text--truncate cardTitle_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
                        title={name}>
                        {name}
                    </h2>
                </div>
            </Link>
        </article>
    )
};