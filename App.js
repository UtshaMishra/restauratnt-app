import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Table from './components/Table.js';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.h1`
  color: #333;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/menu')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Category', accessor: 'category' },
    { Header: 'Price', accessor: 'price' },
  ];

  const saveData = newData => {
    // Save data to the server (you might need to implement this)
    console.log('Saving data:', newData);
  };

  const resetData = () => {
    // Reset data to the original values
    fetch('http://localhost:3001/menu')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error resetting data:', error));
  };

  return (
    <Container>
      <Header>Restaurant Menu</Header>
     
      <Table columns={columns} data={data} saveData={saveData} resetData={resetData} />
    </Container>
  );
};

export default App;