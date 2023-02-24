import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useTutorialList from "../hooks/useTutorialList";
import Tutorial from "./Tutorial";

export default function Tutorials() {
  const [page, setPage] = useState(1);
  const { loading, error, tutorials, hasMore } = useTutorialList(page);

  return (
    <div>
      {tutorials.length > 0 && (
        <InfiniteScroll
          dataLength={tutorials.length}
          hasMore={hasMore}
          loader="Loading..."
          next={() => setPage(page + 8)}
        >
          {tutorials.map((tutorial) =>
            tutorial.noq > 0 ? (
              <Link
                to={{
                  pathname: `/quiz/${tutorial.youtubeID}`,
                  state: {
                    tutorialTitle: tutorial.title,
                  },
                }}
                key={tutorial.youtubeID}
              >
                <Tutorial
                  title={tutorial.title}
                  id={tutorial.youtubeID}
                  noq={tutorial.noq}
                />
              </Link>
            ) : (
              <Tutorial
                title={tutorial.title}
                id={tutorial.youtubeID}
                noq={tutorial.noq}
                key={tutorial.youtubeID}
              />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && tutorials.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
}