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
      title: '#',
      dataKey: 'index',
      render: (value, record, index) => <span>{index + 1}</span>,
      width: 10,
    },
    {
      title: 'First Name',
      dataKey: 'firstName',
      width: 30,
      cellClassName: 'text-center font-bold'
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
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
    {firstName: 'Harry', lastName: 'Tran', birthday: '01/01/1993', address: 'Hanoi, Viet Nam'},
    {firstName: 'Anna', lastName: 'Nguyen', birthday: '01/01/1996', address: 'Hanoi, Viet Nam'},
  ]

  const onRowClick = (r: any, i: number) => {
    console.log(r, i);
  }

  return (
    <div className="w-[700px] m-auto pt-10">
      <Table columns={columns} data={data} stickyHeader={{top: 20}} onRowClick={onRowClick}/>
    </div>
  );
}

export default App;
