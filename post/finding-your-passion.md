---
title: Finding Your Passion
date: "05-01-2021"
author: Vishnu Rupan
image: finding-your-passion.jpg
text: Do you have a passion? Is there something you wish to accomplish during your time on Earth? It's not easy to find your passion, but there are steps one can take
isFeatured: true
---

After reading how to [automate the boring stuff with Python](https://automatetheboringstuff.com/), and learning about web scraping with Selenium, I decided to automate resume submissions using emails scraped from [Canada Job Bank](https://www.jobbank.gc.ca/home). I tried to make it modular for a quick fun side project.

- **I do not use this to submit resumes for obvious reasons.**
- **Works as of 2021-02-05**

## How it works

Prior to starting, you'll be asked to:

- allow "risky" apps on your google account
- upload your resume
- filter out key search words for postings
- type an email signoff.

It starts by going to a prefiltered URL on the jobbank website and checking to see whether the postings "how to apply" is by email.
If yes, then it scrapes:

- The email
- Employer name
- Job title
- Jobbank ID
- And Salary.

This is then used to created an excel spreadsheet with details of all job postings scraped.
Once the spreadsheet has been created, the app will start sending employers an email with your attached resume with a subject and short body paragraph.

![image](water.jpg)
