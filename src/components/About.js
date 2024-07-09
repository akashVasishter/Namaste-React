import {Component} from "react"
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";




class About extends Component {
  constructor(props){

    super(props)
    console.log("Parent Constructor");
  }

  componentDidMount(){
    console.log("Parent component didmount");

  }
  
  render(){
   
    console.log("parent render");
    return(

        <div className="about-page">
          <div>
          <UserContext.Consumer>

            {
              ({loggedInUser}) => (

                <h1>{loggedInUser}</h1>
              )
            }  
            </UserContext.Consumer>
          </div>
          <UserClass name={"Vasishter"} contact={"@AVasisher"} city={"Bangalore"}/>
        </div>
        
    )
  }
}



export default About;