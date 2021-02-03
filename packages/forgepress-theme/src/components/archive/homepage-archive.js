import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { connect } from "frontity";
import Switch from "@frontity/components/switch";
import React from "react";
import { FeaturedPostSection } from "../featured-post/featured-post";
import { formatPostData } from "../helpers";
import { Newsletter } from "../newsletter";
import Post  from "../post/post";
import HomepagePosts from "./homepage-posts";
import HomepageSingle from "./homepage-single";

const HomepageArchive = ({ state, libraries }) => {
  const featured  = state.source.get('featured');

  // set homepage state
  if (state.theme.homepage) {
      console.log("homepage set");
      state.theme.isHome = true;
  }

  return (
    <Box bg="accent.50" as="section">
      <FeaturedPostSection
        data={featured.items.map(post => formatPostData(state, post))}
      />

      {<Switch>
          <HomepagePosts when={!state.theme.homepage.length} />
          <HomepageSingle when={state.theme.homepage.length} />
      </Switch>}

      {libraries.newsletter && (
        <Newsletter showPattern={state.theme.showBackgroundPattern} />
      )}
    </Box>
  );
};

export default connect(HomepageArchive);
