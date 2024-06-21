// src/components/Dashboard.tsx
import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 20px;
  flex: 1;
`;

const Widget = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Widget>
        <h2>Connected Devices</h2>
        <p>8 Connected devices</p>
      </Widget>
      <Widget>
        <h2>Data Usage</h2>
        <p>6.48 GB received</p>
        <p>12.54 GB sent</p>
      </Widget>
      <Widget>
        <h2>Power Consumption</h2>
        <p>50 W</p>
      </Widget>
    </DashboardContainer>
  );
};

export default Dashboard;
