---
title: <% tp.file.title %>
date: <% moment().format('YYYY-MM-DD') %>
draft: false
description: Description of the page used for link previews. Delete this if not wanted
tags:
---

<div class="article-header green-white">

<div>

<div class="decorative-element"></div>

# Change header here!

Text here!

</div>

<img loading="lazy" role="img" src="./cat_excited.png">

</div>

---
<< [[<% fileDate = moment(tp.file.title, 'MMMM-DD-YYYY').subtract(1, 'd').format('MMMM-DD-YYYY') %>|Yesterday]] 
| [[<% fileDate = moment(tp.file.title, 'MMMM-DD-YYYY').add(1, 'd').format('MMMM-DD-YYYY') %>|Tomorrow]] >>

See ya, <a target="_blank" rel="noopener noreferrer" href="https://www.brodypen.com/">--Brody<a>
