import { Driver } from "@/types"

export default function DriversList(props: {
  drivers: Driver[]
}) {
  return(
    <ul>
      {props.drivers
        .sort((a: any, b: any) => (a.givenName > b.givenName) ? 1 : ((b.givenName > a.givenName) ? -1 : 0))
        .map((driver: Driver) => {
          return <li key={driver.driverId}>{driver.permanentNumber ? `#${driver.permanentNumber}`: ''} {driver.givenName} {driver.familyName}</li>
        })
      }
    </ul>
  )
}
