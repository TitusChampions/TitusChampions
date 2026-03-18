import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#E5E5E5",
        color: "#2D77B3",
        fontFamily: "'Figtree', sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap');`}</style>
      
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.5rem 2rem",
        }}
      >
        <h1 style={{ fontSize: "48px", margin: 0 }}>
          <span style={{ color: "#2D77B3" }}>CHAMP</span>
          <span style={{ color: "#94C951" }}>IONS</span>
        </h1>
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <Link href="/" style={{ fontSize: "18px", color: "#2D77B3", textDecoration: "none" }}>
            Guest
          </Link>
          <Link href="/login" style={{ fontSize: "18px", color: "#2D77B3", textDecoration: "none" }}>
            Log In
          </Link>
        </div>
      </div>

      <hr
        style={{
          height: "1px",
          border: "0",
          backgroundColor: "#2D77B3",
          margin: 0,
        }}
      />

      <div
        style={{
          margin: "0 auto",
          maxWidth: "72rem",
          padding: "1.5rem 1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >

        <p style={{ textAlign: "center", fontSize: "30px", marginBottom: "3rem" }}>
          Welcome to Champions!
        </p>

        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: "0.75rem",
          }}
        >
          <Link
            href="/excercise"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <span style={{ marginBottom: "0.5rem", fontSize: "0.875rem", fontWeight: "500" }}>
              Physical Performance
            </span>
            <Image
              src="/assets/pillar.png"
              alt="Physical Performance pillar"
              width={280}
              height={224}
              style={{ transition: "transform 0.3s ease" }}
            />
          </Link>

          <Link
            href="/nutrition"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <span style={{ marginBottom: "0.5rem", fontSize: "0.875rem", fontWeight: "500" }}>
              Nutrition
            </span>
            <Image
              src="/assets/pillar.png"
              alt="Nutrition pillar"
              width={280}
              height={224}
              style={{ transition: "transform 0.3s ease" }}
            />
          </Link>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image src="/assets/mascot.png" alt="Mascot" width={280} height={224} />
          </div>

          <Link
            href="/mental_health"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <span style={{ marginBottom: "0.5rem", fontSize: "0.875rem", fontWeight: "500" }}>
              Mental Health
            </span>
            <Image
              src="/assets/pillar.png"
              alt="Mental Health pillar"
              width={280}
              height={224}
              style={{ transition: "transform 0.3s ease" }}
            />
          </Link>

          <Link
            href="/rest_recovery"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <span style={{ marginBottom: "0.5rem", fontSize: "0.875rem", fontWeight: "500" }}>
              Rest and Recovery
            </span>
            <Image
              src="/assets/pillar.png"
              alt="Rest and Recovery pillar"
              width={280}
              height={224}
              style={{ transition: "transform 0.3s ease" }}
            />
          </Link>
        </div>
      </div>

      <hr
        style={{
          height: "1px",
          border: "0",
          backgroundColor: "#2D77B3",
          margin: "1.5rem 0 0 0",
          width: "100%",
        }}
      />
    </main>
  );
}
