import React from "react";
import { Global , css } from "frontity";


const HomeCSS = () => (
    <Global
        styles={css`

        #featured-text {
           height:68%;
        }

        header {
         border-bottom: solid 4px;

        }
        #post-box[data-route="home"] {
            margin-top: 0px;
            padding-top: 0px;
        }

        #post-box[data-route="home"] h1 {
            font-family: Kelson,system-ui,Helvetica,sans-serif;
            font-size: 2.5rem;
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: 20px;
            margin-top: 60px;
            margin-bottom: 40px;
            //text-transform: uppercase;
            text-align:center
        }
        #post-box[data-route="home"] h2 {
           font-size: 2.25rem;
           margin-top:30px;
           margin-bottom:30px;
           font-family: Kelson,system-ui,Helvetica,sans-serif;
       }

       #post-box[data-route="home"] h3 {
           font-size: 1.5rem;
           margin-top:40px;
           margin-bottom:20px;
          //font-family: Kelson,system-ui,Helvetica,sans-serif;
       }

       #post-box[data-route="home"] h4 {
           font-size: 1.2rem;
           margin-top:20px;
           margin-top:20px;
          font-family: Kelson,system-ui,Helvetica,sans-serif;
       }


    `}
    />
);

export default HomeCSS;