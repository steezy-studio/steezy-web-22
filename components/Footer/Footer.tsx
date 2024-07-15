import { useRouter } from "next/router";
import strings from "../../data/strings";
import InstagramFeed from "../InstagramFeed/InstagramFeed";
import Link from "../Link/Link";
import { Large } from "../Typo/Large";
import { Micro } from "../Typo/Micro";
import {
  ContactInfo,
  DetailedContact,
  FooterInner,
  FooterSocials,
  StyledFooter,
} from "./Styles/StyledFooter";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  const footerStrings = strings.footer;
  const router = useRouter();

  return (
    <StyledFooter>
      <InstagramFeed />
      <FooterInner>
        <Micro>{footerStrings.cta}</Micro>
        <ContactInfo>
          <Large>
            {router.asPath === "/contact" ? (
              <Link
                href={`https://www.instagram.com/steezy.studio/`}
                target='_blank'
              >
                {strings.footer.ig}
              </Link>
            ) : (
              <Link href={`mailto:${strings.globals.email}`}>
                {strings.globals.email}
              </Link>
            )}
          </Large>
          <DetailedContact>
            <FooterSocials>
              <Micro className='lowcase break-lines'>{`Follow us`}</Micro>
              <Micro>
                <Link
                  href={"https://instagram.com/steezy.studio"}
                  target='_blank'
                >
                  {"instagram.com/steezy.studio"}
                </Link>
              </Micro>
              <Micro>
                <Link href={"https://vimeo.com/steezy.studio"} target='_blank'>
                  {"vimeo.com/steezy.studio"}
                </Link>
              </Micro>
            </FooterSocials>
            <Micro className='lowcase break-lines'>
              {footerStrings.address}
            </Micro>
            <Micro className='lowcase break-lines'>
              {strings.globals.phone + `\n` + footerStrings.other}
            </Micro>
          </DetailedContact>
        </ContactInfo>
      </FooterInner>
    </StyledFooter>
  );
};

export default Footer;
