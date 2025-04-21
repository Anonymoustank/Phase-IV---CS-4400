import React, { useState } from 'react';import './App.css';
import Popup from 'reactjs-popup';

import { 
  calldatabase,
  handleAirplaneSubmit, 
  handleAirportSubmit, 
  handlePersonSubmit, 
  handleGrantOrRevokePilotLicenseSubmit, 
  handleOfferFlightSubmit, 
  handleFlightLandingSubmit,
  handleFlightTakeoffSubmit,
  handlePassengerBoardSubmit,
  handlePassengerDisembarkSubmit,
  handleAssignPilotSubmit,
  handleRecycleCrewSubmit,
  handleRetireFlightSubmit,
  handleSimulationCycleSubmit
} from './procedureHandlers';
import AddAirplaneForm from './components/AddAirplane';
import AddAirportForm from './components/AddAirport';
import AddPersonForm from './components/AddPersonForm';
import GrantOrRevokePilotLicense from './components/GrantOrRevokePilotLicense';
import OfferFlight from './components/OfferFlight';
import FlightLanding from './components/FlightLanding';
import FlightTakeoff from './components/FlightTakeoff';
import PassengersBoard from './components/PassengersBoard';
import PassengersDisembark from './components/PassengersDisembark';
import AssignPilot from './components/AssignPilot';
import RecycleCrew from './components/RecycleCrew';
import RetireFlight from './components/RetireFlight';
import SimulationCycle from './components/SimulationCycle';

import DataTable from './datatable';

function App() {
  // -------- View Variables -------- //
  const [data, setData] = useState([]);
  
  // -------- End of View Variables -------- //
  

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const getView = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await calldatabase(query)
      console.log(response)
      setData(response['results'])
    } catch (err) {
      console.error('Error fetching airlines:', err);
      setError('Failed to load new data. Check your connection to the database server.');
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className="container">
      <div className="column left">
        <h2>Procedures</h2>
        <div>
          <Popup
            trigger={<button className="popup-button">Add Airplane</button>}
            modal
            nested
          >
            {(close) => (
              <AddAirplaneForm
                onCancel={close}
                onSubmit={(data) => {
                  handleAirplaneSubmit(data);
                  close();
                }}
              />
            )}
          </Popup>
          
          <Popup
            trigger={<button className="popup-button">Add Airport</button>}
            modal
            nested
          >
            {(close) => (
              <AddAirportForm
                onCancel={close}
                onSubmit={(data) => {
                  handleAirportSubmit(data);
                  close();
                }}
              />
            )}
          </Popup>

          <Popup
            trigger={<button className="popup-button">Add Person</button>}
            modal
            nested
          >
            {(close) => (
              <AddPersonForm
                onCancel={close}
                onSubmit={(data) => {
                  handlePersonSubmit(data);
                  close();
                }}
              />
            )}
          </Popup>

          <Popup
            trigger={<button className="popup-button">Grant or Revoke Pilot License</button>}
            modal
            nested
          >
            {(close) => (
              <GrantOrRevokePilotLicense
                onCancel={close}
                onSubmit={(data) => {
                  handleGrantOrRevokePilotLicenseSubmit(data);
                  close();
                }}
              />
            )}
          </Popup>

          <Popup
            trigger={<button className="popup-button">Offer Flight</button>}
            modal
            nested
          >
            {(close) => (
              <OfferFlight
                onCancel={close}
                onSubmit={(data) => {
                  handleOfferFlightSubmit(data);
                  close();
                }}
              />
            )}
          </Popup>

          <Popup
            trigger={<button className="popup-button">Land Flight</button>}
            modal
            nested
          >
            {(close) => (
              <FlightLanding
                onCancel={close}
                onSubmit={(data) => {
                  handleFlightLandingSubmit(data);
                  close();
                }}
              />
            )}
          </Popup>

          <Popup
            trigger={<button className="popup-button">Takeoff Flight</button>}
            modal
            nested
          >
            {(close) => (
              <FlightTakeoff
                onCancel={close}
                onSubmit={(data) => {
                  handleFlightTakeoffSubmit(data);
                  close();
                }}
              />
            )}
          </Popup>

          <Popup
            trigger={<button className="popup-button">Passengers Board</button>}
            modal
            nested
          >
            {(close) => (
              <PassengersBoard
                onCancel={close}
                onSubmit={(data) => {
                  handlePassengerBoardSubmit(data);
                  close();
                }}
              />
            )}
          </Popup>

          <Popup
            trigger={<button className="popup-button">Passengers Disembark</button>}
            modal
            nested
          >
            {(close) => (
              <PassengersDisembark
                onCancel={close}
                onSubmit={(data) => {
                  handlePassengerDisembarkSubmit(data);
                  close();
                }}
              />
            )}
          </Popup>

          <Popup
            trigger={<button className="popup-button">Assign Pilot</button>}
            modal
            nested
          >
            {(close) => (
              <AssignPilot
                onCancel={close}
                onSubmit={(data) => {
                  handleAssignPilotSubmit(data);
                  close();
                }}
              />
            )}
          </Popup>

          <Popup
            trigger={<button className="popup-button">Recycle Crew</button>}
            modal
            nested
          >
            {(close) => (
              <RecycleCrew
                onCancel={close}
                onSubmit={(data) => {
                  handleRecycleCrewSubmit(data);
                  close();
                }}
              />
            )}
          </Popup>

          <Popup
            trigger={<button className="popup-button">Retire Flight</button>}
            modal
            nested
          >
            {(close) => (
              <RetireFlight
                onCancel={close}
                onSubmit={(data) => {
                  handleRetireFlightSubmit(data);
                  close();
                }}
              />
            )}
          </Popup>

          <Popup
            trigger={<button className="popup-button">Simulate Cycle</button>}
            modal
            nested
          >
            {(close) => (
              <SimulationCycle
                onCancel={close}
                onSubmit={(data) => {
                  handleSimulationCycleSubmit(data);
                  close();
                }}
              />
            )}
          </Popup>

        </div>
      </div>

      <div className="column right">
        <h2>View Info</h2>
        <Popup
            trigger={<button className="popup-button">View Flights on the Ground</button>}
            modal
            nested
            onOpen={() => getView('select * from flights_on_the_ground;')}
            contentStyle={{
              width: '90%',
              maxWidth: '1200px',
              padding: '20px',
              overflow: 'auto'
            }}
          >
            {() => (
              <div>
                <h3>Flights on the Ground</h3>
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <DataTable data={data} />
              </div>
            )}
          </Popup>

          <Popup
            trigger={<button className="popup-button">View People in the Air</button>}
            modal
            nested
            onOpen={() => getView('select * from people_in_the_air;')}
            contentStyle={{
              width: '90%',
              maxWidth: '1200px',
              padding: '20px',
              overflow: 'auto'
            }}
          >
            {() => (
              <div>
                <h3>People in the Air</h3>
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <DataTable data={data} />
              </div>
            )}
          </Popup>

          <Popup
            trigger={<button className="popup-button">View People on the Ground</button>}
            modal
            nested
            onOpen={() => getView('select * from people_on_the_ground;')}
            contentStyle={{
              width: '90%',
              maxWidth: '1200px',
              padding: '20px',
              overflow: 'auto'
            }}
          >
            {() => (
              <div>
                <h3>People on the Ground</h3>
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <DataTable data={data} />
              </div>
            )}
          </Popup>

          <Popup
            trigger={<button className="popup-button">View Route Summary</button>}
            modal
            nested
            onOpen={() => getView('select * from route_summary;')}
            contentStyle={{
              width: '90%',
              maxWidth: '1200px',
              padding: '20px',
              overflow: 'auto'
            }}
          >
            {() => (
              <div>
                <h3>Route Summary</h3>
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <DataTable data={data} />
              </div>
            )}
          </Popup>

          <Popup
            trigger={<button className="popup-button">View Alternate Airports</button>}
            modal
            nested
            onOpen={() => getView('select * from alternative_airports;')}
            contentStyle={{
              width: '90%',
              maxWidth: '1200px',
              padding: '20px',
              overflow: 'auto'
            }}
          >
            {() => (
              <div>
                <h3>Alternate Airports</h3>
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <DataTable data={data} />
              </div>
            )}
          </Popup>
      </div>
    </div>
  );
}

export default App;
