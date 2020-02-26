import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
  query Launches {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

function Launches() {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);
    let launches = null;
    if(data){
      launches =  data.launches.map(launch => (
                    <LaunchItem key={launch.flight_number} launch={launch} />
                  ))
    }
    if(loading) launches =  <div className="spinner-border text-info" role="status">
                              <span className="sr-only">Loading...</span>
                            </div>
    if(error) launches = <h1 className="display-4 my-3">{error}</h1>

    return (
      <Fragment>
        <h1 className="display-4 my-3" >Launches</h1>
        <MissionKey />
        {launches}
      </Fragment>
    );
};

export default Launches;