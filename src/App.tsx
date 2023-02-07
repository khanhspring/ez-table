import React from 'react';
import Table from './components/Table';
import { Column } from './models';

type User = {
  firstName: string;
  lastName: string;
  birthday: string;
  address: string;
}

function App() {

  const columns: Column<User>[] = [
    {
      title: 'First Name',
      dataKey: 'firstName',
    },
    {
      title: 'Last Name',
      dataKey: 'lastName',
    },
    {
      title: 'Birthday',
      dataKey: 'birthday',
    },
    {
      title: 'Address',
      dataKey: 'address',
      render: (value, record) => <button onClick={() => alert(value)}>{record?.firstName}</button>
    }
  ];

  const data = [
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'}
  ]

  return (
    <div className="w-[700px] m-auto pt-10">
      <Table columns={columns} data={data} stickyHeader={{top: 20}}/>
    </div>
  );
}

export default App;
