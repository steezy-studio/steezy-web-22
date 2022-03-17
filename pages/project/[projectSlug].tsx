import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import styled from "styled-components";
import client from "../../apollo/client";
import { MainHeader } from "../../components/Typo/MainHeader";
import { GET_PROJECT } from "../../graphql/GetProject";

interface ProjectProps {
  data: any;
}

const StyledProject = styled.pre``;

const Project = ({ data }: ProjectProps) => {
  if (!data.Project) return <MainHeader>error</MainHeader>;

  return <StyledProject>{JSON.stringify(data, null, 2)}</StyledProject>;
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{
  projectSlug: string;
}>) => {
  const data = await client.query({
    query: GET_PROJECT,
    variables: { slug: params.projectSlug },
  });

  return {
    props: { data: data.data },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: `blocking` };
};

export default Project;
