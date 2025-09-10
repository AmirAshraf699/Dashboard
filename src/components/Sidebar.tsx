import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <div>
            <div className='sidebar min-h-lvh h-full p-5'>
                <div className='main-title pt-3 pb-8 font-bold tracking-widest uppercase'>
                    <h1 className=''>Dashboard</h1>
                </div>
                <div className='links main-links py-5'>
                    <h3 className='second-title uppercase text-xs font-bold tracking-wide pb-5'>Admin layout pages</h3>
                    <div className='link pb-5 uppercase text-xs font-bold'>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `${isActive
                                    ? 'text-[var(--blue)] hover:text-[var(--blue-darker)]'
                                    : 'text-[var(--black-light)] hover:text-[var(--grey)]'
                                }`
                            }
                        >
                            Dashboard
                        </NavLink>
                    </div>
                    <div className='link pb-5 uppercase text-xs font-bold'>
                        <NavLink
                            to="/Settings"
                            className={({ isActive }) =>
                                `${isActive
                                    ? 'text-[var(--blue)] hover:text-[var(--blue-darker)]'
                                    : 'text-[var(--black-light)] hover:text-[var(--grey)'
                                }`
                            }
                        >
                            Settings
                        </NavLink>
                    </div>
                    <div className='link pb-5 uppercase text-xs font-bold'>
                        <NavLink
                            to="/Tables"
                            className={({ isActive }) =>
                                `${isActive
                                    ? 'text-[var(--blue)] hover:text-[var(--blue-darker)]'
                                    : 'text-[var(--black-light)] hover:text-[var(--grey)'
                                }`
                            }
                        >
                            Tables
                        </NavLink>
                    </div>
                </div>
                <div className='links auth-links py-5'>
                    <h3 className='second-title uppercase text-xs font-bold tracking-wide pb-5'>Auth layout pages</h3>
                    <div className='link pb-5 uppercase text-xs font-bold'>
                        <NavLink
                            to="/Login"
                            className={({ isActive }) =>
                                `${isActive
                                    ? 'text-[var(--blue)] hover:text-[var(--blue-darker)]'
                                    : 'text-[var(--black-light)] hover:text-[var(--grey)'
                                }`
                            }
                        >
                            Login
                        </NavLink>
                    </div>
                    <div className='link pb-5 uppercase text-xs font-bold'>
                        <NavLink
                            to="/Signup"
                            className={({ isActive }) =>
                                `${isActive
                                    ? 'text-[var(--blue)] hover:text-[var(--blue-darker)]'
                                    : 'text-[var(--black-light)] hover:text-[var(--grey)'
                                }`
                            }
                        >
                            Sign up
                        </NavLink>
                    </div>
                </div>

                <div className='links profile-links py-5'>
                    <h3 className='second-title uppercase text-xs font-bold tracking-wide pb-5'>No layout pages</h3>
                    <div className='link pb-5 uppercase text-xs font-bold'>
                        <NavLink
                            to="/Landing"
                            className={({ isActive }) =>
                                `${isActive
                                    ? 'text-[var(--blue)] hover:text-[var(--blue-darker)]'
                                    : 'text-[var(--black-light)] hover:text-[var(--grey)'
                                }`
                            }
                        >
                            Landing
                        </NavLink>
                    </div>
                    <div className='link pb-5 uppercase text-xs font-bold'>
                        <NavLink
                            to="/Profile"
                            className={({ isActive }) =>
                                `${isActive
                                    ? 'text-[var(--blue)] hover:text-[var(--blue-darker)]'
                                    : 'text-[var(--black-light)] hover:text-[var(--grey)'
                                }`
                            }
                        >
                            Profile
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar