import React, { ReactNode } from "react";
import Link from "../Link/Link";
import { Medium } from "../Typo/Medium";
import { StyledSectionHeader } from "./StyledSectionHeader";

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
      <Medium className='bold'>{header}</Medium>
      {linkText && url && (
        <Medium className='editorial'>
          <Link href={url} target={target}>
            {linkText}
          </Link>
        </Medium>
      )}
    </StyledSectionHeader>
  );
};

export default SectionHeader;
