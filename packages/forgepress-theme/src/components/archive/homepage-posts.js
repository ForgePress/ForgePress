import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { connect } from "frontity";
import React from "react";
import { formatPostData, splitPosts } from "../helpers";
import ArchiveItem from "./archive-item";
import { PaginationButton } from "./pagination";

const HomepagePosts = ({ state, libraries }) => {

    const posts = state.source.get(state.router.link);

    return (
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
    );
};

export default connect(HomepagePosts);
