import Link from "next/link"
import Image from "next/image"

function MentalHealth(){
    return(
         <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "white", color: "#2D77B3", fontFamily: "'Figtree', sans-serif", flexDirection: "column" }}>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap');`}</style>
            
            <div style={{ display: "flex", flex: 1 }}>
                <div style={{ 
                    width: "150px", 
                    borderRight: "1px solid #2D77B3", 
                    padding: "2rem 1rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "2rem"
                }}>
                    <div style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: "#ccc",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <span style={{ fontSize: "32px" }}>👤</span>
                    </div>

                    <nav style={{ display: "flex", flexDirection: "column", gap: "1.5rem", width: "100%" }}>
                        <Link href="/" style={{ color: "#2D77B3", textDecoration: "none", fontSize: "16px", textAlign: "center" }}>
                            Home
                        </Link>
                        <Link href="/excercise" style={{ color: "#2D77B3", textDecoration: "none", fontSize: "16px", textAlign: "center" }}>
                            Physical Performance
                        </Link>
                        <Link href="/nutrition" style={{ color: "#2D77B3", textDecoration: "none", fontSize: "16px", textAlign: "center" }}>
                            Nutrition
                        </Link>
                        <Link href="/rest_recovery" style={{ color: "#2D77B3", textDecoration: "none", fontSize: "16px", textAlign: "center" }}>
                            Rest and Recovery
                        </Link>
                    </nav>
                </div>

                <div style={{ flex: 1, padding: "2rem", display: "flex", flexDirection: "column" }}>
                    <h1 style={{ fontSize: "36px", color: "#2D77B3", marginBottom: "0", textAlign: "center" }}>
                        Mental Health Pillar
                    </h1>

                    <hr style={{ borderTop: "1px solid #2D77B3", borderBottom: "none", margin: "2rem 0", width: "100vw", marginLeft: "-2rem", marginRight: "-2rem" }} />

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, minmax(220px, 1fr))",
                        gridTemplateRows: "auto auto auto",
                        gap: "2rem",
                        maxWidth: "1000px",
                        margin: "0 auto",
                        alignContent: "start"
                    }}>
                        <Link 
                            href="/excercise_minigames" 
                            style={{
                                backgroundColor: "#94C951",
                                padding: "2rem",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "150px",
                                color: "white",
                                fontSize: "28px",
                                fontWeight: "bold",
                                textDecoration: "none",
                                textAlign: "center",
                                cursor: "pointer",
                                gridColumn: "1 / 2",
                                gridRow: "1 / 2"
                            }}
                        >
                            Outdoor Workout
                        </Link>

                        <Link 
                            href="/excercise_minigames" 
                            style={{
                                backgroundColor: "#2D77B3",
                                padding: "2rem",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "220px",
                                color: "white",
                                fontSize: "28px",
                                fontWeight: "bold",
                                textDecoration: "none",
                                textAlign: "center",
                                cursor: "pointer",
                                gridColumn: "2 / 3",
                                gridRow: "1 / 2"
                            }}
                        >
                            Minigames!
                        </Link>

                        <Link 
                            href="/excercise_minigames" 
                            style={{
                                backgroundColor: "#94C951",
                                padding: "2rem",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "150px",
                                color: "white",
                                fontSize: "28px",
                                fontWeight: "bold",
                                textDecoration: "none",
                                textAlign: "center",
                                cursor: "pointer",
                                gridColumn: "3 / 4",
                                gridRow: "1 / 2"
                            }}
                        >
                            Emotion Tracker
                        </Link>

                        <Link 
                            href="/excercise_minigames" 
                            style={{
                                backgroundColor: "#94C951",
                                padding: "2rem",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "150px",
                                color: "white",
                                fontSize: "24px",
                                fontWeight: "bold",
                                textDecoration: "none",
                                textAlign: "center",
                                cursor: "pointer",
                                gridColumn: "1 / 2",
                                gridRow: "2 / 3"
                            }}
                        >
                            Affirmation Station
                        </Link>

                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gridColumn: "2 / 3",
                            gridRow: "2 / 4"
                        }}>
                            <Image 
                                src="/assets/mascot.png" 
                                alt="Mascot" 
                                width={200} 
                                height={280} 
                            />
                        </div>

                        <Link 
                            href="/excercise_minigames" 
                            style={{
                                backgroundColor: "#94C951",
                                padding: "2rem",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "150px",
                                color: "white",
                                fontSize: "28px",
                                fontWeight: "bold",
                                textDecoration: "none",
                                textAlign: "center",
                                cursor: "pointer",
                                gridColumn: "3 / 4",
                                gridRow: "2 / 3"
                            }}
                        >
                            ⭐ Favorites
                        </Link>

                        <Link 
                            href="/excercise_minigames" 
                            style={{
                                backgroundColor: "#94C951",
                                padding: "2rem",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "150px",
                                color: "white",
                                fontSize: "28px",
                                fontWeight: "bold",
                                textDecoration: "none",
                                textAlign: "center",
                                cursor: "pointer",
                                gridColumn: "3 / 4",
                                gridRow: "3 / 4"
                            }}
                        >
                            Tips & Tricks
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MentalHealth