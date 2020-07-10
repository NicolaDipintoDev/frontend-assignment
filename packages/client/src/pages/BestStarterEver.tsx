import React, { useState } from 'react';
import { Radio, Alert } from 'antd';
import { Link } from 'react-router-dom';


const BestStarteEver = () => {
    const [answer, setAnswer] = useState<string>('');
    const onClick = (value: string) => {
        setAnswer(value);
    }

    const result = () => {
        let message: string;
        switch (answer) {
            case 'Bulbasaur':
                message = 'Are you Kidding me?';
                break;
            case 'Charmander':
                message = 'The most popular is not always the best';
                break;
            case 'Squirtle':
                message = 'You are a great Pokemon trainer!!!';
                break;

        }
    }
    return <div className="App">
        <p className='link'>
            <Link to="/">
                Back to Pokemons page
            </Link>
        </p>
        Choose type: {' '}
        <Radio.Group
            defaultValue={'Normal'}
            buttonStyle="solid"
            onChange={e => onClick(e.target.value)}>
            {['Bulbasaur', 'Charmander', 'Squirtle'].map((starter: string) =>

                <Radio.Button key={starter} value={starter}>{starter}</Radio.Button>

            )}
        </Radio.Group>

        {answer !== '' && <div>{answer}</div>}
    </div>
}

export default BestStarteEver;