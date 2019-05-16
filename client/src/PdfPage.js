import React from "react";
import { renderToString } from "react-dom/server";
import jsPDF from "jspdf";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const colstyle = {
  width: "30%"
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
  const stringHTML = `<div style={styles}>
      <h1 style={styles}>CLAIM AGAINST THE CITY AND COUNTY OF SAN FRANCISCO</h1>
      <p>Before completing this form please read the instructions on the back. Untimely claims will be returned. Please submit
      this form and supporting documentation to the <b> Controllers Office, Claims Division, 1390 Market Street, 7th Floor,
      San Francisco, CA 94102 </b> in person or by mail. </p>
      <p><b>** = REQUIRED ** = REQUIRED IF KNOWN</b></p>
      <table id="tab_customers" class="table table-striped" style={tableStyle}>
        <colgroup>
          <col span="1" style={colstyle} />
          <col span="1" style={colstyle} />
        </colgroup>
        <thead>
          <tr class="warning">
            <th>something</th>
            <th>something</th>
            <th>something else</th>
            <th>hmm</th>
            <th>laa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dec 13, 2017</td>
            <td>Jan 1, 2018</td>
            <td>NM Connect - NMETNMCM</td>
            <td>Dec 13, 2017</td>
            <td>Dec 31, 2018</td>
          </tr>
        </tbody>
      </table>
      <p>
    
      </p>
    </div>
  `
  
  // `<div> 1. Claimant's Name and Home Address (Please Print Clearly)
  //   ${props.item.claimantName}
  // <span>${props.item.address1}<br/>
  // <div>${props.item.city1}<span> ${props.item.state1}</div>
  // <br/>
  // <div>Telephone ${props.item.dayPhone1}
  // <span>${props.item.evePhone1}</div>`
  pdf.fromHTML(stringHTML, 15, 20, {'width': 180});
  pdf.save("pdf");
  return <div></div>
  // return <div><button onClick={pdf.save('pdf')}></button></div>

}

export default PdfPage
