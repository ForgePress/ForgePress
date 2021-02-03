import { Box, Heading, Divider } from "@chakra-ui/react";
import { connect, styled } from "frontity";
import React from "react";
import { formatPostData, splitPosts } from "../helpers";
import ArchiveItem from "./archive-item";
import { LightPatternBox } from "../styles/pattern-box";
import PostHeader from "../post/post-header";
import Section from "../styles/section";
import { PatternBox, PatternBoxInner } from "../styles/pattern-box";

const HomepageSingle = ({ state, libraries }) => {

    const posts = state.source.get('home');
    const post = formatPostData(state, posts.items[0]);
    const Html2React = libraries.html2react.Component;

    return (
        <LightPatternBox showPattern={state.theme.showBackgroundPattern} id="post-box" data-route="home">

            {/* Look at the settings to see if we should include the featured image */}
            <Section id="welcome" bg="white" pb="80px" size="lg">
                <a id="welcome" />
                {/* Render the content using the Html2React component so the HTML is processed
                 by the processors we included in the libraries.html2react.processors array. */}
                <Content
                    as={Section}
                    px={{ base: "32px", md: "0" }}
                    size="md"
                    pt="50px"
                    id="post-content"
                    data-route={state.router.link}
                >
                    <Html2React html={post.content} />
                </Content>

                <Divider borderBottom="1px solid" my="80px" />

            </Section>
        </LightPatternBox>
    );
};

export default connect(HomepageSingle);


const Content = styled.div`
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;

  * {
    max-width: 100%;
  }

  ul {
    padding: 1rem;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;
  }

  iframe {
    display: block;
    margin: auto;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;