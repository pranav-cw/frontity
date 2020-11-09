import React from "react";
import useArchiveInfiniteScroll from "@frontity/hooks/use-archive-infinite-scroll";
import { connect, styled } from "frontity";
import ArchivePage from "./archive-page";
import Loading from "../loading";

const List = () => {
  const {
    pages,
    isFetching,
    isError,
    isLimit,
    fetchNext
  } = useArchiveInfiniteScroll({ limit: 0 });

  return (
    <div className="wrapper">
      {pages.map(({ Wrapper, key, link, isLast }) => (
        <Wrapper key={key}>
          <ArchivePage link={link} />
          {/* { !isLast && <hr /> } */}
        </Wrapper>
      ))}
      {isFetching && <Loading />}
      {isLimit && <button onClick={fetchNext}>Next Page</button>}
      {isError && <button onClick={fetchNext}>Try Again</button>}
    </div>

  );
};

export default connect(List);