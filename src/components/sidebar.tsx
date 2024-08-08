'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const navItems = [
    { href: '/projects', label: 'Projects', icon: '📁' },
    { href: '/projects-for-pickup', label: 'Projects for Pickup', icon: '🔍' },
    { href: '/writes', label: 'Writes', icon: '✍️' },
    { href: '/kit', label: 'Kit', icon: '🧰' },
  ];

  const SidebarContent = () => (
    <div className="h-full bg-primary p-4 flex flex-col">
      <div className="-top- items-center">
        <Image src="/profile.jpeg" alt="profile image" width={100} height={100} className="rounded-full mb-4" />
        <h1 className="text-3xl text-white font-bold mb-2">Abishek</h1>
        <h1 className="text-3xl text-white font-bold mb-6">Ramakrishnan</h1>
        <p className="text-white mb-4">Your blurb goes here.</p>
      </div>
      
      <nav className="flex-grow">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Button variant="ghost" asChild className="w-full justify-start">
                <Link href={item.href}>
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <Button onClick={() => setIsExpanded(false)} className="mt-auto">
        Minimize
      </Button>
    </div>
  );

  return (
    <>
      {isExpanded ? (
        <div className="w-2/5 h-full transition-all duration-300">
          <SidebarContent />
        </div>
      ) : (
        <div className="w-16 h-full bg-primary py-4 flex flex-col items-center transition-all duration-300">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mb-4">
                ☰
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <SidebarContent />
            </SheetContent>
          </Sheet>
          {navItems.map((item) => (
            <Button 
              key={item.href} 
              variant="ghost" 
              size="icon" 
              asChild 
              className="mb-2"
              title={item.label}
            >
              <Link href={item.href}>{item.icon}</Link>
            </Button>
          ))}
        </div>
      )}
    </>
  );
};

export default Sidebar;