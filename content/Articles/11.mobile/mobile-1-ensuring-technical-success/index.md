---
createdAt: 2024-03-01
title: "Ensuring Technical Success From a Mobile App Developer Perspective"
description: "We can't fix every problem but we can fix a few. Here are the list of items I have to have checked off before even thinking about saying we need more developers, I'm free or 'Whats next?'"
navigation: true
tags: mobile
---

# Technical Success Checklist
Everyone's measure of success is different.

A veteran founder, an experienced VC, a seasoned developer can all offer meaningful thoughts on what success looks like.

Wearing my developer hat, the following is a list of items I personally checklist for any project to feel confident the product can scale(in terms of technical development).

## Business Development Requirements:

- [ ] Legally incorporated company:
  - [ ] Legal incorporation is required to buy/create the correct type of developer account(more next).
- [ ] Apple Developer Program(Organization):
  - [ ] Without this we cannot release many types of apps to the App Store(news, finance/fin-tech especially). [Read more](https://developer.apple.com/app-store/review/guidelines/).
- [ ] PlayStore Developer Account(Organization):
  - [ ] Android/Google has dittoed Apple's limitations in many cases including this.
- [ ] Custom Domain for hosting privacy policy and choosing an app/bundle id which we're confident makes sense.

## Technical Requirements:

- [ ] Automated builds of APKs & IPAs using CI/CD best practices:
  - [ ] A commit/tag triggers an appropriate Github Action.
  - [ ] Signing keys & certs hosted in cloud(as opposed to on individual developer machines).
  - [ ] Bundles are versioned & build numbered in a consistent, meaningful & scalable way.
  - [ ] Bundles are distributed automatically(I prefer Firebase App Distribution).
- [ ] Workflow/Project Management process documented/outlined:
  - [ ] The following are some tools we can use. [Trello](https://trello.com), [Notion](https://www.notion.so), [Jira](https://www.atlassian.com/software/jira), [Monday](https://monday.com/), [Github Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/quickstart-for-projects), [ClickUp](https://clickup.com/), [Asana](https://asana.com/).
  - [ ] What's more important than the tools we use though is whether or not the stakeholders understand how to use it & the flow for adding items/features/requests/etc.
- [ ] Automated Tests(basic/bare minimum):
  - [ ] Frameworks like React Native & Flutter promise "write once & run everywhere". However it's common that implementing a feature or fixing an issue for one platform produces *silent errors* on another/others. For example, a successful build/load of an app but a white/black/blank screen when the app is opened. Tools such as [Appium](https://appium.io/docs/en/latest/), [Maestro](https://maestro.mobile.dev/), [Selenium](https://www.leapwork.com/discover/selenium-automation) can mitigate these problems.
- [ ] Logs/Analytics/Reports:
  - [ ] Understanding what's going on is crucial for growth. Whether it's knowing which features have users the most engaged(keep focus firing!) or troubleshooting bugs that produce a frustrating user experience; tools such as [Google Analytics](https://firebase.google.com/docs/analytics) & [Sentry](https://sentry.io/welcome) give us a North star to trek toward.

Tweet me [@idolworker](https://twitter.com/idolworker){:target="_blank"} if you think I've missed anything.