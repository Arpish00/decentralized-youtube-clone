import React, { useEffect, useState } from "react";
import { useApolloClient, gql } from "@apollo/client";
import client from './../client';

export default function Main() {
     const [videos, setVideos] = useState([]);

     const client = useApolloClient();

     const GET_VIDEOS = gql`
     query videos(
        $first: Int
        $skip: Int
        $orderBy: Video_orderBy
        $orderDirection: OrderDirection
        $where: Video_filter
      ) {
        videos(
          first: $first
          skip: $skip
          orderBy: $orderBy
          orderDirection: $orderDirection
          where: $where
        ) {
          id
          hash
          title
          description
          location
          category
          thumbnailHash
          isAudio
          date
          author
          createdAt
        }
      }
      `;

      const getVideos = async () => {
        // Query the videos from the graph
        client
          .query({
            query: GET_VIDEOS,
            variables: {
              first: 200,
              skip: 0,
              orderBy: "createdAt",
              orderDirection: "desc",
                        // NEW: Added where in order to search for videos
              where: {
                ...(search && {
                  title_contains_nocase: search,
                }),
              },
            },
            fetchPolicy: "network-only",
          })
          .then(({ data }) => {
            // Set the videos to the state
            setVideos(data.videos);
          })
          .catch((err) => {
            alert("Something went wrong. please try again.!", err.message);
          });
      };
    

      useEffect(() => {
        // Runs the function getVideos when the component is mounted and also if there is a change in the search stae
            getVideos();
      }, [search]);
    
      return (
        <div className="w-full bg-[#1a1c1f] flex flex-row">
          <div className="flex-1 h-screen flex flex-col">
            <div className="flex flex-row flex-wrap">
            {videos.map((video) => (
        <div
            className="w-80"
            onClick={() => {
                // Navigation to the video screen (which we will create later)
                window.location.href = `/video?id=${video.id}`;
       }}
            >
              <Header
          search={(e) => {
            console.log(e);
          }}
        />
                <Video video={video} />
        </div>
))}

            </div>
          </div>
        </div>
      );
}