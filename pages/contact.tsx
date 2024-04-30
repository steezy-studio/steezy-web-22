import { GetStaticProps } from "next";
import getClient from "../apollo/client";
import Head from "../components/Head/Head";
import Human from "../components/Human/Human";
import Instagram from "../components/Icons/Instagram";
import Vimeo from "../components/Icons/Vimeo";
import Link from "../components/Link/Link";
import Navbar from "../components/Navbar/Navbar";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import { Large } from "../components/Typo/Large";
import { Nano } from "../components/Typo/Nano";
import { Small } from "../components/Typo/Small";
import strings from "../data/strings";
import { Areas } from "../generated/preprTypes";
import { GET_ALL_AREAS } from "../graphql/GetAllAreas";
import {
  ContactDetail,
  ContactDetails,
  ContactHero,
  ContactHeroCover,
  ContactInfo,
  ContactSocials,
  Founders,
  FoundersGrid,
  StyledContact,
} from "../pagestyles/StyledContact";
import RevealAnimation from "../components/RevealAnimation/RevealAnimation";

interface ContactProps {
  areas: Areas;
}

const Contact = ({ areas }: ContactProps) => {
  return (
    <>
      <Head
        pageName={"Contact"}
        ogTitle={"Contact"}
        ogDescription={strings.contactPage.hero.subHeader}
        ogImageSrc={"/images/contact-hero.jpg"}
      />
      <Navbar areas={areas.items} />

      <StyledContact>
        <ContactHero>
          <RevealAnimation>
            <ContactHeroCover
              src={"/images/contact-hero.jpg"}
              alt={"Contact"}
              height={1815}
              width={1089}
            />
          </RevealAnimation>
          <ContactInfo>
            <RevealAnimation delay={0.1}>
              <Large>Brno Office</Large>
            </RevealAnimation>
            <ContactDetails>
              <RevealAnimation delay={0.2}>
                <ContactDetail>
                  <Nano>BRNO OFFICE</Nano>
                  <Small className='break-lines'>
                    {`STEEZY, s.r.o.\nObilní trh 4, 602 00 Brno\nCzech Republic\n\nIČ: 07812558\nDIČ (VAT): CZ07812558`}
                  </Small>
                </ContactDetail>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <ContactDetail>
                  <Nano>Recruiment</Nano>
                  <Small>
                    We’re always looking for new talents
                    <br />
                    <br />
                    Send your portfolio to{" "}
                    <Link
                      href={"mailto: hello@steezy.studio"}
                      className='agrandir'
                    >
                      hello@steezy.studio
                    </Link>
                  </Small>
                </ContactDetail>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <ContactSocials>
                  <Instagram />
                  <Vimeo />
                </ContactSocials>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <ContactDetail className='align-end'>
                  <Nano>New Business & media</Nano>
                  <Small>
                    <Link
                      href={"mailto: hello@steezy.studio"}
                      className='agrandir'
                    >
                      hello@steezy.studio
                    </Link>
                    <br />
                    <Link href={"tel: +420728088996"} className='agrandir'>
                      (+420) 728 088 996
                    </Link>
                  </Small>
                </ContactDetail>
              </RevealAnimation>
            </ContactDetails>
          </ContactInfo>
        </ContactHero>
        <Founders>
          <SectionHeader header='Get in touch with co-founders' />
          <FoundersGrid>
            <Human
              index={0}
              name={"Jakub Maca"}
              position={"Co-founder & Art director"}
              roles={"Branding, webdesign, spatial design"}
              email={"jakub.maca@steezy.studio"}
              cover={{
                url: "/images/jakub-maca.jpg",
                alt: "Jakub Maca",
                width: 1058,
                heihgt: 896,
              }}
              phone='(+420) 728 088 996'
            />
            <Human
              index={1}
              name={"Tomáš Carda"}
              position={"Co-founder & Art director"}
              roles={"Campagns, video, motion design "}
              email={"tomas.carda@steezy.studio"}
              cover={{
                url: "/images/tomas-carda.jpg",
                alt: "Tomáš Carda",
                width: 1058,
                heihgt: 896,
              }}
              phone='(+420) 728 088 996'
            />
          </FoundersGrid>
        </Founders>
      </StyledContact>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = getClient();
  try {
    const data = await client.query({ query: GET_ALL_AREAS });
    return {
      props: { areas: data.data.Areas },
      revalidate: Number(process.env.REVALIDATE),
    };
  } catch (e) {
    return {
      props: { areas: null },
      revalidate: Number(process.env.REVALIDATE),
    };
  }
};

export default Contact;
