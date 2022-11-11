import React, { useState } from "react";
import strings from "../../data/strings";
import { Micro } from "../Typo/Micro";
import {
  CookiesButton,
  StyledCookiesConsent,
} from "./Styles/StyledCookiesConsent";

interface CookiesConsentProps {}

const CookiesConsent = ({}: CookiesConsentProps) => {
  const cookiesStrings = strings.globals.cookiesConsent;
  const [consent, setConsent] = useState(false);
  return (
    <StyledCookiesConsent>
      <Micro>{cookiesStrings.message}</Micro>
      <CookiesButton onClick={() => setConsent(true)}>
        <Micro className='white'>{cookiesStrings.button}</Micro>
      </CookiesButton>
    </StyledCookiesConsent>
  );
};

export default CookiesConsent;
