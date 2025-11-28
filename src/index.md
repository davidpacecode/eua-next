---
# Feel free to add content and custom Front Matter to this file.

layout: default
---

<wa-card class="card-basic" style="text-align: left">

  <section id="history" style="margin-bottom: 3rem;">
    <h3>History</h3>
    <%= render "eua_history", milestones: collections.milestones %>
  </section>

  <section id="about-eua" style="margin-bottom: 3rem;">
    <%= render "eua_principles" %>
  </section>

  <section id="myo" style="margin-bottom: 3rem;">
    <h3>EUA MYO Changes</h3>
    <%= render "myo" %>
    <ul>
      <li>Lean in to Strategic Programs and Initiatives</li>
      <li>UX 2.0</li>
      <li>Rapid alignment</li>
      <li>Comms and Change Management evolved</li>
      <li>Emerging talent for the organization</li>
    </ul>
  </section>

  <section id="lt" style="margin-bottom: 3rem;">
    <%= render "leadership_team", lt_members: collections.lt_members %>
  </section>

</wa-card>


