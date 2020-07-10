import React from 'react';
import { Button } from 'antd';

type Props = {
    HasNextPage: boolean,
    HasPrevPage: boolean,
    setQuery: (value: string) => void;
    endCursor: string;
    searchedValue: string;
}
const NavButtons = ({ HasNextPage, HasPrevPage, setQuery, searchedValue, endCursor }: Props) => {

    return <div className="ButtonsWrapper">
        <span className="Buttons" >
            <Button
                type="primary"
                size='large'
                disabled={!HasPrevPage}
            >
                PrevPage
            </ Button>
        </span>
        <span className="Buttons" >
            <Button
                type="primary"
                size='large'
                disabled={!HasNextPage}
                onClick={() => setQuery('b')}
            >
                nextPage
            </ Button>
        </span>
    </div>
}

export default NavButtons;