import React from "react";
import strings from "../../data/strings";
import Link from "../Link/Link";
import { Micro } from "../Typo/Micro";
import { Large } from "../Typo/Large";
import {
  ContactInfo,
  DetailedContact,
  StyledFooter,
} from "./Styles/StyledFooter";
import { useRouter } from "next/router";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  const footerStrings = strings.footer;
  const router = useRouter();

  return (
    <StyledFooter>
      <Micro>{footerStrings.cta}</Micro>
      <ContactInfo>
        <Large>
          {router.asPath === "/contact" ? (
            <Link href={`#`}>{strings.footer.ig}</Link>
          ) : (
            <Link href={`mailto:${strings.globals.email}`}>
              {strings.globals.email}
            </Link>
          )}
        </Large>
        <DetailedContact>
          <Micro className='lowcase'>{footerStrings.address}</Micro>
          <Micro className='lowcase'>
            {strings.globals.phone + `\n` + footerStrings.other}
          </Micro>
        </DetailedContact>
      </ContactInfo>
    </StyledFooter>
  );
};

export default Footer;
