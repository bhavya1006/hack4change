import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-zinc-900 text-white p-4 bg-fixed flex justify-between items-center border-b-4 border-fuchsia-400">
            <nav className='flex justify-between w-full h-10 items-center'>
                <div className="logo px-9 text-2xl">

                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        <img src="" alt="" />Logo
                    </NavLink>
                </div>
                <ul className='flex px-24 gap-14 text-sm'>
                    <li className='hover:underline'>

                        <NavLink
                            to="/docs"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Docs
                        </NavLink>
                    </li>
                    <li className='hover:underline'>

                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            About us
                        </NavLink>
                    </li>
                </ul>


            </nav>
        </header>
    );
};

export default Header;
