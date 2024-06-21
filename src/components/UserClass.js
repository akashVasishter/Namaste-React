import React from "react"


class UserClass extends React.Component{

     constructor(props){
        super(props)

        console.log(props);

        this.state = {
          
            userInfo:{
            id:123,
            name:'akash',
            github:'https://github.com'
            }
        }
        console.log("children constructor");
     }

    async componentDidMount(){

        console.log("Child component didmount");
        try{
            const data = await fetch("https://api.github.com/users/akashVasishter");
            const json = await data.json();
            console.log(json);
            this.setState({
                userInfo:json
           })
        }
        catch(error){
        console.log('error occured');
       }
     }

     componentDidUpdate(){
        console.log("component did update");
     }

     //this function is called when we go to other page the component will unmount
     componentWillUnmount(){
        console.log('component will unmount');
     }

    render(){

        // const{name,contact,city} = this.props;
        const{count} = this.state;
        const{id,name,html_url} = this.state.userInfo;

        console.log("children render");
        return(
            <div className="user-details-class">
           <h2>Count[0]: {count}</h2>
           <button onClick={() => {this.setState({
            
            count:this.state.count + 1
            
           })}}> + </button>
          <ol>

          <li>ID: {id}</li>
            <li>Name:{name}</li>
            <li>github: {html_url}</li>
          </ol>

            </div>
        )
    }
}


export default UserClass;

/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      componentDid Update
 *
 *
 *
 *
 */