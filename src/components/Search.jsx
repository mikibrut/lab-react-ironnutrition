import React from 'react'
import { Divider, Input } from 'antd';

export default function Search({handleSearchValue}) {

    const handleChange = (e) => {
        handleSearchValue(e.target.value);
    }

    return (
        <>
          <Divider>Search</Divider>
              <label>Search</label>
          <Input type="text" onChange={handleChange} />
        </>
      );
}
