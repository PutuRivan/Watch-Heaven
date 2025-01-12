"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ArrowRight, Search, X } from "lucide-react";
import { CgProfile } from "react-icons/cg";
import React, { useEffect, useRef, useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "../ui/menubar";
import { signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const { toast } = useToast();
  const { data: user } = useSession();

  const toggleSearch = (): void => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      window.location.href = `/search/${searchQuery}`;
      toggleSearch();
      setSearchQuery("");
    }
  };

  const handlesignOut = () => {
    signOut();
    toast({
      title: "Logout",
      description: "You have been successfully logged out.",
      variant: "destructive",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // bisa Adjust threshold nya
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={cn(
        "navbar z-50 justify-between items-center px-10 h-[85px] transition-all duration-300",
        isScrolled
          ? "bg-white/95 top-0 fixed shadow-md h-[70px]"
          : "bg-white border-b-2 border-neutral-300"
      )}
    >
      {/* Logo */}
      <div className="navbar-start">
        <h1 className="text-2xl font-bold text-black">WatchHeaven</h1>
      </div>

      {/* NavigationMenu */}
      <NavigationMenu className="navbar-center">
        <NavigationMenuList>
          <NavigationMenuItem className="mx-2">
            <Link href="/" legacyBehavior passHref>
              Home
            </Link>
          </NavigationMenuItem>
          {/* Movie */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Movie</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col gap-3 p-4 md:w-[100px] lg:w-[300px]">
                <li>
                  <Link
                    href="/movie/now-playing#1"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Now Playing
                    </div>
                  </Link>
                  <Link
                    href="/movie/top-rated#1"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Top Rated
                    </div>
                  </Link>
                  <Link
                    href="/movie/popular#1"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Popular
                    </div>
                  </Link>
                  <Link
                    href="/movie/up-coming#1"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Up Coming
                    </div>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* TV */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>TV</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col gap-3 p-4 md:w-[100px] lg:w-[300px]">
                <li>
                  <Link
                    href="/tv/on-the-air#1"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      On The Air
                    </div>
                  </Link>
                  <Link
                    href="/tv/top-rated#1"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Top Rated
                    </div>
                  </Link>
                  <Link
                    href="/tv/popular#1"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Popular
                    </div>
                  </Link>
                  <Link
                    href="/tv/airing-today#1"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Airing Today
                    </div>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Action Button */}
      <div className="navbar-end gap-5">
        {/* Search */}
        <div
          ref={searchRef}
          className={cn(
            "absolute right-24 flex items-center bg-white rounded-full overflow-hidden transition-all duration-300 ease-in-out",
            isSearchOpen
              ? "w-46 px-1 shadow-md border border-neutral-100"
              : "w-8"
          )}
        >
          <Search
            className="text-black cursor-pointer"
            onClick={toggleSearch}
          />
          {isSearchOpen && (
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
              className="ml-2 py-2 flex-grow bg-transparent text-sm focus:outline-none"
              placeholder="Search..."
              autoFocus
            />
          )}
          {isSearchOpen && (
            <button
              className={cn(
                "ml-2 flex items-center justify-center h-5 w-5 rounded-full text-gray-500 transition-all duration-300",
                searchQuery.trim()
                  ? "bg-neutral-100 text-neutral-700 hover:bg-neutral-300"
                  : "hover:bg-gray-200"
              )}
              onClick={searchQuery.trim() ? handleSearchSubmit : toggleSearch}
            >
              {searchQuery.trim() ? (
                <ArrowRight size={14} />
              ) : (
                <X size={20} color="red" />
              )}
            </button>
          )}
        </div>
        {/* User */}
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer">
              <CgProfile size={24} />
            </MenubarTrigger>
            <MenubarContent>
              {user?.user.name ? (
                <>
                  <MenubarItem>
                    <h1>{user.user.name}</h1>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Link href={`${user.user.name}/favorite`}>Favorite</Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Button
                      onClick={handlesignOut}
                      className="w-full"
                      variant={"destructive"}
                    >
                      Sign Out
                    </Button>
                  </MenubarItem>
                </>
              ) : (
                <>
                  <MenubarItem>
                    <Link href={"/login"}>Login</Link>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Link href={"/register"}>Register</Link>
                  </MenubarItem>
                </>
              )}
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        {/* Theme */}
      </div>
    </nav>
  );
}
