---
# Feel free to add content and custom Front Matter to this file.

layout: default
---

<wa-card class="card-basic">

  <h3>EUA over time</h3>

  <%= render "eua_history", milestones: collections.milestones %>

  <h3>Leadership Team</h3>

  <%= render "leadership_team", lt_members: collections.lt_members %>

</wa-card>


