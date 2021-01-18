import { Box, CSSReset, theme, ThemeProvider } from "@chakra-ui/core";
import { connect, Head } from "frontity";
import React from "react";
import Switch from "@frontity/components/switch";
import Archive from "./archive";
import Footer from "./footer";
import Header from "./header";
import Loading from "./loading";
import Page404 from "./page404";
import Post from "./post/post";
import SearchResults from "./search";
import Title from "./title";
import FontFace from "./styles/font-face";
import { useTransition, animated } from 'react-spring'

// Theme is the root React component of our theme. The one we will export
// in roots.
const Theme = ({ state, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const parse = libraries.source.parse(state.router.link);
  // Check if the url is a search type
  const isSearch = Boolean(parse.query["s"]);

  const transitions = useTransition(state.router.link, null , {
    /*from:{ opacity:0 },
    enter:{ opacity: 1 },
    leave: { opacity:0 , display:"none"}
    */
  });

  return (
    <ThemeProvider
      theme={{
        ...theme,
        fonts: {
          ...theme.fonts,
          heading: "Kelson, system-ui, Helvetica, sans-serif"
        },
        colors: { ...theme.colors, ...state.theme.colors }
      }}
    >
      <FontFace />
      <CSSReset />
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add the header of the site. */}
      <Header />

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Box
        as="main"
        mt={{ base: "40px", md: "70px" }}
        minH="calc(100vh - 320px)"
      >
        {/* This is causing the homepage to break at the moment */}
        {<Switch>
          <Loading when={data.isFetching} />
          <Post when={data.isPostType} />
          <Page404 when={data.is404} />
          <SearchResults when={isSearch} />
        </Switch>}

        {(data.isFetching && <Loading />) ||
      (isSearch && <SearchResults />) ||
      (data.isArchive && <Archive />) ||
      (data.isPostType && <Post />) ||
      (data.is404 && <Page404 />)}



      </Box>

      <Footer />
    </ThemeProvider>
  );
};

export default connect(Theme);