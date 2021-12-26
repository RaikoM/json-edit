import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { classNames } from '../utils';

const navigation = [
  { name: 'Form', href: '/' },
  { name: 'Editor', href: '/editor' },
  { name: 'Tree Search', href: '/tree-search' }
];

type HeaderNavProps = {
  children: ReactNode;
};

const HeaderNav = ({ children }: HeaderNavProps) => {
  const { pathname } = useLocation();

  return (
    <div className="h-full min-h-screen bg-gray-50">
      <nav className="bg-gray-800 py-2">
        <div className="ml-10 flex items-baseline space-x-4">
          {navigation.map(route => (
            <Link
              className={classNames(
                pathname === route.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'px-3 py-2 rounded-md text-sm font-medium'
              )}
              to={route.href}
              key={route.name}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </nav>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{navigation.find(route => route.href === pathname)?.name ?? ''}</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
};

export default HeaderNav;
