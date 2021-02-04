import React from 'react';

const List = (props) => {
    const completed = 'bg-gray-50 hover:bg-blue-100 duration-300 transition m-1 p-5 cursor-pointer border-l-8 border-blue-900 rounded text-gray-600 flex justify-between';
    const open = 'bg-gray-50 hover:bg-blue-100 duration-300 transition m-1 p-5 cursor-pointer border-l-8 border-blue-400 rounded text-gray-600 flex justify-between shadow-md';
    return (
        <div>
            <ul className="m-0 my-4 p-0 list-none w-full">
            {props.items.map((item) => (
                <li key={item.id}>
                    <span
                        onClick={() => props.toggle && props.toggle(item.id)}
                        className={item.complete ? completed : open}
                        >
                        <p
                        className={item.complete ? 'line-through' : ''}>
                            {item.name}
                        </p>
                        <button
                            className="text-red-500 hover:text-red-700 text-sm font-bold no-underline flex right auto mr-2 focus:outline-none"
                            onClick={() => props.remove(item)}>
                                X
                        </button>
                    </span>
                </li>
            ))}
        </ul>
        </div>
        
    );
};

export default List;