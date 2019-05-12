import React from "react"
import { Table } from "react-bootstrap";
import DeleteEntry from "./DeleteEntry";
import MapContainer from "./MapContainer";
const EntryPage = props => (

<div className="container" style={{ fontSize: 14 }}>
        <br />
        <Table bordered>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
    
            </tr>
          </thead>
          <tbody>
            {props.items.map(function(item) {
              return (
                <tr>
                  <td>
                    {" "}
                    <DeleteEntry item={item.entryId} />
                    {console.log(typeof(item.claimantName))}

                    {item.claimantName}
                  </td>
                  <td style={{width: 50}}>
                    {item.image  && (
                    
                      <img
                        style={{ height: 150, maxWidth: 300 }}
                        alt="display form"
                        src={`data:image/jpeg;base64,${item.image}`}
                      />
                    )}
                  </td>
                 
                
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );


export default EntryPage