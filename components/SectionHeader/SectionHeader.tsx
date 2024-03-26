import React from "react";
import { StyledSectionHeader } from "./StyledSectionHeader";
import { Medium } from "../Typo/Medium";
import { Micro } from "../Typo/Micro";
import HeaderLine from "../HeaderLine/HeaderLine";
import Link from "../Link/Link";

interface SectionHeaderProps {
  header: string;
  linkText?: string;
  url?: string;
}

const SectionHeader = ({ header, linkText, url }: SectionHeaderProps) => {
  return (
    <StyledSectionHeader>
      <Medium className='medium'>{header}</Medium>
      {linkText && url && (
        <HeaderLine>
          <Link href={url} className='no-underline agrandir'>
            <Micro>{linkText}</Micro>
          </Link>
        </HeaderLine>
      )}
    </StyledSectionHeader>
  );
};

export default SectionHeader;
