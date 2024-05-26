"use client";

import styles from "./links.module.css";
import NavLink from "./navlink/NavLink";
import { useState } from "react";
import Image from "next/image";
import { handleLogout } from "@/lib/logout";

const Links = ({session}) => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.path} />
        ))}
        {session?.user? (
          <>
            {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <form action={handleLogout}>
              <button className={styles.logout}> Logout </button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        src="/menu.png"
        alt="menu image button, three horizontal lines"
        width={30}
        height={30}
        onClick={() => setOpen((previousState) => !previousState)}
        className={styles.menuButton}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.path} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Links;
