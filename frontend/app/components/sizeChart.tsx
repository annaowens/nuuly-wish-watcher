import React from 'react';
import { SizeGroup, IncludedSku as Sku } from '../../../shared/types/productSizeInventory';
import { Button, Col, Row } from 'react-bootstrap';

interface SizeGroupProps {
    group: SizeGroup;
}

const SizeGroup: React.FC<SizeGroupProps> = ({ group }) => (
    <div>
        <Row>
            <Col md={2}  style={{display:'flex', justifyContent:'left'}}>
            {group.displayName}
            </Col>
            <Col md={10} style={{display:'flex', justifyContent:'left'}}>    
                {group.includedSkus.map((sku) => (
                    <SizeSku key={sku.skuId} sku={sku} />
                ))}
            </Col>
        </Row>
    </div>
);

interface SizeSkuProps {
    sku: Sku;
}

const SizeSku: React.FC<SizeSkuProps> = ({ sku }) => (
    <Button 
        variant='outline-primary'
        size='sm'
        style={{margin:10}}
        >
        <p style={{ color: sku.isAvailable ? 'green' : 'red' }}>
            {sku.size.displayName} - {sku.availableInventory}
        </p>
    </Button>
);

interface SizeChartProps {
    sizeGroups: SizeGroup[];
}

const SizeChart: React.FC<SizeChartProps> = ({ sizeGroups }) => (
    <div>
        {sizeGroups.map((group) => (
            <SizeGroup key={group.groupCode} group={group} />
        ))}
    </div>
);

export default SizeChart;
