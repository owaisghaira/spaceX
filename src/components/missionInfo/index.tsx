import React from "react";
import { useLaunchInfoQuery } from "../../generated/graphql";
import MissionDetail from "./missionInfo";
interface OwnProps {
  id: number;
}

const MissionInfo: React.FC<OwnProps> = ({id}) => {
  const { data, error, loading } = useLaunchInfoQuery({variables: { id: String(id) }});

  if (loading) {
    return <h3>Loading</h3>;
  }
  if (error || !data) {
    return <h3>Error</h3>;
  }
  console.log('==>',data);
  return <MissionDetail data={data} />;
};

export default MissionInfo;
