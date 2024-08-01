import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-1/4 bg-gray-100 p-4 hidden lg:block">
      <ul>
        <li className="p-2">
          <Link to="/">Home</Link>
        </li>
        <li className="p-2">Trending</li>
        <li className="p-2">Subscriptions</li>
        <li className="p-2">Library</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
