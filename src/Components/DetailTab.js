import React, { useState } from "react";
import styled from "styled-components";
import YouTube from "react-youtube";

const DTabContainer = styled.div`
  display: grid;
  background: rgba(0, 0, 0, 0.5);
  grid-template-rows: [DTabHeader] 1fr [DTabContent] 6fr;
  grid-template-columns: repeat(3, 1fr);
  height: 300px;
`;

const DTabHeader = styled.div`
  border: solid 1px black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  &:hover {
    background: rgba(0, 0, 0, 0.8);
    color: #e50914;
    transition: 0.2s ease-in-out;
  }
  cursor: pointer;
`;

const DTabContent = styled.div`
  border: solid 2px black;
  grid-column: 1 / 4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const content = [
  {
    tab: "Trailers",
    content: "result.title",
  },
  {
    tab: "Productions",
    content: "22",
  },
  {
    tab: "Collection",
    content: "33",
  },
];

const useTabs = (initialTabs, allTabs) => {
  const [contentIndex, setContentIndex] = useState(initialTabs);
  return {
    contentItem: allTabs[contentIndex],
    contentChange: setContentIndex,
  };
};

const opts = {
  height: "200",
  width: "300",
  playerVars: {
    autoplay: 1,
  },
};

export default function DetailTab({ result }) {
  const { contentItem, contentChange } = useTabs(0, content);
  return (
    <DTabContainer>
      {content.map((section, index) => (
        <DTabHeader onClick={() => contentChange(index)}>
          {section.tab}
        </DTabHeader>
      ))}
      {contentItem.tab === "Trailers" ? (
        <DTabContent>
          <YouTube
            videoId={result.videos.results.map((a) => a.key)[0]}
            opts={opts}
          />
        </DTabContent>
      ) : contentItem.tab === "Productions" ? (
        <DTabContent>{1}</DTabContent>
      ) : contentItem.tab === "Collection" ? (
        <DTabContent>
          {result.belongs_to_collection
            ? result.belongs_to_collection.name
            : "No Collection"}
        </DTabContent>
      ) : (
        <DTabContent>exit</DTabContent>
      )}
    </DTabContainer>
  );
}

// const DetailTab = ({ result }) => (
//   <DTabContainer>
//     {content.map((section, index) => (
//       <DTabHeader onClick={() => contentChange(index)}>
//         {section.tab}
//       </DTabHeader>
//     ))}
//     <DTabHeader id="2">Production</DTabHeader>
//     {result.title ? (
//       <DTabHeader id="3">Collection</DTabHeader>
//     ) : (
//       <DTabHeader id="3">Seasons</DTabHeader>
//     )}
//     <DTabContent>{contentItem.content}</DTabContent>
//   </DTabContainer>
// );

// DetailTab.propTypes = {};

// export default DetailTab;
