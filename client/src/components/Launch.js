import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!){
    launch(flight_number: $flight_number){
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local,
      rocket{
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;


function Launch({match})  {

  let { flight_number } = match.params;
  flight_number = parseInt(flight_number);

  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: {flight_number},
  });

  let eachLaunch = null;

  if(data){
    let {
      mission_name,
      launch_success,
      launch_date_local,
      rocket: {
        rocket_id,
        rocket_name,
        rocket_type
      }
    } = data.launch;

    if(launch_success){
      launch_success = <span className="text-success">Success</span>
    } else if (launch_success === false){
      launch_success = <span className="text-danger">Fail</span>
    } else {
      launch_success = <span className="text-secondary">Null</span>
    }

    eachLaunch =  <div>
                    <h1 className="display-4 my-3">
                      <span className="text-dark">Mission: </span>{mission_name}
                    </h1>
                    <h4 className="mb-3">Launch Details</h4>
                    <ul className="list-group">
                      <li className="list-group-item">
                        Flight Number: {flight_number}
                      </li>
                      <li className="list-group-item">
                        Launch Date: <Moment format="YYYY-MM-DD, HH:MM">{launch_date_local}</Moment>
                      </li>
                      <li className="list-group-item">
                        Launch Status: {launch_success}
                      </li>
                    </ul>
                    <h4 className="my-3">Rocket Details</h4>
                    <ul className="list-group">
                      <li className="list-group-item">
                        Rocket ID: {rocket_id}
                      </li>
                      <li className="list-group-item">
                        Rocket Name: {rocket_name}
                      </li>
                      <li className="list-group-item">
                        Rocket Type: {rocket_type}
                      </li>
                    </ul>
                    <br/>
                    <Link to="/" className="btn btn-secondary">Back</Link>
                  </div>
  }
  if(loading) eachLaunch =  <div className="spinner-border text-info" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
  if(error) eachLaunch = <h1 className="display-4 my-3">{error}</h1>


  return (
    <Fragment>
      { eachLaunch }
    </Fragment>
  );
};

export default Launch;