import { GetStaticProps } from "next";
import client from "../apollo/client";
import Head from "../components/Head/Head";
import Hero from "../components/Hero/Hero";
import Link from "../components/Link/Link";
import Navbar from "../components/Navbar/Navbar";
import strings from "../data/strings";
import { Areas } from "../generated/types";
import { GET_ALL_AREAS } from "../graphql/GetAllAreas";
import { StyledContact } from "../pagestyles/StyledContact";

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
        <Hero
          asset={{
            url: "/images/contact-hero.jpg",
            width: 1815,
            height: 1089,
          }}
        />
      </StyledContact>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
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
