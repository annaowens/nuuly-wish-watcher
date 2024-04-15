import React from 'react';
import { Button } from 'react-bootstrap';
import { Eye } from 'react-bootstrap-icons';
import WatchedItem from '../../../shared/types/watchList';

interface WatchListCartProps {
    watchedItems: WatchedItem[];
    clearWatchList: () => void;
}

const WatchListCart: React.FC<WatchListCartProps> = ({
    watchedItems,
    clearWatchList
}) => {

    const handleClearButtonClick = () => {
        clearWatchList();
    }

    return (
        <div style={styles.shoppingCart}>
            <div style={styles.cartHeader}>
                <h4 style={{ margin: 0 }}>Shopping Cart</h4>
            </div>
            <div style={styles.cartItems}>
                <ul style={styles.listStyles}>
                    {watchedItems.map((item: WatchedItem) => (
                        <li key={item.productSkuId}>
                            {item.productDisplayName}
                            {item.usv.colorDisplayName}
                            {item.usv.groupDisplayName}
                            {item.usv.skuDisplayName}
                        </li>
                    ))}
                </ul>
            </div>
            <div style={styles.cartFooter}>
                <Button
                    style={styles.buttonStyles}
                    onClick={handleClearButtonClick}
                    variant="outline-danger">
                    clear
                </Button>
                <Button
                    style={styles.buttonStyles}
                    variant="primary">
                    <div style={{ display: 'flex', verticalAlign: 'center' }}>
                        <Eye style={styles.iconStyles} size={15} />
                        watch
                    </div>
                </Button>
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    shoppingCart: {
        position: 'fixed',
        top: '50px',
        right: '10px',
        backgroundColor: 'white',
        padding: '15px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
        minWidth: '250px',
        zIndex: 1000, // Ensure it's above other elements
    },
    cartHeader: {
        borderBottom: '1px solid #eee',
        paddingBottom: '10px',
    },
    cartItems: {
        maxHeight: '200px',
        overflowY: 'auto',
        marginBottom: '10px',
    },
    cartItem: {
        marginBottom: '5px',
    },
    cartFooter: {
        borderTop: '1px solid #eee',
        paddingTop: '10px',
        textAlign: 'right',
    },
    checkoutButton: {
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '3px',
        padding: '8px 15px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
};

export default WatchListCart;
