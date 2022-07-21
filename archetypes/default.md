---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
weight: {{ replace .Name "-" "" }}
description: "説明"
menu:
  sidebar:
    name: "ツリーの表示名"
    identifier: "{{ .Date }}"
    weight: {{ replace .Name "-" "" }}
tags: []
categories: []
---

