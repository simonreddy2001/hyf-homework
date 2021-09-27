import React, { useContext } from 'react';
import { gitUserContext } from './gitUserContext';

const GitUsers = () => {
    const githubUserContext = useContext(gitUserContext)
    return (
        <div>
            {githubUserContext.isLoading ? (
                <h3>Loading</h3>
            ) : (
                <ul>
                    {githubUserContext.users.length < 1 ?
                        <p>No Results Found</p>
                        : githubUserContext.users.map((user) =>
                            <li key={user.id}>
                                <a href={`https://www.github.com/${user.login}`} rel="noopener noreferrer" target="_blank">
                                    {user.login}
                                </a>
                            </li>)}
                </ul>)
            }
        </div>
    );
}

export default GitUsers;
