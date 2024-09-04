'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/MicrosoftTeams-image.png';
import { useRouter } from 'next/router';

const sidebarLinks = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Real-time Alerts", path: "/real-time-alerts" },
  { name: "Detailed Analysis", path: "/detailed-analysis" },
  { name: "Data Visualization", path: "/data-visualization" },
  { name: "System Logs", path: "/system-logs" },
  { name: "Model Management", path: "/model-management" }
];
  
const SideBar = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(sidebarLinks[0].path);

  return (
    <section className="custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y border-r shadow-light">
      <Image 
        src={logo}
        width={200}
        height={200}
        alt="fraudguardai"
        objectFit="contain"
      />

      <nav className="flex flex-col mt-1">
        {sidebarLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.path}
            className={`p-4 hover:bg-cyan-500 ${
              router.pathname === link.path || activeLink === link.path ? 'bg-gray-300 font-poppins' : ''
            }`}
            onClick={() => setActiveLink(link.path)}
          >
            {link.name}
          </Link>
        ))}
      </nav>
     
    </section>
  );
}

export default SideBar;
