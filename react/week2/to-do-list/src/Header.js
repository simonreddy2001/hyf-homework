import React, { useState } from "react";

const Header = function () {

    const [timer, setTimer] = useState(0);

    setTimeout(() => {
        setTimer(timer + 1)
    }, 1000)

    return <>
        <h1>Todo List</h1>
        <p>You have used {timer} seconds on this website</p>
    </>
}

export default Header;