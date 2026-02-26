import Link from "next/link";
import Image from "next/image";


export default function Home() {
  return (
    <div style={{backgroundColor:"#E5E5E5", height:"100vh", color:"#2D77B3"}}>
      <div>
        <h1 style={{fontSize:"80px", fontFamily:"Helvetica"}}>CHAMPIONS</h1>
      </div>
     <div> 
        <hr style={{border:"1px solid #2D77B3", width:"100%"}}></hr>
          <a style={{fontSize:"38px", fontFamily:"figtree",display:"flex", alignItems:"center", justifyContent:"center",
            marginTop:"20px"
          }}>
            Welcome to Champions!</a>
          <nav>
          <Link href="/rest_recovery"><Image src="/assets/pillar.png" alt="pillar" width="500" height="400" /></Link>
          </nav>
          <nav>
            <Link href="/nutrition"><Image src="/assets/pillar.png" alt="pillar" width="500" height="400" /></Link>
          </nav>
          <nav>
            <Link href="/mental_health"><Image src="/assets/pillar.png" alt="pillar" width="500" height="400" /></Link> 
          </nav>
          <nav>
            <Link href="/excercise"><Image src="/assets/pillar.png" alt="pillar" width="500" height="400" /></Link>
          </nav>
    </div>
    </div>
  );
}
