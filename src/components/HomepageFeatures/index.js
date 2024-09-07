import ImageButton from '@site/src/components/ImageButton';
import ButtonImageBox from '@site/src/components/ButtonImageBox';


export default function HomepageFeatures() {
  return (
    <ButtonImageBox>

      <ImageButton
        logo={"@site/img/math-ico.svg"}
        logo_dark={"@site/img/math-ico-dark.svg"}
        name={"Mathématiques"}
        link={"/docs/category/ensemble-des-chapitres"}
      />
      <ImageButton
        logo={"@site/img/info-ico.svg"}
        logo_dark={"@site/img/info-ico-dark.svg"}
        name={"Informatiques"}
        link={"/docs/category/ensemble-des-chapitres-1"}
      />
    </ButtonImageBox>
  );
}
