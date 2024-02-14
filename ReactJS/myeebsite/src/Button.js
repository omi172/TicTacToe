export function Butt(props){
    function handle(){
        console.log("Hello World !!!" + {props})
    }
    return <button onClick={handle}>{props.children}</button>
}