import { useRouter } from "next/router";
import strings from "../../data/strings";
import Instagram from "../Icons/Instagram";
import Vimeo from "../Icons/Vimeo";
import Link from "../Link/Link";
import { Large } from "../Typo/Large";
import { Micro } from "../Typo/Micro";
import {
  ContactInfo,
  DetailedContact,
  FooterSocials,
  StyledFooter,
} from "./Styles/StyledFooter";

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
          <FooterSocials>
            <Instagram />
            <Vimeo />
          </FooterSocials>
        </DetailedContact>
      </ContactInfo>
    </StyledFooter>
  );
};

export default Footer;
