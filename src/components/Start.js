import React, {useRef} from 'react';

function Start({setUserName}) {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setUserName(inputRef.current.value)
    };
    const handleSubmit = (ev) => {
        ev.preventDefault();
    }
    return (
        <form className={'start'} onSubmit={handleSubmit}>
            <input
                placeholder={'enter your name'}
                className={'startInput'}
                ref={inputRef}
            />
            <button onClick={handleClick} className={'startButton'}>Start</button>
        </form>
    );
}

export default Start;