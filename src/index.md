---
# Feel free to add content and custom Front Matter to this file.

layout: default
---

<wa-card class="card-basic">

  <section style="margin-bottom: 3rem;">
    <h3>EUA over time</h3>
    <%= render "eua_history", milestones: collections.milestones %>
  </section>

  <section style="margin-bottom: 3rem;">
    <%= render "eua_principles" %>
  </section>

  <section style="margin-bottom: 3rem;">
    <%= render "leadership_team", lt_members: collections.lt_members %>
  </section>

</wa-card>


