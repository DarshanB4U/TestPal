
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from "./model-toggle";
import { useNavigate } from "react-router-dom";



export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
   const navigate = useNavigate()

  return (
    <nav className="bg-background border-b border-s-emerald-900">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="text-xl shadow-md rounded-sm  p-2 font-bold">
          TestPal
        </a>

        {/* Desktop Links */}
        <ModeToggle></ModeToggle>
        <div className={cn("hidden md:flex space-x-6")}>
          <a href="/signup"  className="text-muted-foreground hover:text-foreground">
            Home
          </a>
          <a href="/signin" className="text-muted-foreground hover:text-foreground">
            About
          </a>
          <div className=""> <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar></div>
         
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t">
          <a href="#home" className="block px-4 py-2 hover:bg-accent">
            Home
          </a>
          <a href="#about" className="block px-4 py-2 hover:bg-accent">
            About
          </a>
           <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          
          
        </div>
      )}
    </nav>
  );
};
