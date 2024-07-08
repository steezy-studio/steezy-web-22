import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

export const StyledServiceItem = styled.div``;

export const ServiceItemProject = styled(motion.div)`
  position: absolute;
  pointer-events: none;
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
