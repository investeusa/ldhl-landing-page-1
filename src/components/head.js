import React from 'react'
import Head from 'next/head'

import FACEBOOK_PIXEL_1 from './facebook/pixel-1'
import Script from 'next/script.js'

export default ({ name }) => {


    return (
        <Head>
            {name === 'FACEBOOK_PIXEL_1' && <FACEBOOK_PIXEL_1 />}
            <Script src="https://midas.ticto.app/oneclickbuy.js?flow=3c01a5d0-8464-400a-a610-1420cea77d2d.26957" async></Script>
            {/* <!-- Hotjar Tracking Code for programalipedema21dias --> */}
            {/* <React.Fragment>
                <script dangerouslySetInnerHTML={{
                    __html: `(function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:3664291,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');` }}
                />
            </React.Fragment> */}
        </Head>
    )
}