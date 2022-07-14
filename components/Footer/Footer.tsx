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

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  const footerStrings = strings.footer;
  return (
    <StyledFooter>
      <Micro>{footerStrings.cta}</Micro>
      <ContactInfo>
        <Large>
          <Link href={`mailto:${strings.globals.email}`}>
            {strings.globals.email}
          </Link>
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
