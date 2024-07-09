import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const StyledServiceItem = styled(Link)`
  all: unset;
`;

export const ServiceItemProject = styled(motion.div)`
  position: absolute;
  pointer-events: none;
  opacity: 0;
  z-index: 1;
`;

export const ServiceItemContent = styled.div`
  position: relative;
  z-index: 2;
`;

export const ServiceItemProjectInner = styled.div`
  overflow: hidden;
  border-radius: ${({ theme }) => theme.bRad};
  width: 200px;
  height: 200px;
`;

export const ServiceItemProjectImg = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
