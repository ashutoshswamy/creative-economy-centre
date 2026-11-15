"use client";

import { useState } from "react";

// TODO: send to the mailing provider (double opt-in).
export default function ObservatorySignup() {
  const [sent, setSent] = useState("");
  if (sent)
    return <p className="col w5 st8 t-lead" role="status">Thank you. We will send a confirmation link to <b>{sent}</b>.</p>;

  return (
    <form className="col w5 st8 news-form" aria-label="Observatory launch signup" onSubmit={(e) => { e.preventDefault(); setSent(String(new FormData(e.currentTarget).get("email"))); }}>
      <div className="field"><label htmlFor="ob-mail">Email address</label><input id="ob-mail" name="email" className="input" type="email" required autoComplete="email" /></div>
      <div className="field"><label htmlFor="ob-role">I am a</label>
        <select id="ob-role" name="role" className="select" defaultValue="Researcher">
          {["Researcher", "Policymaker", "Practitioner", "Industry or platform", "Journalist", "Student"].map((r) => <option key={r}>{r}</option>)}
        </select></div>
      <label className="check"><input type="checkbox" required /> I agree to be contacted about the Observatory.</label>
      <div className="row"><button className="btn btn-primary btn-lg btn-arrow" type="submit">Notify me</button></div>
    </form>
  );
}
