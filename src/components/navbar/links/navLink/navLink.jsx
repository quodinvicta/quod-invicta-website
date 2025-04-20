"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";

const NavLink = ({ item, onClick }) => {
  const pathName = usePathname();
  
  return (
    <Link 
      href={item.path}
      className={`${styles.link} ${pathName === item.path && styles.active}`}
      onClick={onClick}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;