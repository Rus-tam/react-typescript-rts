import ReactDOM from "react-dom/client";
import React from 'react';
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventsComponent from "./events/EventsComponent";

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el!);

const App = () => {
    return <div>
        <GuestList />
        <hr />
        <UserSearch />
        <hr />
        <EventsComponent />
    </div>
};

root.render(<App />)