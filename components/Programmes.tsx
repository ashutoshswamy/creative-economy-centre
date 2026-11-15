"use client";

import { useState } from "react";
import { events, programmeTypes } from "@/lib/content";
import { Arrow, Pat } from "./ui";
import { Place } from "./icons";

const statusLabel = { open: "Open", closing: "Closing soon", soon: "Opening soon", closed: "Closed" } as const;
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dow = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Events carry only day and month in the placeholder data; the year is the next occurrence.
const startYear = 2026;
const yearOf = (m: number) => (m >= 10 ? startYear : startYear + 1);

export default function Programmes() {
  const [view, setView] = useState<"cards" | "calendar">("cards");
  const [type, setType] = useState("");
  const [cur, setCur] = useState({ y: startYear, m: 10 });

  const list = events.filter((e) => !type || e.type === type);
  const types = [...new Set(events.map((e) => e.type))];
  const open = events.filter((e) => e.status === "open" || e.status === "closing");

  const first = (new Date(cur.y, cur.m, 1).getDay() + 6) % 7;
  const days = new Date(cur.y, cur.m + 1, 0).getDate();
  const monthEvents = list.filter((e) => e.month === cur.m && yearOf(e.month) === cur.y);
  const step = (d: number) => setCur((c) => { const n = new Date(c.y, c.m + d, 1); return { y: n.getFullYear(), m: n.getMonth() }; });

  return (
    <>
      {open.length > 0 && (
        <div className="sec-s">
          <div className="wrap">
            <div className="vm" style={{ ["--tone" as string]: "var(--band-indigo)", ["--on-tone" as string]: "var(--on-fill)" }}>
              <Pat p="rangoli" />
              <p className="t-eyebrow">Open calls</p>
              <ul className="grid-2" style={{ ["--gut" as string]: "24px" }}>
                {open.slice(0, 2).map((e) => (
                  <li key={e.slug}><span className="tag tag-solid tone-tur">{statusLabel[e.status]}</span><p className="t-h3 mt-s">{e.title}</p></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <section className="sec-s">
        <div className="wrap">
          <div className="row-b">
            <div className="chips-scroll" role="group" aria-label="Programme type">
              <button type="button" className={`chip${!type ? " is-on" : ""}`} aria-pressed={!type} onClick={() => setType("")}>All</button>
              {[...programmeTypes.filter((t) => types.includes(t)), ...types.filter((t) => !programmeTypes.includes(t))].map((t) => (
                <button key={t} type="button" className={`chip${type === t ? " is-on" : ""}`} aria-pressed={type === t} onClick={() => setType(type === t ? "" : t)}>{t}</button>
              ))}
            </div>
            <div className="lang" role="group" aria-label="View">
              <button type="button" aria-pressed={view === "cards"} onClick={() => setView("cards")}>Cards</button>
              <button type="button" aria-pressed={view === "calendar"} onClick={() => setView("calendar")}>Calendar</button>
            </div>
          </div>

          {view === "cards" ? (
            list.length ? (
              <ul className="grid-2 mt-m">
                {list.map((e) => (
                  <li key={e.slug} style={{ display: "flex" }}>
                    <article className={`card ev-card tone-${e.tone}`} style={{ flex: 1 }}>
                      <div className="ev-date"><Pat p="jaal" /><b>{e.day}</b><span>{e.mon}</span></div>
                      <div className="card-body">
                        <div className="taglist"><span className="tag tag-tone">{e.type}</span><Place>{e.place}</Place></div>
                        <h3><a className="stretch" href="#register" onClick={(ev) => ev.preventDefault()}>{e.title}</a></h3>
                        <div className="card-foot"><span className={`status status-${e.status === "closing" ? "soon" : e.status}`}>{statusLabel[e.status]}</span><span className="lnk" aria-hidden="true">Register</span></div>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="empty mt-m"><h2 className="t-h3">No programmes of this type yet</h2><button type="button" className="btn btn-primary mt-m" onClick={() => setType("")}>Show all programmes</button></div>
            )
          ) : (
            <div className="mt-m">
              <div className="cal">
                <div className="cal-head">
                  <button className="icon-btn" type="button" aria-label="Previous month" onClick={() => step(-1)}><Arrow dir="left" /></button>
                  <h2 className="t-h3" aria-live="polite">{months[cur.m]} {cur.y}</h2>
                  <button className="icon-btn" type="button" aria-label="Next month" onClick={() => step(1)}><Arrow /></button>
                </div>
                <div className="cal-grid">
                  {dow.map((d) => <div key={d} className="cal-dow">{d}</div>)}
                  {Array.from({ length: first }, (_, i) => <div key={`b${i}`} className="cal-cell mute" aria-hidden="true" />)}
                  {Array.from({ length: days }, (_, i) => {
                    const todays = monthEvents.filter((e) => Number(e.day) === i + 1);
                    return (
                      <div key={i} className={`cal-cell${todays.length ? " has" : ""}`}>
                        <span className="dn">{i + 1}</span>
                        {todays.map((e) => <span key={e.slug} className={`cal-pill tone-${e.tone}`}>{e.type}</span>)}
                        {todays.length > 0 && <span className="cal-dots">{todays.map((e) => <i key={e.slug} className={`cal-dot tone-${e.tone}`} />)}</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mt-m" role="status">
                <h3 className="t-h4">Agenda for {months[cur.m]}</h3>
                {monthEvents.length ? (
                  <ul className="mt-s">
                    {monthEvents.map((e) => <li key={e.slug} className={`ev-row tone-${e.tone}`}><div className="d"><b>{e.day}</b><span>{e.mon}</span></div><div><div className="taglist"><span className="tag tag-tone">{e.type}</span><Place>{e.place}</Place></div><h3>{e.title}</h3></div></li>)}
                  </ul>
                ) : <p className="soft mt-s">Nothing scheduled this month.</p>}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
