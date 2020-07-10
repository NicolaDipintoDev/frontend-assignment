import React from 'react';
import { Button } from 'antd';

type Props = {
    HasNextPage: boolean,
    HasPrevPage: boolean,
}
const NavButtons = ({ HasNextPage, HasPrevPage }: Props) => {

    return <div className="ButtonsWrapper">
        <span className="Buttons" >
            <Button type="primary" size='large' disabled={!HasPrevPage}>
                PrevPage
            </ Button>
        </span>
        <span className="Buttons" >
            <Button type="primary" size='large' disabled={!HasNextPage}>
                nextPage
            </ Button>
        </span>
    </div>
}

export default NavButtons;