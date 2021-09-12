import React, { useState } from "react";

const Header = function () {

    const [timer, settimer] = useState(0);

    setTimeout(() => {
        settimer(timer + 1)
    }, 1000)

    return <>
        <h1>Todo List</h1>
        <p>You have used {timer} seconds on this website</p>
    </>
}

export default Header;