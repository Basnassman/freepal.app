import { Wallet, Bitcoin, Sun, Moon } from "lucide-react";

function Navbar() {
  return (
      <nav className="flex items-center gap-4 p-4 bg-gray-900 text-white">
            <Wallet className="w-6 h-6" />
                  <Bitcoin className="w-6 h-6 text-yellow-400" />
                        <Sun className="w-6 h-6 cursor-pointer" />
                              <Moon className="w-6 h-6 cursor-pointer" />
                                  </nav>
                                    );
                                    }

                                    export default Navbar;