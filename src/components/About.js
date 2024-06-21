import {Component} from "react"
import UserClass from "./UserClass";




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
          <h1>Details</h1>
          <UserClass name={"Vasishter"} contact={"@AVasisher"} city={"Bangalore"}/>
        </div>
        
    )
  }
}



export default About;