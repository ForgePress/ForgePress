import { Box, Heading, Text } from "@chakra-ui/core";
import React from "react";
import Link from "../link";
import PostCategories from "./post-categories";
import { formatDate } from "../helpers";
import { PatternBox, PatternBoxInner } from "../styles/pattern-box";

const PostHeader = ({
  heading,
  categories,
  description,
  author,
  date,
  isPage,
  ...props
}) => (
    <PatternBox pb="80px" mb="-80px" {...props}>
        <PatternBoxInner>
            <Heading
                mt="8px"
                textTransform="uppercase"
                fontSize={{ base: "5xl", md: "6xl" }}
                color="accent.400"
            >
                {heading}
            </Heading>
        </PatternBoxInner>
    </PatternBox>
);

export default PostHeader;
