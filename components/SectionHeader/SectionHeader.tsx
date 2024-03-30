import React, { ReactNode } from "react";
import { StyledSectionHeader } from "./StyledSectionHeader";
import { Medium } from "../Typo/Medium";
import { Micro } from "../Typo/Micro";
import HeaderLine from "../HeaderLine/HeaderLine";
import Link from "../Link/Link";

export interface SectionHeaderProps {
  header: string;
  linkText?: ReactNode;
  url?: string;
  target?: React.HTMLAttributeAnchorTarget;
}

const SectionHeader = ({
  header,
  linkText,
  url,
  target = "_self",
}: SectionHeaderProps) => {
  return (
    <StyledSectionHeader>
      <Medium className='medium'>{header}</Medium>
      {linkText && url && (
        <Link href={url} className='no-underline agrandir' target={target}>
          <HeaderLine>
            <Micro>{linkText}</Micro>
          </HeaderLine>
        </Link>
      )}
    </StyledSectionHeader>
  );
};

export default SectionHeader;
