import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#E5E5E5",
        color: "#2D77B3",
        fontFamily: "figtree",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap');`}</style>
      <div
        style={{
          margin: "0 auto",
          maxWidth: "72rem",
          padding: "2.5rem 1.5rem",
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "80px" }}>
          CHAMPIONS
        </h1>

        <hr
          style={{
            margin: "2rem 0",
            height: "1px",
            width: "100%",
            border: "0",
            backgroundColor: "#2D77B3",
          }}
        />

        <p style={{ textAlign: "center", fontSize: "38px" }}>
          Welcome to Champions!
        </p>

        <div
          style={{
            marginTop: "3rem",
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gridTemplateRows: "repeat(3, auto)",
            alignItems: "center",
            gap: "2.5rem",
          }}
        >
          <Link
            href="/excercise"
            style={{
              gridColumn: "1 / 2",
              gridRow: "1 / 2",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Image
              src="/assets/pillar.png"
              alt="Exercise pillar"
              width={420}
              height={340}
              style={{ transition: "transform 0.3s ease" }}
            />
            <span style={{ marginTop: "1rem", fontSize: "1.125rem" }}>
              Exercise
            </span>
          </Link>

          <Link
            href="/nutrition"
            style={{
              gridColumn: "3 / 4",
              gridRow: "1 / 2",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Image
              src="/assets/pillar.png"
              alt="Nutrition pillar"
              width={420}
              height={340}
              style={{ transition: "transform 0.3s ease" }}
            />
            <span style={{ marginTop: "1rem", fontSize: "1.125rem" }}>
              Nutrition
            </span>
          </Link>

          <div
            style={{
              gridColumn: "2 / 3",
              gridRow: "2 / 3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image src="/assets/mascot.png" alt="Mascot" width={360} height={360} />
          </div>

          <Link
            href="/mental_health"
            style={{
              gridColumn: "1 / 2",
              gridRow: "3 / 4",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Image
              src="/assets/pillar.png"
              alt="Mental health pillar"
              width={420}
              height={340}
              style={{ transition: "transform 0.3s ease" }}
            />
            <span style={{ marginTop: "1rem", fontSize: "1.125rem" }}>
              Mental Health
            </span>
          </Link>

          <Link
            href="/rest_recovery"
            style={{
              gridColumn: "3 / 4",
              gridRow: "3 / 4",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Image
              src="/assets/pillar.png"
              alt="Rest & recovery pillar"
              width={420}
              height={340}
              style={{ transition: "transform 0.3s ease" }}
            />
            <span style={{ marginTop: "1rem", fontSize: "1.125rem" }}>
              Rest &amp; Recovery
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
