import CardList from './CardList';
import { UserList } from './UserList';
import { UserDetail } from './user/UserDetail';
import * as React from 'react';

export const Board = () => {
    return (
        <>
            <UserDetail></UserDetail>
            <CardList></CardList>
            <UserList></UserList>
        </>
    );
};