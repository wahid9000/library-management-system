import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { BookCopy, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import { Button } from "../ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
      <Link to={"/"}>
        <div className="text-2xl font-bold text-indigo-950 flex justify-center items-center gap-2">
          <BookCopy></BookCopy>BookBuddy
        </div>
      </Link>

      {/* Desktop Navigation on the right */}
      <NavigationMenu viewport={false} className="hidden md:flex">
        <NavigationMenuList className="gap-5">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                pathname === "/" && "text-indigo-950 font-bold"
              )}
            >
              <Link to="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                pathname === "/books" && "text-indigo-950 font-bold"
              )}
            >
              <Link to="/books">All Books</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                pathname === "/create-book" && "text-indigo-950 font-bold"
              )}
            >
              <Link to="/create-book">Add Books</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                pathname === "/borrow-summary" && "text-indigo-950 font-bold"
              )}
            >
              <Link to="/borrow-summary">Borrow Summary</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Menu Icon */}
      <div className="md:hidden relative">
        <Button
          size="icon"
          variant="outline"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>

        {mobileMenuOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
            <Link
              to="/"
              className="block px-4 py-2 hover:bg-indigo-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/books"
              className="block px-4 py-2 hover:bg-indigo-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Books
            </Link>
            <Link
              to="/borrow-summary"
              className="block px-4 py-2 hover:bg-indigo-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Borrow Summary
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
