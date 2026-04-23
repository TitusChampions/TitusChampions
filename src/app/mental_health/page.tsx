"use client";

import React, { useState, useEffect, CSSProperties } from 'react';
import Link from "next/link";
import Image from "next/image";

const affirmations = [
  "My feelings matter, and it's okay to talk about them.",
  "I am allowed to take breaks when I need them.",
  "I can ask for help when something feels hard.",
  "I am learning how to handle big emotions.",
  "I am more than my mistakes.",
  "I can be kind to myself, even on tough days.",
  "It's okay to feel sad, mad, or confused sometimes.",
  "I am doing my best, and that is enough.",
  "I can calm my body with deep breaths.",
  "I am safe to be myself.",
  "I don't have to be perfect to be loved.",
  "My thoughts do not control me - I can choose how I respond.",
  "I can take things one step at a time.",
  "I am growing and learning every day.",
  "It's okay if today feels harder than yesterday.",
  "I am allowed to change my mind.",
  "I can handle challenges, even if they feel scary at first.",
  "I am proud of myself for trying.",
  "I can let go of worries that are not helping me.",
  "I deserve care, rest, and kindness.",
  "I can talk to someone I trust when I feel overwhelmed.",
  "My feelings will not last forever.",
  "I am brave for facing my feelings.",
  "I can make mistakes and still be a good person.",
  "I am learning new ways to handle hard things.",
  "I can choose to be gentle with myself.",
  "It's okay to need extra time.",
  "I am strong in ways I can't always see.",
  "I am allowed to voice my feelings.",
  "I can find calm again after feeling upset.",
  "I am worthy just as I am.",
  "I can notice the good things, even on bad days.",
  "I don't have to handle everything alone.",
  "I can express my feelings in healthy ways.",
  "I am allowed to feel proud of myself.",
  "I can start fresh tomorrow.",
  "My voice matters.",
  "I am learning how to take care of my mind.",
  "I am loved and supported.",
  "I believe in my ability to grow."
];

function AffirmationCard() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % affirmations.length);
        setVisible(true);
      }, 800);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      maxWidth: '500px',
      margin: '40px auto',
      padding: '24px',
      borderRadius: '16px',
      backgroundColor: '#f8fafc',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      border: '2px solid #2D77B3',
      fontFamily: "'Figtree', sans-serif"
    }}>
      <h3 style={{
        fontSize: '0.9rem',
        color: '#2D77B3',
        marginBottom: '16px',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        textAlign: 'center' as const, 
        fontWeight: 'bold'
      }}>
        Daily Affirmation
      </h3>
      <div style={{ minHeight: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{
          fontSize: '1.25rem',
          textAlign: 'center' as const, 
          color: '#1e293b',
          transition: 'opacity 0.8s ease-in-out',
          opacity: visible ? 1 : 0,
          lineHeight: '1.5',
          margin: 0,
          fontStyle: 'italic'
        }}>
          "{affirmations[index]}"
        </p>
      </div>
    </div>
  );
}

export default function MentalHealth() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "white", color: "#2D77B3", fontFamily: "'Figtree', sans-serif", flexDirection: "column" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap');`}</style>
      
      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <div style={{ width: "150px", borderRight: "1px solid #2D77B3", padding: "2rem 1rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
          <div style={{ width: "60px", height: "60px", backgroundColor: "#ccc", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: "32px" }}>👤</span>
          </div>
          <nav style={{ display: "flex", flexDirection: "column", gap: "1.5rem", width: "100%" }}>
            <Link href="/" style={{ color: "#2D77B3", textDecoration: "none", fontSize: "16px", textAlign: "center" }}>Home</Link>
            <Link href="/exercise" style={{ color: "#2D77B3", textDecoration: "none", fontSize: "16px", textAlign: "center" }}>Physical Performance</Link>
            <Link href="/nutrition" style={{ color: "#2D77B3", textDecoration: "none", fontSize: "16px", textAlign: "center" }}>Nutrition</Link>
            <Link href="/rest_recovery" style={{ color: "#2D77B3", textDecoration: "none", fontSize: "16px", textAlign: "center" }}>Rest and Recovery</Link>
          </nav>
        </div>

        <div style={{ flex: 1, padding: "2rem", display: "flex", flexDirection: "column" }}>
          <h1 style={{ fontSize: "36px", color: "#2D77B3", marginBottom: "0", textAlign: "center" }}>Mental Health Pillar</h1>
          <hr style={{ borderTop: "1px solid #2D77B3", borderBottom: "none", margin: "2rem 0", width: "100%" }} />

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(220px, 1fr))",
            gap: "2rem",
            maxWidth: "1000px",
            margin: "0 auto",
            alignContent: "start"
          }}>
            <Link href="/exercise_minigames" style={buttonStyle("#94C951", "150px", "1/2", "1/2")}>Outdoor Workout</Link>
            <Link href="/exercise_minigames" style={buttonStyle("#2D77B3", "220px", "2/3", "1/2")}>Minigames!</Link>
            <Link href="/exercise_minigames" style={buttonStyle("#94C951", "150px", "3/4", "1/2")}>Emotion Tracker</Link>
            <Link href="/exercise_minigames" style={buttonStyle("#94C951", "150px", "1/2", "2/3")}>Affirmation Station</Link>
            
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gridColumn: "2/3", gridRow: "2/4" }}>
              <Image src="/assets/mascot.png" alt="Mascot" width={200} height={280} />
            </div>

            <Link href="/exercise_minigames" style={buttonStyle("#94C951", "150px", "3/4", "2/3")}>⭐ Favorites</Link>
            <Link href="/exercise_minigames" style={buttonStyle("#94C951", "150px", "3/4", "3/4")}>Tips & Tricks</Link>
          </div>

          <AffirmationCard />
        </div>
      </div>
    </div>
  );
}

const buttonStyle = (bgColor: string, height: string, col: string, row: string): CSSProperties => ({
  backgroundColor: bgColor,
  padding: "2rem",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: height,
  color: "white",
  fontSize: "24px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center", 
  cursor: "pointer",
  gridColumn: col,
  gridRow: row
});