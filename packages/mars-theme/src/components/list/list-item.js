import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  var excerpt = item.excerpt.rendered.slice(0, 220) + " ...<a href=" + item.link + ">read more</a>";

  return (
    <Article>
      <Article_container>
        <Link link={item.link}>
          <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
        </Link>

        <div>
          {/* If the post has an author, we render a clickable author text. */}
          {author && (
            <StyledLink link={author.link}>
              <AuthorName>
                By <b>{author.name}</b>
              </AuthorName>
            </StyledLink>
          )}
          <PublishDate>
            {" "}
            on <b>{date.toDateString()}</b>
          </PublishDate>
        </div>

        {/*
         * If the want to show featured media in the
         * list of featured posts, we render the media.
         */}
        {state.theme.featured.showOnList && (
          <FeaturedMedia id={item.featured_media} />
        )}

        {/* If the post has an excerpt (short summary text), we render it */}
        {item.excerpt && (
          <Excerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
        )}
      </Article_container>
    </Article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Article = styled.article`
  width: 23em;
  text-align: justify;
`;

const Article_container = styled.div`
  width: 20em;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  color: rgba(12, 17, 43);
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
  box-sizing: border-box;
  line-height: 1.6em;
`;

const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
`;
