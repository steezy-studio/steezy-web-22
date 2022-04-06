import React from "react";
import strings from "../../data/strings";
import Link from "../Link/Link";
import { Caption } from "../Typo/Caption";
import { MainHeader } from "../Typo/MainHeader";
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
      <Caption>{footerStrings.cta}</Caption>
      <ContactInfo>
        <MainHeader>
          <Link href={`mailto:${footerStrings.email}`}>
            {footerStrings.email}
          </Link>
        </MainHeader>
        <DetailedContact>
          <Caption className="lowcase">{footerStrings.address}</Caption>
          <Caption className="lowcase">{footerStrings.other}</Caption>
        </DetailedContact>
      </ContactInfo>
    </StyledFooter>
  );
};

export default Footer;
