import {  Fragment } from "react";
import Head from "next/head";

const Page = ({ title, children }) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
          rel="stylesheet"
        />

        {/* favicons */}
        {/* <link rel="apple-touch-icon" sizes="180x180" href={`${staticPath}/favicons/apple-touch-icon.png`}/>
                <link rel="icon" type="image/png" sizes="32x32" href={`${staticPath}/favicons/favicon-32x32.png`}/>
                <link rel="icon" type="image/png" sizes="16x16" href={`${staticPath}/favicons/favicon-16x16.png`}/>
                <link rel="manifest" href={`${staticPath}/favicons/site.webmanifest`}/>
                <link rel="mask-icon" href={`${staticPath}/favicons/safari-pinned-tab.svg`} color="#5bbad5"/>
                <link rel="shortcut icon" href={`${staticPath}/favicons/favicon.ico`}/>
                <meta name="msapplication-config" content={`${staticPath}/favicons/browserconfig.xml`}/> */}

        {/* Theme */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#000000" />
      </Head>
      {children}
    </Fragment>
  );
};

export default Page;
