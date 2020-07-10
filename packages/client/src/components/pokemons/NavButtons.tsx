import React, { useState } from 'react';
import { Button } from 'antd';

type Props = {
    HasNextPage: boolean,
    HasPrevPage: boolean,
    setQuery: (value: string) => void;
    setAfter: (value: string) => void;
    endCursor: string;
    searchedValue: string;
}
const NavButtons = ({ HasNextPage, HasPrevPage, setQuery, searchedValue, endCursor, setAfter }: Props) => {

    const [prevAfter, setPrevAfter] = useState<string>('000');
    const nextPage = () => {
        setAfter(endCursor);
    }

    return <div className="ButtonsWrapper">
        <span className="Buttons" >
            <Button
                type="primary"
                size='large'
                disabled={prevAfter === '000'}
            >
                PrevPage
            </ Button>
        </span>
        <span className="Buttons" >
            <Button
                type="primary"
                size='large'
                disabled={!HasNextPage}
                onClick={() => nextPage()}
            >
                nextPage
            </ Button>
        </span>
    </div>
}

export default NavButtons;