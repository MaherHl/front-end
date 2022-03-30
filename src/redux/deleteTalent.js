import axios from "axios"

  function deleteTalent(id){
     const response= axios.delete('')
      
      return response
  }
  

const talentReducer= (state={},{type,payload})=>{
    switch (type) {
        case 'displayAll':
            return payload
        case "addTalent":
            return "talent added"
            
          case "deleteTalent":
              return deleteTalent()
              
            case "filter":  
           
    
        default:
            return  state
    }

}
export default talentReducer