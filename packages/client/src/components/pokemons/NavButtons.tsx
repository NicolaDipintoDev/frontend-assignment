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
        setAfterValues(endCursor, prevAfter + ',' + endCursor);
    }

    const prevPage = () => {
        const lastComma = prevAfter.lastIndexOf(',');
        if (lastComma === -1) {
            setAfterFirstPage();
        } else {
            const removeLastAfter = prevAfter.substring(0, lastComma);
            const newLastComma = removeLastAfter.lastIndexOf(',')
            if (newLastComma === -1) {
                setAfterFirstPage();
            }
            else {
                setAfterValues(removeLastAfter.substring(newLastComma + 1), removeLastAfter);
            }

        }
    }

    const setAfterValues = (afterValue: string, prevAfterValue: string) => {
        setAfter(afterValue);
        setPrevAfter(prevAfterValue);
    }

    const setAfterFirstPage = () => {
        setAfter('');
        setPrevAfter('000');
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