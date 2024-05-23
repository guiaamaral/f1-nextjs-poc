export type Driver = {
    driverId: string;
    permanentNumber: string;
    code: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;
}

export type Drivers = {
    MRData: {
        DriverTable: {
            season: string;
            Drivers: Driver[]
        }
    }
}

export type Race = {
    raceName: string;
    date: string;
    time: string;
    Circuit: {
        circuitId: string;
        circuitName: string;
        Location: {
            locality: string;
            country: string;
        }
    };
    Qualifying: {
        date: string;
        time: string;
    };
}

export type RacesSchedule = {
    MRData: {
        RaceTable: {
            Races: Race[]
        }
    }
}

export type DriversPosition = {
    position: string;
    points: string;
    Driver: Driver;
}

export type Positions = {
    MRData: {
        StandingsTable: {
            StandingsLists: [
                {
                    season: string;
                    DriverStandings: DriversPosition[]
                }
            ]
        }
    }
}