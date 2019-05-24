import React from "react";
import { renderToString } from "react-dom/server";
import jsPDF from "jspdf";
import { string } from "prop-types";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const divStyle = {
  border: "1px solid black"
}
const colstyle = {
  width: "50%"
};
const tableStyle = {
  width: "100%"
};
// const Prints = props => (
//   <div>
//     {console.log(props)}
//     <h3>{props.items.address1}</h3>
//     <h4>General Information</h4>
//     <table id="tab_customers" class="table table-striped" style={tableStyle}>
//       <colgroup>
//         <col span="1" style={colstyle} />
//         <col span="1" style={colstyle} />
//       </colgroup>
//       <thead>
//         <tr class="warning">
//           <th>{props.items.address1}</th>
//           <th>{props.items.claimantName}</th>
//           <th>{props.items.amount1}</th>
//           <th>{props.items.witness1}</th>
//           <th>{props.items.item1}</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Dec 13, 2017</td>
//           <td>Jan 1, 2018</td>
//           <td>NM Connect - NMETNMCM</td>
//           <td>Dec 13, 2017</td>
//           <td>Dec 31, 2018</td>
//         </tr>
//       </tbody>
//     </table>
//     <p>
//       {props.items.address1}{props.items.claimantName}
//     </p>
//   </div>
// );

const PdfPage = props => {
  console.log("props", props.item)
  const pdf = new jsPDF("p", "mm", "a4");
  const header = `
      <h1 style={styles}>CLAIM AGAINST THE CITY AND COUNTY OF SAN FRANCISCO</h1>
      <div>
      <p>Before completing this form please read the instructions on the back. Untimely claims will be returned. Please submit
      this form and supporting documentation to the <b> Controllers Office, Claims Division, 1390 Market Street, 7th Floor,
      San Francisco, CA 94102 </b> in person or by mail. </p>
      <p><b>** = REQUIRED ** = REQUIRED IF KNOWN</b></p>
`
    const address1 = `
          <b>1. Claimants Name and Address</b> (Please Print Clearly)<br/>
          *${props.item.claimantName} <br/>
          ${props.item.address1} 
          <br/>
          City ${props.item.city1} State ${props.item.state1} Zip ${props.item.zip1}
          <br/>
          Telephone ${props.item.dayPhone1}<span> ${props.item.evePhone1}<span> ${props.item.cellPhone1}</u>
    </div>
  `
  const address2 = `
  <b>2.Send official correspondence to:</b>
  <br/>
      <b>*</b>${props.item.claimantName} <br/>
      ${props.item.address2} 
      <br/>
      City ${props.item.city2} State ${props.item.state2} Zip ${props.item.zip2}
      <br/>
      Telephone ${props.item.dayPhone2}<span> ${props.item.evePhone2}<span> ${props.item.cellPhone2}</u>
</div>
`
const dateOfBirth = `
<b>3. Date of Birth</b> <br/> ${props.item.dateOfBirth.slice(0,-12)}`

const SSN = `
<b>4. SSN</b> <br/> ${props.item.ssn}`

const dateOfIncident = `
<b>5. Date of Incident</b> <br/> ${props.item.dateOfIncident.slice(0,-12)}`

const timeOfIncident = `
<b>6. Time Of Incident</b> <br/> ${props.item.timeOfIncident.slice(-12,-1)}`

const location = 
`<b>7. Location of Incident or Accident</b> <br/><b>**</b>${props.item.locationOfIncident}`

const vehicle = 
`<b>8. Claimant Vehicle License Plate, Type, Mileage, & Year</b> <br/><b>**</b>${props.item.vehicle}`
  // `<div> 1. Claimant's Name and Home Address (Please Print Clearly)
  //   ${props.item.claimantName}
  // <span>${props.item.address1}<br/>
  // <div>${props.item.city1}<span> ${props.item.state1}</div>
  // <br/>
  // <div>Telephone ${props.item.dayPhone1}
  // <span>${props.item.evePhone1}</div>`

  const basisOfClaim = 
  `<p><b>9. Basis of Claim. </b>State in detail all facts and circumstances of the incident. Identify all persons, entities, property and City
  departments involved. State why you believe the City is responsible for the alleged injury, property damage or loss.</p> 
  <br/>${props.item.basisOfClaim}`

const employee = `Name, I.D. Number and City Department
of City Employee who allegedly caused injury or loss<br/> ${props.item.employee}`

  pdf.fromHTML(header, 15, 20, {'width': 180});
  pdf.rect(5, 80, 100, 35);
  pdf.fromHTML(address1, 7, 70, {'width': 180});
  pdf.rect(108, 80, 100, 35);
  pdf.fromHTML(address2, 110, 70, {'width': 180});
  pdf.rect(5, 120, 48, 10);
  pdf.fromHTML(dateOfBirth, 7, 115, {'width': 180});
  pdf.rect(57, 120, 48, 10);
  pdf.fromHTML(SSN, 57, 115, {'width': 180});
  pdf.rect(108, 120, 48, 10);
  pdf.fromHTML(dateOfIncident, 110, 115, {'width': 180});
  pdf.rect(160, 120, 48, 10);
  pdf.fromHTML(timeOfIncident, 160, 115, {'width': 180});

  pdf.fromHTML(location, 7, 130, {'width': 180});
  pdf.rect(5, 135, 100, 10);
  pdf.fromHTML(vehicle, 110, 130, {'width': 180});
  pdf.rect(108, 135, 100, 10);
  pdf.fromHTML(basisOfClaim, 7, 146, {'width': 180});
  pdf.rect(5, 150, 203, 30);
  pdf.fromHTML(employee, 7, 182, {'width': 180});
  pdf.rect(5, 185, 90, 7);
  pdf.rect(5, 192, 90, 7);
  pdf.fromHTML(employee, 87, 182, {'width': 180});
  pdf.rect(95, 185, 30, 7);
  pdf.rect(95, 192, 30, 7);
  pdf.save("pdf");
  return <div></div>
  // return <div><button onClick={pdf.save('pdf')}></button></div>

}




// class Boilerplate extends React.Component {
//   state={}
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

// const data = {
//   firstName: 'john',
//   lastName: 'donohue',
//   email: 'john.donohue@trendcycle.co',
// }

// class PdfPage extends React.Component {
//   state={}
//   componentDidMount() {
//     this.setup()
//   }
//   download=event=>{
//     this.doc.save('sample.pdf')
//   }
//   setup() {
//     const doc = new jsPDF()
//     const el = document.getElementById('content')
//     if (typeof(el)==='object'&&el!==null) {
//       const width = 170
//       const elementHandlers = {
//         '#ignorePDF': (element,renderer)=>{
//           return true
//         }
//       }
//       doc.fromHTML(el,15,15,{width,elementHandlers},()=>{
//         const pdf = doc.output('datauristring')
//         if (typeof(pdf)==='string'&&pdf.length>0) {
//           this.setState({pdf})
//         }
//       })
//     }
//     this.doc = doc
//   }
//   renderPreview() {
//     const {pdf} = this.state
//     if (typeof(pdf)==='string'&&pdf.length>0) {
//       return (
//         <div style={{
//             height:'650px',
//             position:'relative',
//             zIndex:999,
//             border: '1px solid pink',
//           }}>
//           <embed className="pdfobject" src={pdf} type="application/pdf" style={{
//               overflow: 'auto',
//               width: '100%',
//               height: '100%',
//             }} internalinstanceid="30"></embed>
//           {/*
//             <iframe title="preview" src={pdf} style={{
//                 width: '100%',
//                 height: '700px',
//               }} frameBorder="0"></iframe>
//           */}
//         </div>
//       )
//     }
//     return null
//   }
//   renderData() {
//     const keys = Object.keys(data)
//     return (
//       <div class="row">
//         {
//           keys.map((e,i)=>(
//             <div class="col">
//               <label>{e}</label>
//               <div className="data">{data[e]}</div>
//             </div>
//           ))
//         }
//       </div>
//     )
//   }
//   render() {
//     return (
//       <div className="container">
//         {/* <h1>ReactJS: jsPDF</h1>
        
//         <div className="row">
//           <div className="col-6">
//             <div className="mb-3"> */}
//               <button className="btn btn-outline-primary" onClick={this.download}>Save as PDF</button>
//             {/* </div>
//             <div id="content">
//               <h2>Title</h2>
//               <p className="lead">Lead</p>
//               {this.renderData()}
//             </div>
//           </div>
//           <div className="col-6">
//             {/* {this.renderPreview()} */}
//           </div>
//       //   </div> */}
//       // </div>
//     )
//   }
// }




export default PdfPage
