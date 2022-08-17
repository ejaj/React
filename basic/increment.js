// console.log(React)
// console.log(ReactDOM)
const domContainer = document.querySelector("#root")
// const myElement = React.createElement(
//     "div", 
//     null, 
//     [
//         React.createElement("p", null, "Hello World"),
//         React.createElement("p", null, "Hello Bangladesh"),
//     ]
// )


const Increment = () => {
    const [counter, setCounter] = React.useState(0)
    return (
        <div>
        <h1 id="display">{counter}</h1>
        <div>
            <button id="button" onClick={
                () => setCounter(counter+1)
            }> Increment +</button>
        </div>
        </div>
    );
};


ReactDOM.render(
    <div class="container">
    <Increment/>
    <Increment/>
    <Increment/>
    </div>,
    
    domContainer
)

// let number = 0
// const button = document.querySelector("#button")
// const display = document.querySelector("#display")
// button.addEventListener("click", () => {
//     number++;
//     display.textContent = number;
    
// })