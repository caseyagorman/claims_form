import React, {Component} from "react"
import { Table } from "react-bootstrap";
import DeleteEntry from "./DeleteEntry";
import PdfPage from "./PdfPage"


class EntryPage extends Component { 
  constructor(props){
    super(props)
    this.state = {displayingPDF: false} 
    this.displayPDF = this.displayPDF.bind(this)
  }

  displayPDF(){
    const newState = this.state.displayingPDF === false ? true : false 
    this.setState({ displayingPDF: newState} )
  }
  
  render(){
    return ( 
      <div className="container" style={{ fontSize: 14 }}>
        <br />
        <Table bordered>
          <thead>
            <tr>
              <th>Name</th>
              <th>Item</th> 
              <th>Image</th>
              <th>Print Pdf</th>
    
            </tr>
          </thead>
          <tbody>
            {this.props.items.map(item => {
              return (
                <tr>
                  <td>
                    <DeleteEntry item={item.entryId} />

                    {item.claimantName}
                  </td>
                  <td>{item.item1}</td>
                  <td style={{width: 50}}>
                    {item.image  && (
                    
                      <img
                        style={{ height: 150, maxWidth: 300 }}
                        alt="display form"
                        src={`data:image/jpeg;base64,${item.image}`}
                      />
                    )}
                  </td>
                  <td>
                    <button className="btn btn-outline-primary"  onClick={this.displayPDF}> Print</button>
                    {this.state.displayingPDF && (
                        <PdfPage item={item}/>
                    )}
                    </td>
                 
                
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    )  
  }
}

export default EntryPage