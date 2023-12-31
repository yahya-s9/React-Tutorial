// import { Fragment } from "react";
// <></> below works the same as <Fragment><Fragment/>

// import { MouseEvent } from "react";
// needed this for the type annotation in our old handle click function
// which we aren't using anymore.

import { useState } from "react";

// using type annotation to specify the types of the properties
// aka defining the structure of the input to the component, 
// just like how u can pass in arguments to a function

interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}
 
function ListGroup ({items, heading, onSelectItem}: ListGroupProps) {

    // instead of hardcoding list of items, will now make it a prop.
    // const items = ['Marrakech', 'Casablanca', 'Rabat'];

    // // variable that keeps track of the index of the selected variable
    // let selectedIndex = -1;

    // Hook to tell react our componnet has data that can change over time
    // so selectedIndex will be a state of the component and not a local variable.

    // selectedIndex initial value is -1.
    const [selectedIndex, setSelectedIndex] = useState(-1);
    // const [name, setName] = useState('Yahya');

    // useState itself returns an array where:
    // arr[0] is the variable (selectedindex for ex)
    // arr[1] is an updater finction to update the var.

    const getMessage = () => {
        // return items.length === 0 ? <p> No items to render </p> : null
        return items.length === 0 && <p> No items to render </p>
    }


    // Event handler 

    // used type annotaation syntax (event: MouseEvent) to specify
    // to the TS compiler that event is of type mouseEvent
    const handleClick = (event: MouseEvent) => {
        // now that compiler knows what type of object event is,
        // we can use the dot operator to get any property we want
        // off the event object
        console.log(event);        
    }
    
    return ( 
        // fragment so we can render multiple elements without having to
        // wrap everything around an unnecesary div
        <>
            <h1>{heading}</h1>
            {/* to accomplish conditional rendering, cant write an if statement so 
            instead have a JS expression embedded with curly braces that will
            return the p tag above if the item list is empty */}
            {getMessage}
            <ul className="list-group">
                {/* mapping every item in the items array to a corresponding
                list item element, with a key that is also equal to the string in
                the items array, and an on click property that has a function which prints the item when clicked */}
                {items.map((item,index) => (
                    // if this items index matches the selected item index, then apply both the 
                    // listgroupitem class and the active class so its highlighted. If the indices dont match,
                    // then just apply list-group-item class bc we still want it styled properly
                <li className={ selectedIndex===index ? 'list-group-item active' : 'list-group-item'} 
                key={item} 
                // dont call the function, just pass it in bc 
                // its going to be called llater, at run time.
                onClick={() => {
                    setSelectedIndex(index);
                    onSelectItem(item);
                }}
                >
                    {item}
                </li>
            ))}
            </ul>
        </>
        );
}

export default ListGroup;