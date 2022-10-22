---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
weight: {{ .Date }}
menu:
  sidebar:
    name: "{{ replace .Name "-" " " | title }}"
    identifier: "{{ .Date }}"
    weight: {{ .Date }}
    parent: ""
---

