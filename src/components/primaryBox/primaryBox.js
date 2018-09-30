import React, { Component } from 'react';
import Search from '../../components/search/Search';
import Filters from '../../components/filters/Filters';
import List from '../../components/list/List';

const PrimaryBox = () => (
    <div>
        <Search />
        <Filters />
        <List />
    </div>
)

export default PrimaryBox;