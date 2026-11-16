"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/content";
import { BrandMark } from "./BrandMark";
import { Bars3BottomLeftIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Nav() {
  const path = usePathname();
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const isActive = (href: string) => path === href || path.startsWith(href + "/");
  const close = () => setMenu(false);

  return (
    <header className="nav">
      <div className="nav-in">
        <Link className="brand" href="/" aria-label="Centre for the Creative Economy, home" onClick={close}>
          <BrandMark />
          <span className="brand-text">
            <span className="brand-name">Centre for the<br />Creative Economy</span>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {nav.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className={"soon" in it ? "soon" : undefined}
              aria-current={isActive(it.href) ? "page" : undefined}
            >
              {it.en}
            </Link>
          ))}
        </nav>

        <div className="nav-tools">
          <button
            className="icon-btn"
            type="button"
            aria-label="Search the site"
            aria-expanded={search}
            onClick={() => { setSearch(!search); setMenu(false); }}
          >
            <MagnifyingGlassIcon width={22} height={22} aria-hidden="true" />
          </button>
          <Link className="btn btn-accent btn-sm nav-cta" href="/partners">Collaborate</Link>
          <button
            className="icon-btn burger"
            type="button"
            aria-label="Menu"
            aria-expanded={menu}
            onClick={() => { setMenu(!menu); setSearch(false); }}
          >
            {menu ? <XMarkIcon width={24} height={24} aria-hidden="true" /> : <Bars3BottomLeftIcon width={24} height={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {search && (
        <div className="searchpanel">
          <div className="inner">
            <form className="searchbar" role="search" action="/knowledge-hub">
              <MagnifyingGlassIcon width={22} height={22} aria-hidden="true" />
              <label className="sr-only" htmlFor="site-search">Search reports, datasets, stories and events</label>
              <input id="site-search" name="q" type="search" placeholder="Search reports, datasets, stories, events" autoFocus />
              <button className="btn btn-primary btn-sm" type="submit">Search</button>
            </form>
            <div className="taglist mt-s">
              <span className="t-cap" style={{ alignSelf: "center" }}>Try:</span>
              {["craft clusters", "guru-shishya", "creator livelihoods", "kalamkari"].map((q) => (
                <Link key={q} className="tag" href={`/knowledge-hub?q=${encodeURIComponent(q)}`} onClick={() => setSearch(false)}>{q}</Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {menu && (
        <div className="menu">
          {nav.map((it) => (
            <Link key={it.href} className="m" href={it.href} aria-current={isActive(it.href) ? "page" : undefined} onClick={close}>
              <span>{it.en}</span>
              <small>{"soon" in it ? "Soon" : ""}</small>
            </Link>
          ))}
          <Link className="btn btn-accent btn-lg btn-arrow" href="/partners" onClick={close}>Collaborate</Link>
        </div>
      )}
    </header>
  );
}
