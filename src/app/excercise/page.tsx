import Link from "next/link"

function Excercise(){
    return(
        <div style={{backgroundColor:"white", height:"100vh"}}>
            <h1 style={{display:"flex",alignItems:"center", justifyContent:"center", color:"#2D77B3"}}>Excercise Page</h1>
            <hr></hr>
            {/* <div style={{borderLeft:"1px solid black", height:"100%", marginLeft:"100px"}}></div> */}
            <Link href="/excercise_minigames" style={{width:"100%", height:"100px", backgroundColor:"#2D77B3"}}>Minigames!</Link>
            <Link href="/excercise_minigames" style={{width:"100%", height:"100px", backgroundColor:"#94C951"}}>Tips and Tricks</Link>
            <Link href="/excercise_minigames" style={{width:"100%", height:"100px", backgroundColor:"#94C951"}}>Quick Workout</Link>
        </div>
    )
}

export default Excercise