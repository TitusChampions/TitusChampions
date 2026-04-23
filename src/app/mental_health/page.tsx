"use client";

import React, { useState, useEffect } from 'react';

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

export default function AffirmationCard() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % affirmations.length);
        setVisible(true);
      }, 800); 

    }, 6000); // Slower pace for better grounding

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      maxWidth: '400px',
      margin: '20px auto',
      padding: '24px',
      borderRadius: '12px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      border: '1px solid #e2e8f0',
      fontFamily: 'sans-serif'
    }}>
      <h3 style={{
        fontSize: '1.1rem',
        color: '#64748b',
        marginBottom: '16px',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        textAlign: 'center'
      }}>
        Daily Affirmations:
      </h3>
      
      <div style={{
        minHeight: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <p style={{
          fontSize: '1.25rem',
          textAlign: 'center',
          color: '#0f172a',
          transition: 'opacity 0.8s ease-in-out',
          opacity: visible ? 1 : 0,
          lineHeight: '1.5',
          margin: 0
        }}>
          {affirmations[index]}
        </p>
      </div>
    </div>
  );
}