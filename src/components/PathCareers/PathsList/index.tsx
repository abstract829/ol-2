import RenderIf from "components/RenderIf";

import PathCard from "../PathCard";
import DefaultButton from "components/Buttons/DefaultButton";

const PathsList = ({ paths, loadMorePaths }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1em",
          justifyContent: "start",
        }}
      >
        <RenderIf isTrue={paths?.length === 0}>
          <p style={{ color: "white" }}>
            No paths found. Try searching for something else.
          </p>
        </RenderIf>

        {paths?.length > 0 &&
          paths?.map((path) => <PathCard path={path} key={path._id} />)}
      </div>

      {paths?.length > 0 && (
        <div>
          <DefaultButton
            style={{
              backgroundColor: "#F6104E",
              padding: "0.5em 2em",
              marginTop: "2em",
            }}
            onClick={loadMorePaths}
          >
            Load more
          </DefaultButton>
        </div>
      )}
    </>
  );
};

export default PathsList;
