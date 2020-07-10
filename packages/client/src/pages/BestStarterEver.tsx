import React, { useState } from 'react';
import { Radio, Alert, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;


const BestStarteEver = () => {
    const [answer, setAnswer] = useState<string>('');
    const onClick = (value: string) => {
        setAnswer(value);
    }

    const result = () => {
        let message: string;
        let correct: boolean;
        switch (answer) {
            case 'Bulbasaur':
                message = 'Are you Kidding me?';
                correct = false;
                break;
            case 'Charmander':
                message = 'The most popular is not always the best';
                correct = false;
                break;
            case 'Squirtle':
                message = 'You are a great Pokemon trainer!!!';
                correct = true;
                break;
            default:
                message = 'starter name not valid';
                correct = false;
                break;

        }
        return <Alert message={message} type={correct ? 'success' : 'error'} />
    }

    return <div className="App">
        <p className='link'>
            <Link to="/">
                Back to Pokemons page
            </Link>
        </p>
        Choose wisely: {' '}
        <Radio.Group
            defaultValue={'Normal'}
            buttonStyle="solid"
            onChange={e => onClick(e.target.value)}>
            {['Bulbasaur', 'Charmander', 'Squirtle'].map((starter: string) =>

                <Radio.Button key={starter} value={starter}>{starter}</Radio.Button>

            )}
        </Radio.Group>

        {answer !== '' &&
            <div className="Alert">
                <Title>Professor Oak say:</Title>
                {result()}
            </div>}
    </div>
}

export default BestStarteEver;