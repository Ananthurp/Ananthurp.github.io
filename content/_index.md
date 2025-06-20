---
title: "Hello, I’m Ananthu !"
layout: "profile"               # tells PaperMod to use the hero/portrait layout
outputs: ["HTML", "RSS"] 
# --- profile-mode specific ---
imageUrl: "images/profile.jpg"  # path is relative to /static
imageTitle: "Ananthu Rajendran Pillai portrait"
buttons:                        # call-to-action buttons under the intro text
  - name: "View Resume"
    url: "/Ananthurp_Resume.pdf"
  - name: "Projects"
    url: "/projects/"
# --- optional SEO helpers ---
description: "Passionate ML/DL engineer, currently at NTU Singapore."
keywords: ["Machine Learning", "Deep Learning", "Portfolio"]

# custom param we’ll consume in the shortcode below
timeline:
  - date: 2024-03-20
    human: "Mar 2024"
    text: "Started as Research Intern, Energy Research Institute @ NTU."
  - date: 2024-01-10
    human: "Jan 2024"
    text: "Began Master’s in Computer Control & Automation at NTU Singapore."
  - date: 2023-08-31
    human: "Aug 2023"
    text: "Wrapped up an amazing year at Schneider Electric."
# …add the rest
---
Welcome!  
I’m a machine learning & deep learning engineer driven by curiosity.  
From NLP and large language models to computer vision and intelligent
systems, I love building practical AI solutions that push boundaries.

{{< timeline >}}

