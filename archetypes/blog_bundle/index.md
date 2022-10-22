---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
weight: {{ .Date.Format "20060102150405" }}
description: "説明"
menu:
  sidebar:
    name: "ツリーの表示名"
    identifier: "{{ .Date }}"
    weight: {{ .Date.Format "20060102150405" }}
tags: []
categories: []
---

