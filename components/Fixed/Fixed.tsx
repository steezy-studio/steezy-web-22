import React, { Fragment, ReactNode } from "react";
import styled from "styled-components";
import { breakpoint } from "../../helpers/consts";

interface FixedProps {
  children: JSX.Element;
  id: string;
  hasSmoothScroll?: boolean;
}

export const FixedTarget = styled.div`
  left: 0;
  position: absolute;
  right: 0;
  top: -100vh;
  bottom: -100vh;
  ${breakpoint.phone} {
    display: none;
  }
`;

const Fixed = ({ children, id, hasSmoothScroll = true }: FixedProps) => {
  const scrollFixedProps = {
    "data-scroll": "",
    "data-scroll-persistent": "",
    "data-scroll-sticky": "",
    "data-scroll-target": `#${id}`,
  };

  if (!hasSmoothScroll) return children;

  const childrenWithProps = React.Children.map<ReactNode, ReactNode>(
    children,
    (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement<typeof scrollFixedProps>(
          child,
          scrollFixedProps
        );
      }
      return child;
    }
  );

  return (
    <Fragment>
      <FixedTarget id={id} />
      {childrenWithProps}
    </Fragment>
  );
};

export default Fixed;
