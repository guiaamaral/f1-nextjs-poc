import { DriversPosition } from "@/types"

export default function DriversList(props: {
  positions: DriversPosition[]
}) {
  return(
    <ol>
      {props.positions
        .map((driver: DriversPosition) => {
          return <li
            key={driver.position}>
              {driver.Driver.givenName} {driver.Driver.familyName}
              {driver.Driver.permanentNumber ? ` (#${driver.Driver.permanentNumber}) `: ' '}
              - {driver.points} points
            </li>
        })
      }
    </ol>
  )
}
