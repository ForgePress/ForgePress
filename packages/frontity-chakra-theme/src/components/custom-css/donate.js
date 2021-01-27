import React from "react";
import { Global , css } from "frontity";


const DonateCSS = () => (
    <Global
        styles={css`

       #post-box[data-route="/donate/"] #post-header {
           display:none;
       }

       #post-authorbox[data-route="/donate/"] {
           display:none;
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

export default DonateCSS;