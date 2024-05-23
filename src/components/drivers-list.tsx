import { DriversPosition } from "@/types"

export default function DriversList(props: {
  positions: DriversPosition[]
}) {
  return(
    <div className="center-table">
      <table>
        <tr>
          <th>#</th>
          <th>Driver</th>
          <th>Points</th>
        </tr>
        {props.positions
          .map((driver: DriversPosition) => {
            return (
              <tr key={driver.position}>
                <td>{driver.position}</td>
                <td>
                  {driver.Driver.givenName} {driver.Driver.familyName}
                  {driver.Driver.permanentNumber ? ` (#${driver.Driver.permanentNumber}) `: ' '}
                </td>
                <td>{driver.points}</td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}
