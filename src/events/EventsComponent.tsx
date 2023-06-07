import React from "react";

const EventsComponent: React.FC = () => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };

    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log('Im being dragged');
        console.log(event.clientX);
    };

    return (
        <div>
            <h2>Handling Change events</h2>
            <input onChange={onChange} />
            <hr />
            <div draggable onDrag={onDragStart}>Drag Me!</div>
        </div>
    );
};

export default EventsComponent;