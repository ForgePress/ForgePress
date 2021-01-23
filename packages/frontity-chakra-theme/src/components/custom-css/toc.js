import React from "react";
import { Global , css } from "frontity";


const CSSTOC = () => (
    <Global
        styles={css`
        html {
          scroll-behavior: smooth;
        }
        .gutentoc-toc-wrap ul li a {
            font-weight: normal;
            font-size: 95%;
        }

        .gutentoc {
            margin-bottom: 1em;
            width: auto;
            display: table;
            font-size: 95%;
            background: #f9f9f9;
            border-width: 1px;
            border-style: solid;
            border-color: #aaaaaa;
            -webkit-border-image: initial;
            -o-border-image: initial;
            border-image: initial;
            padding: 10px;
        }

        .gutentoc-toc-title {
            font-weight: 700;
            font-size: 17px;
            line-height: 1.5;
        }

        .gutentoc-toc-title-wrap .gutentoc-toc-title {
            display: inline-block;
        }

        .gutentoc-toc-title-wrap .text_open {
            display: inline-block;
        }

        .text_open {
            padding: 0px 5px;
        }

        .text_open:before {
            content: "[";
            font-weight: 500;
            letter-spacing: 1px;
            color: initial;
        }

        .text_open:after {
            content: "]";
            font-weight: 500;
            letter-spacing: 1px;
            color: initial;
        }

        #open,
        #close {
            cursor: pointer;
        }

        .gutentoc {
            background: #f9f9f9;
            padding: 10px;
            width: auto;
            display: table;
            -webkit-transition: width 2s, height 4s;
            /* For Safari 3.1 to 6.0 */
            -o-transition: width 2s, height 4s;
            transition: width 2s, height 4s;
        }

        .gutentoc.tocactive {
            widows: 100%;
        }

        body .hide {
            display: none;
        }

        body .show {
            display: block;
        }


        /*List Style*/

        #toclist ul li,
        #toclist ul {
            margin: 0;
            padding: 0;
            line-height: 1.5;
            padding-bottom: 3px;
            list-style: none;
        }

        #toclist ul {
            margin-left: 20px;
        }

        .ollist ul>li,
        .ollist ul>ul>li {
            list-style-type: decimal !important;
        }

        .ollist li:nth-of-type(2) li:before {
            content: "2";
        }

        .iconick ul li:after {
            position: absolute;
            width: 10px;
            height: 10px;
            content: "";
            left: 0;
            border-top: 6px solid transparent;
            border-left: 7px solid #bbb;
            border-bottom: 6px solid transparent;
            top: 0;
            margin-top: 7.5px;
        }

        .iconick ul li {
            position: relative;
            list-style: none !important;
            padding-left: 18px !important;
        }

        .ullist ul,
        .ullist ul li {
            list-style-type: disc !important;
        }

        .squiredlist ul,
        .squiredlist ul li {
            list-style-type: square !important;
        }

        .ul_ml_px0 ul ul {
            margin-left: 0 !important;
        }

        .ul_ml_px10 ul ul {
            margin-left: 10px !important;
        }

        .ul_ml_px15 ul ul {
            margin-left: 15px !important;
        }

        .toggleone,
        .toggletwo {
            width: 25px;
            height: 25px;
            background-size: 17px auto !important;
            background-repeat: no-repeat !important;
            text-indent: -999999px;
            display: inline-block;
            float: right;
            margin-left: 25px;
            margin-top: 5px;
            background-position: center center !important;
            border-radius: 3px;
        }

        .toggleone {
            background: url(../assets/toggle1.svg);
        }

        .toggletwo {
            background: url(../assets/toggle2.svg);
        }
    `}
    />
);

export default CSSTOC;