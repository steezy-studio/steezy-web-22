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
import { Nano } from "../components/Typo/Nano";
import strings from "../data/strings";
import { GET_ALL_AREAS } from "../graphql/GetAllAreas";
import {
  ContactDetail,
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
            <ContactDetail>
              <Micro className='uppercase'>Brno Office</Micro>
              <Micro className='break-lines'>
                {`STEEZY, s.r.o.\nObilní trh 4, 602 00 Brno\nCzech Republic\n\nIČ: 07812558\nDIČ (VAT): CZ07812558`}
              </Micro>
              <ContactSocials>
                <Instagram />
                <Vimeo />
              </ContactSocials>
            </ContactDetail>
            <ContactDetail>
              <Nano className='uppercase'>Recruiment</Nano>
              <Nano>
                <span>
                  We’re always looking for new talents
                  <br />
                  Send your portfolio to{" "}
                </span>
                <Link href={"mailto: hello@steezy.studio"}>
                  hello@steezy.studio
                </Link>
              </Nano>
            </ContactDetail>
          </ContactDetails>

          <ContactDetail className='wide'>
            <Nano>New Business & media</Nano>
            <Large>
              <Link href={"mailto: hello@steezy.studio"}>
                hello@steezy.studio
              </Link>
              <br />
              <Link href={"tel: +420728088996"}>(+420) 728 088 996</Link>
            </Large>
          </ContactDetail>
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
