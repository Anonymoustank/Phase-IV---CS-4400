const calldatabase = async (query) => {
    const response = await fetch('http://localhost:3000/api/execute-query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
      });
      
      const data = await response.json();
    //   console.log(data.results[0]);      
}


export const handleAirplaneSubmit = (formData) => {
    const query = `CALL add_airplane(
                        '${formData['airlineId']}',
                        '${formData['tailNum']}',
                        '${formData['seatCap']}',
                        '${formData['speed']}',
                        '${formData['locationId']}',
                        '${formData['planeType']}',
                        '${formData['maintained']}',
                        '${formData['model']}',
                        '${formData['neo']}'
                    )`
    calldatabase(query)
    console.log('Submitted airplane:', formData);
};
export const handleAirportSubmit = (formData) => {
    const query = `CALL add_airport(
            '${formData['airportId']}',
            '${formData['airportName']}',
            '${formData['city']}',
            '${formData['state']}',
            '${formData['country']}',
            '${formData['locationId']}'
        )`
    calldatabase(query)
    console.log('Submitted airport:', formData);
};
export const handlePersonSubmit = (formData) => {
    const query = `CALL add_person(
            '${formData['personId']}',
            '${formData['firstName']}',
            '${formData['lastName']}',
            '${formData['locationId']}',
            '${formData['taxId']}',
            '${formData['experience']}',
            '${formData['miles']}',
            '${formData['funds']}'
        )`
    calldatabase(query)
    console.log('Submitted person:', formData);
};
export const handleGrantOrRevokePilotLicenseSubmit = (formData) => {
    const query = `CALL grant_or_revoke_pilot_license(
            '${formData['personId']}',
            '${formData['license']}'
        )`
    calldatabase(query)
    console.log('Submitted GrantOrRevokePilotLicense:', formData);
};
export const handleOfferFlightSubmit = (formData) => {
    const query = `CALL offer_flight(
            '${formData['flightId']}',
            '${formData['routeId']}',
            '${formData['supportAirline']}',
            '${formData['supportTail']}',
            '${formData['progress']}',
            '${formData['nextTime']}',
            '${formData['cost']}'
        )`
    calldatabase(query)
    console.log('Submitted OfferFlight:', formData);
};
export const handleFlightLandingSubmit = (formData) => {
    const query = `CALL flight_landing(
            '${formData['flightId']}',
        )`
    calldatabase(query)
    console.log('Submitted FlightLanding:', formData);
};
export const handleFlightTakeoffSubmit = (formData) => {
    const query = `CALL flight_takeoff(
            '${formData['flightId']}',
        )`
    calldatabase(query)
    console.log('Submitted FlightTakeoff:', formData);
};
export const handlePassengerBoardSubmit = (formData) => {
    const query = `CALL passengers_board(
            '${formData['flightId']}',
        )`
    calldatabase(query)
    console.log('Submitted PassengersBoard:', formData);
};
export const handlePassengerDisembarkSubmit = (formData) => {
    const query = `CALL passengers_disembark(
            '${formData['flightId']}',
        )`
    calldatabase(query)
    console.log('Submitted PassengersDisembark:', formData);
};
export const handleAssignPilotSubmit = (formData) => {
    const query = `CALL assign_pilot(
            '${formData['ip_flightId']}',
            '${formData['ip_personId']}'
        )`
    calldatabase(query)
    console.log('Submitted AssignPilot:', formData);
};
export const handleRecycleCrewSubmit = (formData) => {
    const query = `CALL recycle_crew(
            '${formData['flightId']}',
        )`
    calldatabase(query)
    console.log('Submitted RecycleCrew:', formData);
};
export const handleRetireFlightSubmit = (formData) => {
    const query = `CALL retire_flight(
            '${formData['flightId']}',
        )`
    calldatabase(query)
    console.log('Submitted RetireFlight:', formData);
};
export const handleSimulationCycleSubmit = (formData) => {
    const query = `CALL simulation_cycle()`
    calldatabase(query)
    console.log('Submitted SimulationCycle:', formData);
};