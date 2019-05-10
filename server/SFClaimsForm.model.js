const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SFClaimsForm = new Schema({
     img: 
        { image: Buffer, contentType: String },
    
  claimantName:{
      type: String,
      required: true
  },
  address1:{
      type: String
  }, 
  city1:{
      type: String
  }, 
  state1:{
      type: String 
  }, 
  dayPhone1:{
      type: String 
  },  
  evePhone1:{
      type: String  
  },  
  cellPhone1:{
      type: String  
  }, 
  address2:{
      type: String,
   
  }, 
  city2:{
      type: String  
  },
  state2:{
      type: String  
  },
  dayPhone2:{
      type: String  
  },  
  evePhone2:{
      type: String  
  },  
  cellPhone2: {
    type: String
  },
  dateOfBirth:{
      type: String  
  }, 
  ssn:{
      type: String  
  },
  dateOfIncident:{
      type: String,
    //   required: true
  },
  timeOfIncident:{
      type: String  
  }, 
  location:{
      type: String  
  }, 
  vehicle:{
      type: String  
  }, 

  basisOfClaim:{
    type: String,
 
  },

  cityEmployee:{
      type: String,
    //   required: true 
  },  
  description:{
      type: String  
  }, 
  item1:{
      type: String,
    //   required: true 
  }, 
  amount1:{
      type: String  
  },   
  item2:{
      type: String  
  }, 
  amount2:{
      type: String  
  },   
  item3:{
      type: String  
  }, 
  amount3:{
      type: String  
  },  
  item4:{
      type: String  
  }, 
  amount4:{
      type: String  
  },   
  total:{
      type: String  
  },  
  witness1:{
      type: String  
  },
  witnessAddress1:{
      type: String  
  },
  witnessPhone1:{
      type: String  
  },
  witness2:{
      type: String  
  },
  witnessAddress2:{
      type: String  
  },
  witnessPhone2:{
      type: String  
  },
  location:{
      type: String
  }
})

module.exports = mongoose.model('SFClaimsForm', SFClaimsForm)