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
  console.log(props.item)
  const pdf = new jsPDF("p", "mm", "a4");
  const stringHTML = `<div>${props.item.claimantName}</div>
  <div>${props.item.address1}</div>
  <div>${props.item.dayPhone1}</div>
  <div>${props.item.address1}</div>
  <div>${props.item.address1}</div>
  <div>${props.item.address1}</div><div>`
  pdf.fromHTML(stringHTML, 15, 20, {'width': 180});
  // pdf.save("pdf");
  return <div><button onClick={pdf.save('pdf')}></button></div>

}

export default PdfPage
