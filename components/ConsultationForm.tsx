"use client";

import { useState } from "react";

// TODO: route to the policy desk. Responses must never be logged raw or published without consent.
export default function ConsultationForm({ items }: { items: string[] }) {
  const [done, setDone] = useState(false);
  if (done)
    return <div className="formcard" role="status"><h3 className="t-h3">Response received</h3><p>Thank you. A member of the policy team will acknowledge it by email within five working days.</p></div>;

  return (
    <form className="formcard" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <div className="field"><label htmlFor="c-item">Consultation</label>
        <select id="c-item" name="item" className="select" required>{items.map((i) => <option key={i}>{i}</option>)}</select></div>
      <div className="form-2">
        <div className="field"><label htmlFor="c-name">Name</label><input id="c-name" name="name" className="input" required autoComplete="name" /></div>
        <div className="field"><label htmlFor="c-mail">Email</label><input id="c-mail" name="email" type="email" className="input" required autoComplete="email" /></div>
      </div>
      <div className="field"><label htmlFor="c-how">How would you like to respond?</label>
        <select id="c-how" name="how" className="select" defaultValue="Written">{["Written", "Audio recording", "Video", "Email to the policy desk"].map((h) => <option key={h}>{h}</option>)}</select></div>
      <div className="field"><label htmlFor="c-msg">Your response</label><textarea id="c-msg" name="message" className="textarea" required />
        <span className="hint">You can write in English or Hindi.</span></div>
      <label className="check"><input type="checkbox" name="anon" /> Publish my response without my name.</label>
      <label className="check"><input type="checkbox" required /> I consent to the Centre storing this response for the consultation.</label>
      <div><button className="btn btn-primary btn-lg btn-arrow" type="submit">Send response</button></div>
    </form>
  );
}
