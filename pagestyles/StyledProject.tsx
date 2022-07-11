import Vimeo from "@u-wave/react-vimeo";
import styled from "styled-components";
import u from "../helpers/unit";

export const StyledProject = styled.div``;

export const ProjectHeroRoles = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: ${({ theme }) => u(1, theme.pageMargin)};
`;
export const ProjectHeroRole = styled.div`
  display: grid;
  grid-gap: 30px;
`;

export const ProjectHeroFooter = styled.div`
  display: flex;
  margin-left: auto;
  grid-gap: ${({ theme }) => u(1, theme.pageMargin)};
`;

export const ProjectDescription = styled.div`
  padding: ${({ theme }) => u(2, theme.pageMargin)} 0;
  width: ${({ theme }) => u(8, theme.pageMargin)};
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => `calc(${theme.pageMargin} / 2)`};
`;

export const ProjectGridRow = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  grid-gap: ${({ theme }) => `calc(${theme.pageMargin} / 2)`};
`;

export const ProjectGridBlockquote = styled.div`
  padding: ${({ theme }) => u(2, theme.pageMargin)}
    ${({ theme }) => u(2, theme.pageMargin)}
    ${({ theme }) => u(2, theme.pageMargin)} 0;
  margin-left: auto;
`;

export const ProjectGridVimeo = styled(Vimeo)`
  width: 100%;
  height: 100%;
`;
