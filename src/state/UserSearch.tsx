import React, {useState} from "react";

const users = [
    {name: 'Rustam', age: 34},
    {name: 'Ruslan', age: 40},
    {name: 'Anna', age: 35}
]

const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string, age: number} | undefined>();

    const onClick = () => {
        const foundUser = users.find(user => user.name === name);

        setUser(foundUser);
    };

    return (<div>
        <h3>User search</h3>
        <input value={name} onChange={e => setName(e.target.value)} />
        <button onClick={onClick}>Find User</button>
        <div>
            {user && user.name }
            {user && user.age}
        </div>
    </div>)
};

export default UserSearch;