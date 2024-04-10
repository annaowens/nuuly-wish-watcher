import React, { useState } from 'react';
import { Choice, SizeGroup, IncludedSku as Sku } from '../../../shared/types/productSizeInventory';
import { Button, Col, Row } from 'react-bootstrap';
import { UniqueSelectionValue } from '../../../shared/types/uniqueSelectionValue';

interface SizeGroupProps {
    group: SizeGroup;
    handleAddToCart: (sizeGroup : SizeGroup, sku: Sku) => void;
}

const SizeGroupComponent: React.FC<SizeGroupProps> = ({ group, handleAddToCart }) => {
    const handleClick = (sku: Sku) => {
        handleAddToCart(group, sku);
    };

    return (
        <div>
            <Row>
                <Col md={2} style={{ display: 'flex', justifyContent: 'left' }}>
                    {group.displayName.toLocaleLowerCase()}
                </Col>
                <Col md={10} style={{ display: 'flex', justifyContent: 'left' }}>
                    {group.includedSkus.map((sku) => (
                        <SizeSku key={sku.skuId} sku={sku} onSelect={handleClick} />
                    ))}
                </Col>
            </Row>
        </div>
    );
};

interface SizeSkuProps {
    sku: Sku;
    onSelect: (sku: Sku) => void;
}

const SizeSku: React.FC<SizeSkuProps> = ({ sku, onSelect }) => {
    const handleClick = () => {
        onSelect(sku);
    };

    return (
        <Button
            variant='outline-primary'
            size='sm'
            style={{ margin: 10, backgroundColor: getAvailabilityColoring(sku) }}
            onClick={handleClick}
        >
            <p>
                {sku.size.displayName} - {sku.availableInventory}
            </p>
        </Button>
    );
};

interface SizeChartProps {
    color: Choice;
    sizeGroups: SizeGroup[];
    handleAddToSelection: (color: Choice, group: SizeGroup, sku: Sku) => void;
}

const SizeChart: React.FC<SizeChartProps> = ({ color, sizeGroups, handleAddToSelection }) => {
    const handleAddToCart = (group: SizeGroup, sku: Sku) => {
        handleAddToSelection(color, group, sku);
    };

    return (
        <div>
            {sizeGroups.map((group: SizeGroup) => (
                <SizeGroupComponent key={group.groupCode} group={group} handleAddToCart={handleAddToCart} />
            ))}
        </div>
    );
};

const getAvailabilityColoring = (sku: Sku): string => {
    return sku.isAvailable ? (sku.availableInventory > 10 ? "green" : "yellow") : "red";
};

export default SizeChart;
