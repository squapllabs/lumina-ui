import React from 'react';
import styled from 'styled-components';

interface BreadcrumbsProps {
  items: { label: string; href: string }[];
  labelStyle?: React.CSSProperties;
  separator:string
}

const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
`;

const BreadcrumbLink = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
    
  &:hover {
    text-decoration: underline;
  }
`;

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ 
    items,
    labelStyle,
    separator
 }) => {
  return (
    <BreadcrumbContainer>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span style={{ margin: '0 8px' }}>{separator}</span>}
          {index === items.length - 1 ? (
            <span style={labelStyle}>{item.label}</span>
          ) : (
            <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
          )}
        </React.Fragment>
      ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumbs;
