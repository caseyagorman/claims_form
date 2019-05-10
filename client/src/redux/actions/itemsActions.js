import * as types from "./actionTypes";
function formApi() {
  // return `http://localhost:4000/claims-form/add`;
  return `http://localhost:4000/form`;

}

function itemsApi() {
  // return `http://localhost:4000/claims-form/add`;
  return `http://localhost:4000/items`;

}

// function deleteItemApi() {
//   return "http://localhost:4000/api/delete-entry";
// }
export function receiveItems(items) {
  console.log(items)
  return { type: types.RECEIVE_ITEMS, items: items };
}


export function fetchItems() {
  return dispatch => {
    return fetch(itemsApi(), {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(items => dispatch(receiveItems(items.claimsForm)));
  };
}

export function addItem(entry) {
  return dispatch => {
    return fetch(formApi(), {
      method: "POST",
      mode: "cors", 
      headers: { 
        Accept: "application/json"
    },
      body: entry
    }
    ).then(response => {
      console.log("addItem shows response:", response)
    })
      .then(response => response && response.ok ? response.json() : false)
      // .then(() => dispatch(fetchItems()));
  };
}

// export function deleteItem(item) {
//   return dispatch => {
//     return fetch(deleteItemApi(), {
//       method: "POST",
//       mode: "cors",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       body: item
//     })
//       .then(response => response.json())
//       // .then(() => dispatch(fetchItems()));
//   };
// }

// export function answered(answer) {
//   return {
//     type: types.ANSWER,
//     payload: {
//       answer: answer
//     }
//   };
// }