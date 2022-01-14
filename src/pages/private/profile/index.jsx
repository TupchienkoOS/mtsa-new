import { Fragment, useState, useEffect } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { ClockIcon, HomeIcon, MenuAlt1Icon, ViewListIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon, DotsVerticalIcon, SearchIcon, SelectorIcon } from '@heroicons/react/solid'
import { useAuth0 } from "@auth0/auth0-react";
import { Header } from '../../../widgets/header';
import { SideBar } from '../../../widgets/side-bar'
import { typicodeApi } from '../../../shared/api';
import { PinnedCompanies } from '../../../features/pinned-companies'
import { classNames } from '../../../shared/utils'

const companies = typicodeApi.companies.getCompaniesList;

const pinnedCompanies = companies.filter((project) => project.pinned)



export const Profile = () => {


    const setBodyClass = () => { document.body.classList.add("h-full"); }
    const setHTMLTagClass = () => { document.getElementsByTagName("html")[0].className = "h-full bg-white"; }

    useEffect(() => {
        setBodyClass();
        setHTMLTagClass();
    });

    const { logout } = useAuth0();
    return (
        <>
            <div className="min-h-full">

                <SideBar />

                {/* Main column */}
                <div className="lg:pl-64 flex flex-col">
                    {/* Search header */}
                    <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden">
                        <button
                            type="button"
                            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <div className="flex-1 flex justify-between px-4 sm:px-6 lg:px-8">
                            <div className="flex-1 flex">
                                <form className="w-full flex md:ml-0" action="#" method="GET">
                                    <label htmlFor="search-field" className="sr-only">
                                        Search
                                    </label>
                                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                            <SearchIcon className="h-5 w-5" aria-hidden="true" />
                                        </div>
                                        <input
                                            id="search-field"
                                            name="search-field"
                                            className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm"
                                            placeholder="Search"
                                            type="search"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="flex items-center">
                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none">
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            View profile
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Settings
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Notifications
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Get desktop app
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Support
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Logout
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <main className="flex-1">
                        <Header />
                        <PinnedCompanies pinnedCompanies={pinnedCompanies} />
                        {/* Projects list (only on smallest breakpoint) */}
                        <div className="mt-10 sm:hidden">
                            <div className="px-4 sm:px-6">
                                <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Projects</h2>
                            </div>
                            <ul role="list" className="mt-3 border-t border-gray-200 divide-y divide-gray-100">
                                {companies.map((project) => (
                                    <li key={project.id}>
                                        <a href="#" className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
                                            <span className="flex items-center truncate space-x-3">
                                                <span
                                                    className={classNames(project.bgColorClass, 'w-2.5 h-2.5 flex-shrink-0 rounded-full')}
                                                    aria-hidden="true"
                                                />
                                                <span className="font-medium truncate text-sm leading-6">
                                                    {project.title} <span className="truncate font-normal text-gray-500">in {project.team}</span>
                                                </span>
                                            </span>
                                            <ChevronRightIcon
                                                className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                aria-hidden="true"
                                            />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Projects table (small breakpoint and up) */}
                        <div className="hidden mt-8 sm:block">
                            <div className="align-middle inline-block min-w-full border-b border-gray-200">
                                <table className="min-w-full">
                                    <thead>
                                        <tr className="border-t border-gray-200">
                                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                <span className="lg:pl-2">Project</span>
                                            </th>
                                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Members
                                            </th>
                                            <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Last updated
                                            </th>
                                            <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" />
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-100">
                                        {companies.map((project) => (
                                            <tr key={project.id}>
                                                <td className="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
                                                    <div className="flex items-center space-x-3 lg:pl-2">
                                                        <div
                                                            className={classNames(project.bgColorClass, 'flex-shrink-0 w-2.5 h-2.5 rounded-full')}
                                                            aria-hidden="true"
                                                        />
                                                        <a href="#" className="truncate hover:text-gray-600">
                                                            <span>
                                                                {project.title} <span className="text-gray-500 font-normal">in {project.team}</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-3 text-sm text-gray-500 font-medium">
                                                    <div className="flex items-center space-x-2">
                                                        <div className="flex flex-shrink-0 -space-x-1">
                                                            {project.members.map((member) => (
                                                                <img
                                                                    key={member.handle}
                                                                    className="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
                                                                    src={member.imageUrl}
                                                                    alt={member.name}
                                                                />
                                                            ))}
                                                        </div>
                                                        {project.totalMembers > project.members.length ? (
                                                            <span className="flex-shrink-0 text-xs leading-5 font-medium">
                                                                +{project.totalMembers - project.members.length}
                                                            </span>
                                                        ) : null}
                                                    </div>
                                                </td>
                                                <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
                                                    {project.lastUpdated}
                                                </td>
                                                <td className="px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
                                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                        Edit
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
