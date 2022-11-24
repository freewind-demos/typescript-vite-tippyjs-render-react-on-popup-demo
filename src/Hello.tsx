import React, {FC, useState} from 'react';
import './Hello.pcss';

type Props = {};

export const Hello: FC<Props> = ({}) => {
    const [count, setCount] = useState(1)
    return <div className={'Hello'}>
        <h1>Hello, React</h1>
        <button type={'button'} onClick={() => setCount(n => n + 1)}>Count: {count}</button>
    </div>;
}
