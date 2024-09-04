import { GetStaticProps } from "next";
import { useContext, useEffect } from "react";
import getClient from "../apollo/client";
import Head from "../components/Head/Head";
import Human from "../components/Human/Human";
import Instagram from "../components/Icons/Instagram";
import Vimeo from "../components/Icons/Vimeo";
import Link from "../components/Link/Link";
import { NavbarContext } from "../components/Navbar/NavbarControls";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import { Large } from "../components/Typo/Large";
import { Micro } from "../components/Typo/Micro";
import strings from "../data/strings";
import { GET_ALL_AREAS } from "../graphql/GetAllAreas";
import {
  ContactCta,
  ContactDetails,
  ContactHero,
  ContactSocials,
  Founders,
  FoundersGrid,
  StyledContact,
} from "../pagestyles/StyledContact";

interface ContactProps {}

const Contact = ({}: ContactProps) => {
  const contactStrings = strings.contactPage;
  const { setNavbarHeader } = useContext(NavbarContext);
  useEffect(() => {
    setNavbarHeader(contactStrings.navbar.header);
  }, []);

  return (
    <>
      <Head
        pageName={"Contact"}
        ogTitle={"Contact"}
        ogDescription={strings.contactPage.hero.subHeader}
        ogImageSrc={"/images/contact-hero.jpg"}
      />

      <StyledContact>
        <ContactHero>
          <ContactDetails>
            <ContactCta>
              <Micro className='uppercase' as={"h1"}>
                Brno Office
              </Micro>
              <Micro className='break-lines'>
                {`STEEZY, s.r.o.\nObilní trh 4, 602 00 Brno\nCzech Republic\n\nIČ: 07812558\nDIČ (VAT): CZ07812558`}
              </Micro>
              <ContactSocials>
                <Instagram />
                <Vimeo />
              </ContactSocials>
            </ContactCta>
            <ContactCta>
              <Micro className='uppercase' as={"h2"}>
                Recruitment
              </Micro>
              <Micro>
                <span>
                  We’re always looking for new talents
                  <br />
                  Send your portfolio to{" "}
                </span>
                <Link href={"mailto: hello@steezy.studio"}>
                  hello@steezy.studio
                </Link>
              </Micro>
            </ContactCta>
          </ContactDetails>

          <ContactCta className='wide'>
            <Micro as={"h3"} className='uppercase'>
              New Business & media
            </Micro>
            <Large as={"span"}>
              <Link href={"mailto: hello@steezy.studio"}>
                hello@steezy.studio
              </Link>
              <br />
              <Link href={"tel: +420728088996"}>(+420) 728 088 996</Link>
            </Large>
          </ContactCta>
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
                url: "/images/jakub.webp",
                alt: "Jakub Maca",
                width: 1920,
                heihgt: 1440,
              }}
              phone='(+420) 728 088 996'
            />
            <Human
              index={1}
              name={"Tomáš Carda"}
              position={"Co-founder & Art director"}
              roles={"Campaigns, video, motion design "}
              email={"tomas.carda@steezy.studio"}
              cover={{
                url: "/images/tomas.webp",
                alt: "Tomáš Carda",
                width: 1920,
                heihgt: 1440,
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
