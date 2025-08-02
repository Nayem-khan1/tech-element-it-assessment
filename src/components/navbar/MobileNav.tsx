"use client";

import { Fragment } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";

interface MobileNavProps {
  isOpen: boolean;
  navLinks: { name: string; href: string }[];
}

const MobileNav = ({ isOpen, navLinks }: MobileNavProps) => {
  return (
    <Transition
      show={isOpen}
      as={Fragment}
      enter="transition ease-out duration-300"
      enterFrom="transform -translate-x-full"
      enterTo="transform translate-x-0"
      leave="transition ease-in duration-200"
      leaveFrom="transform translate-x-0"
      leaveTo="transform -translate-x-full"
    >
      <div className="md:hidden fixed inset-0 bg-dark-slate z-20 mt-10">
        <div className="p-4">
          <nav className="flex flex-col gap-4 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white text-lg font-semibold hover:text-light-blue-grey transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </Transition>
  );
};

export default MobileNav;
