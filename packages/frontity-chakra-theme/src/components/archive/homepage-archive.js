import { Box, Heading, SimpleGrid } from "@chakra-ui/core";
import { connect } from "frontity";
import React from "react";
import { FeaturedPostSection } from "../featured-post/featured-post";
import { formatPostData, splitPosts } from "../helpers";
import { Newsletter } from "../newsletter";
import ArchiveItem from "./archive-item";
import { PaginationButton } from "./pagination";

const HomepageArchive = ({ state, libraries }) => {
  // Get the data of the current list.
  const posts = state.source.get(state.router.link);
  const featured  = state.source.get('featured');

  return (
    <Box bg="accent.50" as="section">
      <FeaturedPostSection
        data={featured.items.map(post => formatPostData(state, post))}
      />
      <Box
        py={{ base: "64px", md: "80px" }}
        px={{ base: "24px", md: "40px" }}
        width={{ base: "auto", lg: "80%" }}
        maxWidth="1200px"
        mx="auto"
      >
        <Heading
          textTransform="uppercase"
          textAlign="center"
          fontSize={{ base: "4xl", md: "6xl" }}
          color="accent.400"
        >
          Latest Posts
        </Heading>

        <SimpleGrid
          mt={{ base: "64px", md: "80px" }}
          columns={{ base: 1, md: 2 }}
          spacing="40px"
        >
          {posts.items.map(({ type, id }) => {

            const item = state.source[type][id];

            // skip featured items
            if (state.theme.featuredPosts.includes(item.id)) {
                  return;
            }

            return <ArchiveItem key={item.id} item={item} />;
          })}
        </SimpleGrid>

        <PaginationButton mt="40px" link="/page/2">
          More posts
        </PaginationButton>
      </Box>
      {libraries.newsletter && (
        <Newsletter showPattern={state.theme.showBackgroundPattern} />
      )}
    </Box>
  );
};

export default connect(HomepageArchive);
