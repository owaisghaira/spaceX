import React from "react";
import { useLaunchListQuery } from "../../generated/graphql";
import MissionList from "./mission";

const Mission = () => {
  const { data, error, loading } = useLaunchListQuery();

  if (loading) {
    return <h3>Loading</h3>;
  }
  if (error || !data) {
    return <h3>Error</h3>;
  }
console.log(data)
  return <MissionList data={data} />;
};

export default Mission;
