import { useContext } from "react";
import { useCookies } from "react-cookie";
import strings from "../../data/strings";
import { cookiesConsts, cookiesSettings } from "../../helpers/consts";
import { HoverProvider } from "../Cursor/CursorProvider";
import { Micro } from "../Typo/Micro";
import {
  CookiesButton,
  CookiesConsentMessage,
  StyledCookiesConsent,
} from "./Styles/StyledCookiesConsent";

interface CookiesConsentProps {}

const CookiesConsent = ({}: CookiesConsentProps) => {
  const cookiesStrings = strings.globals.cookiesConsent;
  const { setCursorType } = useContext(HoverProvider);
  const [cookies, setCookies] = useCookies();
  const consent = cookies[cookiesConsts.cookiesConsent] || "";

  if (consent) {
    return null;
  }

  return (
    <StyledCookiesConsent>
      <CookiesConsentMessage>
        <Micro>{cookiesStrings.message}</Micro>
      </CookiesConsentMessage>
      <CookiesButton
        onClick={() =>
          setCookies(
            cookiesConsts.cookiesConsent,
            true,
            cookiesSettings(window.location.hostname)
          )
        }
        onMouseEnter={() => setCursorType("hover")}
        onMouseLeave={() => setCursorType("normal")}
      >
        <Micro>{cookiesStrings.button}</Micro>
      </CookiesButton>
    </StyledCookiesConsent>
  );
};

export default CookiesConsent;
