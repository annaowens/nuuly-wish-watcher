// landingPage.styles.ts
import { CSSProperties } from 'react';

export const landingPageStyles: CSSProperties = {
  backgroundColor: '#FAF7F4',
  minHeight: '100vh',
};

export const headerTextStyles: CSSProperties = {
    color: '#A04100',
    fontFamily: "Ginto Nord, sans-serif",
    fontSize: "3.6rem",
    fontWeight: 800,
    letterSpacing: "0.3px",
    lineHeight: "55px"
}

export const subtextStyles: CSSProperties = {
    color: '#A04100',
    fontFamily: "Sharp Grotesk 20,sans-serif",
    fontSize: "1.2rem",
    fontWeight: 400,
    letterSpacing: ".3px",
    lineHeight: "20px",
    // TODO: make this wrap on smaller screens
}

export const buttonStyles: CSSProperties = {
  backgroundColor: '#DAB9AE',
  borderRadius: '15px',
  border: '1px solid #8E403A',
  color: '#8E403A',
};