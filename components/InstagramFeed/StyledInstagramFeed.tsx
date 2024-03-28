import styled from "styled-components";
import { spaces } from "../../helpers/spaces";
import Image from "next/image";
import Link from "next/link";

export const StyledInstagramFeed = styled.div``;

export const IgLinkW = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${spaces.xs}px;
`;

export const IgFeed = styled.div``;

export const IgPostW = styled(Link)`
  all: unset;
  display: block;
`;

export const IgPost = styled(Image)``;
