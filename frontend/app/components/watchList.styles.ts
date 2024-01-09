// SquareComponent.styles.ts
import { CSSProperties } from 'react';
import classNames from 'classnames';

export const containerClass = 'square-container';
export const headerClass = 'square-header';
export const subTextClass = 'square-subtext';
export const listClass = 'square-list';
export const buttonContainerClass = 'square-button-container';
export const buttonClass = 'square-button';

export const containerStyles: CSSProperties = {
  backgroundColor: '#c2d4b6',
  borderRadius: '10px',
  padding: '20px',
  border: '2px solid #a9a9a9',
  minHeight: '200px',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
};

export const headerStyles: CSSProperties = {
  color: '#006400',
  fontWeight: 'bold',
  fontSize: '1.5rem',
};

export const subTextStyles: CSSProperties = {
  color: '#006400',
  fontSize: '1rem',
  marginBottom: '20px',
};

export const listStyles: CSSProperties = {
  flex: '1',
  overflowY: 'auto',
  marginBottom: '20px',
  marginLeft: '10px',
  textAlign: 'left', // Align text to the left
};

export const buttonContainerStyles: CSSProperties = {
  position: 'absolute',
  bottom: '10px',
  display: 'flex',
  justifyContent: 'flex-end', // Align buttons to the end of the container
};

export const buttonStyles: CSSProperties = {
  marginRight: '10px',
};

export const watchNowButtonStyles: CSSProperties = {
  borderColor: '#8B6508', // Dark yellow outline color
  color: '#FFD700', // Light mustard yellow text color
  backgroundColor: 'transparent', // Transparent background
};
