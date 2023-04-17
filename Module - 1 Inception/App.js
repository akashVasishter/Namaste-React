



// <div id = parent>
//  <div id = child1>
//     <h1>iam a h1 tag</h1>
//     <h2>iam h2 tag</h2>
//     </div>   
{/* <div id = child1>
     <h1>iam a h1 tag</h1>
     <h2>iam h2 tag</h2>
     </div>    */}
// </div>

//React.createElement(object) => Html(Browser understands)
//createRoot() controls the contents of the container node you pass in.


const parent = React.createElement('div',{id:'parent'}, [

    React.createElement('div',{id:'child1'}, [
    React.createElement('h1',{},'Iam a h1 tag inside child1'),
    React.createElement('h2',{},'Iam a h2 tag inside child1'),
]),
React.createElement('div',{id:'child2'}, [
   React.createElement('h1',{},'Iam a h1 tag inside child2'),
    React.createElement('h2',{},'Iam a h2 tag inside child2'),
]),
]);
console.log(parent);
const nestedRoot = ReactDOM.createRoot(document.getElementById('nestedRoot'));
nestedRoot.render(parent);



const heading = React.createElement('h1',{id:'heading',xyz:'abc'},'Hello World from React!');
console.log(heading)// will return a object 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading); //render method will get the object convet it to a heading tag and then puts it in the root
