import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { ThreeDotsVertical, Eye } from 'react-bootstrap-icons';

interface NavBarProps {
    toggleWatchList: () => void;
}

const NavBar: React.FC<NavBarProps> = ({
    toggleWatchList
}) => {

    // const clearWatchList = () => {
    //     setWatchedItems([]);
    // }

    return (
        <>
            <Navbar>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#">
                            <ThreeDotsVertical />
                        </Nav.Link>
                    </Nav>
                    <Eye onClick={toggleWatchList} />
                </Container>
            </Navbar>
            {/* {expanded && <FloatingWatchList watchedItems={[]} clearWatchList={clearWatchList} />} */}
        </>
    );
};

export default NavBar;
