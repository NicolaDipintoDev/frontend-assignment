import React, { useState } from 'react';
import { Button } from 'antd';

type Props = {
    HasNextPage: boolean,
    HasPrevPage: boolean,
    setQuery: (value: string) => void;
    setAfter: (value: string) => void;
    setPrevAfter: (value: string) => void;
    endCursor: string;
    searchedValue: string;
    prevAfter: string;
}
const NavButtons = ({ HasNextPage, HasPrevPage, setQuery, searchedValue, endCursor, setAfter, setPrevAfter, prevAfter }: Props) => {


    const nextPage = () => {
        setAfter(endCursor);
        setPrevAfter(prevAfter + ',' + endCursor);
    }

    const prevPage = () => {
        const lastComma = prevAfter.lastIndexOf(',');
        if (lastComma === -1) {
            setAfter('');
            setPrevAfter('000');
        } else {
            const removeLastAfter = prevAfter.substring(0, lastComma);
            const newLastComma = removeLastAfter.lastIndexOf(',')
            if (newLastComma === -1) {
                setAfter('');
                setPrevAfter('000');
            }
            else {
                setAfter(removeLastAfter.substring(newLastComma + 1));
                setPrevAfter(removeLastAfter);
            }

        }
    }



    return <div className="ButtonsWrapper">
        <span className="Buttons" >
            <Button
                type="primary"
                size='large'
                disabled={prevAfter === '000'}
                onClick={() => prevPage()}
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