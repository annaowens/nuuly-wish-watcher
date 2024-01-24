// floatingWatchList.styles.ts
import { CSSProperties } from 'react';


export const containerClass = 'square-container';
export const headerClass = 'square-header';
export const subTextClass = 'square-subtext';
export const listClass = 'square-list';
export const buttonContainerClass = 'square-button-container';

export const floatingWatchListStyles: CSSProperties = {
  backgroundColor: '#DAB9AE',
  borderRadius: '10px',
  padding: '20px',
  border: '1px solid #8E403A',
  display: 'flex',
  right: '0',
  flexDirection: 'column',
  position: 'fixed',
  bottom: '0',
  width: '350px',
  overflow: 'hidden',
};

export const headerStyles: CSSProperties = {
  color: '#8E403A',
  fontWeight: 'bold',
  fontSize: '1.5rem',
};

export const listStyles: CSSProperties = {
  flex: '1',
  overflowY: 'auto',
  marginBottom: '20px',
  textAlign: 'left', // Align text to the left
};

export const buttonContainerStyles: CSSProperties = {
  position: 'absolute',
  bottom: '10px',
  display: 'flex',
  justifyContent: 'flex-end', // Align buttons to the end of the container
};

export const buttonStyles: CSSProperties = {
  marginLeft: '10px',
  backgroundColor: '#8E403A'
};

export const eyeIconStyles: CSSProperties = {
  color: '#DAB9AE',
}