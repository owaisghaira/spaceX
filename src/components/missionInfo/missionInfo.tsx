import React from "react";
import { LaunchInfoQuery } from "../../generated/graphql";
import {Typography} from 'antd'

const {Title} = Typography
interface Props {
  data: LaunchInfoQuery;
}

const MissionDetail: React.FC<Props> = ({ data }) => {
  if (!data.launch) {
    return <div>No launch available</div>;
  }
  return (
    <div className="">
      <div>
        <Title>Flight {data.launch.launch_year}: </Title>
      </div>
      <h1 className="">
        {data.launch.mission_name}
        {data.launch.rocket &&
          ` (${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
      </h1>
      <p>{data.launch.details}</p>
      {!!data.launch.links && !!data.launch.links.flickr_images && (
        <div className="image-list">
          {data.launch.links.flickr_images.map((image, i) =>
            image ? (
              <img
                src={image}
                className="image"
                key={image}
                alt={`${data.launch?.mission_name} ${i}`}
              />
            ) : null
          )}
        </div>
      )}
    </div>
  );
};

export default MissionDetail;
