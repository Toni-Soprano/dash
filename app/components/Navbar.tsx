// components/Navbar.tsx

import Image from "next/image";
import avatar from "../../public/hacker.png";
import logo from "../../public/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Logo" width={120} height={120} />
          <h1 className="text-white text-2xl font-bold">Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-white">User</span>
          <Image
            src={avatar}
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>
    </nav>
  );
}
