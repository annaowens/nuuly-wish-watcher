import { CSSProperties } from "react";

export const searchCardStyles: CSSProperties = {
    borderRadius: '15px',
    border: '0.5px solid #DAB9AE',
    position: 'relative',
    height: '100%',
    overflow: 'hidden', // Ensure content inside the card doesn't overflow
};

export const searchCardBodyStyles: CSSProperties = {
    padding: '0px',
};

export const imageStyles: CSSProperties = {
    borderTopLeftRadius: '15px', // Match the border radius of the card
    borderTopRightRadius: '15px', // Match the border radius of the card
    // width: '100%',
    height: '100%',
    objectFit: 'cover',
};

export const cardTitleStyles: CSSProperties = {
    marginRight: 10, 
    paddingTop: 7, 
    padding: 5, 
    justifyContent: 'center', 
    right: 15,
    textAlign: 'center', 
    fontSize: 'smaller', 
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
};
