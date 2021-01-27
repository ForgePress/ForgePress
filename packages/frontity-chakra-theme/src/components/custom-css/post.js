import React from "react";
import { Global , css } from "frontity";


const PostCSS = () => (
    <Global
        styles={css`
       #post-content h2 {
           font-size: 2.5rem;
           margin-top:10px;
           font-family: Kelson,system-ui,Helvetica,sans-serif;
       }

       #post-content h4 {
           font-size: 1.5rem;
           margin-top:10px;
          font-family: Kelson,system-ui,Helvetica,sans-serif;
       }

       #post-content ul {
           margin-left:1em;
       }

       #post-content[data-route="/donate/"] {
           max-width:95% !important;
           width:95% !important;
       }

       #post-content[data-route="/donate/"] iframe {
           max-width:100% !important;
           width:100% !important;
       }
    `}
    />
);

export default PostCSS;