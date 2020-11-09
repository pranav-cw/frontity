import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Footer from "./footer";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>

      <FootContainer>
        <Footer />
      </FootContainer>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  .fb-icon:hover{
    background-color: #38539a;
  }

  .ig-icon {
    border-radius: 11px !important;
  }

  .ig-icon:hover {
    background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
  }

  .google-icon {
    filter: brightness(0) invert(1);
  }

  .google-icon:hover {
    filter: none;
  }

  .pin-icon {
    filter: brightness(0) invert(1);
  }

  .pin-icon:hover {
    filter: none;
  }

  .column-1 {
    flex-direction: column;
  }

  .wrapper {
    width: 90%;
    margin: 0 auto;
    padding: 24px;
    list-style: none;
    display: flex !important;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  .heart {
    animation: pulse 1s ease infinite;
    height: 24px !important;
    width: 26px !important;
  }

  .advert_slug {
    text-align: center;
    color: #aaa;
    display: block;
    font-size: 12px;
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
`;


const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  /*background-color: #1f38c5;*/
  background-image: linear-gradient(to bottom left, cyan, green);
`;

const FootContainer = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: auto;
  justify-content: space-between;
  /*background-color: #1f38c5;*/
  background-image: linear-gradient(to bottom left, cyan, green);
  font-family: "Lucida Console", Courier, monospace;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;
