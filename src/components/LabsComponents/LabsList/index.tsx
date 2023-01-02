import { FC, useState } from "react";

import RenderIf from "components/RenderIf";

import { LabsData } from "interfaces/LabsApiResponse.interface";

import LabCard from "../LabCard";
import DefaultButton from "components/Buttons/DefaultButton";

interface props {
  labs?: LabsData[];
  loadMoreLabs: () => void;
}

const LabsList: FC<props> = ({ labs, loadMoreLabs }) => {
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
        <RenderIf isTrue={labs?.length === 0}>
          <p style={{ color: "white" }}>
            No labs found. Try searching for something else.
          </p>
        </RenderIf>

        {labs?.length > 0 &&
          labs?.map((lab) => <LabCard lab={lab} key={lab._id} />)}
      </div>

      {labs?.length > 0 && (
        <div>
          <DefaultButton
            style={{ backgroundColor: "#F6104E", padding: "0.5em 2em" }}
            onClick={loadMoreLabs}
          >
            Load more
          </DefaultButton>
        </div>
      )}
    </>
  );
};

export default LabsList;
