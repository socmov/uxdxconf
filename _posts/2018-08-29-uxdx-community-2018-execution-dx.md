---
layout: post
categories: blog
author: Rory Madden
published: false
title: 'UXDX Community 2018: Execution : DX'
date: '2018-08-29 19:45:00 0000'
---
In the last post we shared the [key trends in the UX space](https://uxdxconf.com/blog/uxdx-community-2018-execution-ux) that came out of the UXDX community events in 2018. Now it’s time to start to explore the best practices in delivery - while keeping a focus on the outcomes that your product is trying to achieve. 

# Sharing Prototypes

> “Bringing the development team into the discovery phase will reduce miscommunication” - Tweet this

Bringing the development team into the discovery phase will reduce miscommunication but there is still a need to share the feature designs with the developers. [Oscar Nilsson, Experience Designer at Minecraft](https://youtu.be/ueanfQXFtLo), recommends optimising your handover to the development team in the following key areas:

## Logic
Developers think in terms of events and the state of the application after each event. Most designers deal in timelines, which are a flow through a defined set of state changes, but most developers think in terms of branches, representing each edge case at each timeline step. By building these branches into your prototype this will help to optimise the handover. 

## Components
Re-use saves time so try to limit the use of one-off components. If an existing component can be re-used this will help to speed up the development time.

## Data
Fantasy data, while useful for populating a design can mask some of the challenges that your designs encounter real data. There are a number of tools that let you import data so its likely that your prototyping tool enables this. This step can help to identify bugs that otherwise would be found much later in development, when its more expensive to fix them. 

# Build
![uxdx-model-build.png]({{site.baseurl}}/images/uxdx-model-build.png)
## Focus on the Outcome
There is a risk that as teams move into the build stage the focus on outcomes is replaced with the process of building the features. This is dangerous as, over time, people may forget the reason about why we’re building something and invalid assumptions creep in leading to well intentioned but incorrect decisions. 

> “If you’re not watchful, the process can become the thing. The process becomes the proxy for the result you want” Jeff Bezos - Tweet This

This is where Hypothesis Driven Development (HDD) comes in. HDD is a way of writing user stories that keeps the focus on the outcome. THe format is almost identical to traditional stories except for two key aspects. THe first is that the stories are phrased “I believe that” which removes the fallacy that we know for sure what the effect will be. The second is that the stories end with “And I’ll know I’m right when …”. The metric that we are trying to measure should be placed here. This ties the story back to the outcome that we are trying to achieve and it gives us a great way of comparing our expectations against reality after a feature is released.  

## Full Transparency
There is an abundance of data being collected during the research phase. Unfortunately some teams are worried about sharing that data with the development teams. This was highlighted in a number of talks and it can lead to pretty bad consequences for products. As mentioned above, teams need to stay focussed on the outcome being achieved but they also need access to the latest data and stats to ensure that their assumptions about behaviours are accurate. In the [Agile Transformation article](https://uxdxconf.com/blog/uxdx-community-2018-agile-transformation) I highlighted how product teams are constantly facing choices about how to build their products. In order to build successful solutions the team need to understand how the product is meeting the needs of the customers today and where the weak points are that need to be resolved. 

## Maintaining Quality
When it comes to development there is the famous line that there are three choices - good, fast and cheap, but you can only pick two. Fast and cheap tend to be business priorities but lack of investment in quality both slows down development and damages the user experience of your product. Everyone wants sustainable and predictable development so team leaders need to balance the pressures of business deadlines with the need to maintain the quality of the product. 

Refactoring is the term that development teams use to tidy up the code base. In essence it involves rewriting working code to make it easier to maintain. Unfortunately whenever you edit code there is a risk of breaking things that are already working. However, the more you put off refactoring the messier the code becomes which increases the risk of things. The earlier and more regularly that you maintain your code the less impact it will have on your customers. Given the importance of refactoring teams have identified a path forward: (Acceptance) Test Driven Development. The core concept is to write tests to validate a feature before you write the code in the first place. Nik Crabtree, Lead Principal Software Developer at ASOS gave a talk on [the benefits of ATDD](https://youtu.be/IpBXhOzoPsU) including the core concept of Red, Green, Refactor. The idea behind Acceptance Test Driven Development (ATDD) is that you write a test for a feature that doesn’t exist (Red - because the test will fail), then you write the simplest piece of code to make the test pass (Green) and the final step is to edit the code more maintainable over time (Refactor). Writing these tests introduces an initial overhead for teams but the benefit is that teams can know immediately if they have broken something during a refactor as the tests start to fail. In addition to the safety benefits, some teams report increases in efficiency as the tests make them more focussed in writing the initial code.

> TDD gives developers the freedom to properly maintain their code - Tweet this

## Continuous Improvement
The final trend from the UXDX community sessions was that struggle that a lot of teams face where they know there are things that they can improve but they are constantly rushing from one deadline to the next, doomed to replicate the same mistakes again and again. This is known as Survivorship mode, according to Roy Osherove, author of Elastic Leadership: Growing Self-Organising Teams. [Fabrizio Fortunato, Head of Frontend at Ryanair](https://youtu.be/epfwPgm8R9o) talked about how team leads should aligning their style of leadership based on the mode that the team is working in. The goal of this approach is to help teams move from Survivorship to Learning mode, where they can analyse their practices, identify alternate approaches to problems, and ultimately become Self-Organising.

# Test
![uxdx-model-test.png]({{site.baseurl}}/images/uxdx-model-test.png)

The testing sessions that we held prompted the most questions so there is clearly a lot of interest in the quality space. Scott Riseborough gave a fantastic talk on [Manual versus Automated testing](https://youtu.be/5w57In8lSPQ) at UXDX London. Manual testing has a bad reputation but as Scott explained there is a no single right approach for every situation. Manual testing is cheaper in the short term, it’s more flexible to change and people can often come up with creative solutions to problems. When you are testing something new, and particularly if you’re not sure you will need to support it long term, manual testing can be the best solution. However if you are building something that will need to be tested repeatedly and for an extended period then automation is the way to go. 

## The Test Pyramid
![test-pyramid.png]({{site.baseurl}}/images/test-pyramid.png)
Credit:[Martin Fowler](https://martinfowler.com/bliki/TestPyramid.html)

The test pyramid is a concept that separates tests into three categories: Unit tests (tests for isolated pieces of code), Integration Tests (tests that combine multiple pieces of code to validate that they work together), and UI tests (tests which validate the end-to-end flow for a customer through the User Interface). The test triangle is named as it advocates having a lot of Unit tests (very quick), less Integration tests (not as quick) and even fewer UI tests (very slow). This is definitely best practice if you are starting out with a new product but if you have an existing product in place where should you start? Russell Sim, Test Engineer at Zendesk touched on this in his talk on [Improving the tools and processes in DevOps](https://youtu.be/pPGAvwlnkz0). Recognising that some products have no coverage at all, Russell recommended inverting the test pyramid: start building out full coverage across your UI tests as these will give you the best short term rewards. Over time you can redress the balance in your tests, while ensuring high quality.

> “If you want to get automated testing coverage on an existing product inver the test pyramid and start with UI tests” - Tweet this

## Developers writing tests
We touched on ATDD in the Build section, which is a great method of building a regression test suite for your product, however it should not be relied upon to provide full coverage. The tests that developers write will follow happy paths and only include a small sample of data variations. The test team will be responsible for testing more edge cases and data variations to ensure a more robust and high quality product. 

# Release
![uxdx-model-release.png]({{site.baseurl}}/images/uxdx-model-release.png)

The release train involves migrating the code that you want to deploy through a number of pre-production environments where different sets of tests are executed against the code to validate that everything works as expected. This process used to be very manual, time consuming and error prone.  

## Automated Environments: Infrastructure as Code
Before virtualisation and cloud computing when you needed a new server someone went and bought the machine, waited for it to be delivered, plugged it in and installed the necessary software. Now teams can click a few buttons on their favourite cloud provider and the new servers are up and running in minutes. This Infrastructure-as-a-Service (IaaS) offering solved the speed issue in infrastructure provision but maintenance remained a problem. There are multiple environments on a path to production including the Dev, SIT, UAT and Pre-prod environments among others. Configuration changes are required in these environments over time but given that these changes are manual it means that the environments inevitably become out of sync. The solution to this is to stop letting people make changes to environments! And this is where infrastructure as code comes in. If you need to tweak an environment you change the configuration in a file, build a new environment using the new configuration and retire the old environment. By preventing manual changes you can always know the state of the environment as it is captured in the configuration file. While the concept is simple creating and maintaining these configuration files is a challenge in itself!

## Automated Migrations: Pipelines
Having consistent environments helps to solve a lot of challenges teams used to face but there is still a lot of manual work required to prepare a package of code for a release, spin up a new environment based off of a configuration file deploy the code to the new environment, run a suite of tests against the code and then repeat based on the number of environments that you have. Build pipelines are used to automate all of these steps to both speed up the process as well as remove the risk of manual mistakes. [Ross McKinley, Senior Build Engineer at DICE (EA Digital Illusions)](https://youtu.be/cOpRleAFplE), shared his experience at UXDX Stockholm where his team invested a lot more time in the initial environment and pipeline build upfront so that development teams were able to self manage the migration of code between environments. While this might seem like a simple thing by removing the dependency on third party support development teams have achieved weeks of time savings on each release. 

## Delegated Ownership
Previously developers didn’t pay too much attending to hardware but the large cloud vendors are shifting from pure Infrastructure as a Service (IaaS) offerings to Platform as a Service (PaaS) offerings and even into the Software as a Service (SaaS) space. Developers can reduce the amount of code that they need to write by taking advantage of these more functional cloud products. While this delivers great benefits to development teams it increases the workload on the operations teams who may not be familiar with these new tools. One approach to address this challenge is to make each development team responsible for their own hardware, removing the risk on the operations team while enabling the product teams to take advantage of the new cloud products. A secondary benefit of delegated ownership is that the developers learn the constraints of the infrastructure and can take more ownership over performance. Fabrizio Fortunato explained to UXDX Dublin how his teams are given performance budgets when developing new features. They have an amount to spend but they need to ensure that the full feature comes in within budget. And they can’t hide behind infrastructure anymore!

## Continuous Improvement: Where is the Value?
New tools and processes enable even further ideas that once didn’t seem possible. Automation removes so many of the previous problems that the purpose of having different environments for different stages of testing is being brought into question. Some teams are starting to question the need for pre-production environments completely. Natalia Bartol and Fabio Cognigni from Hudson Bay Company, gave a talk on [No Risk, no reward. The joys of testing in Production](https://youtu.be/e2x-IUSo3sI). The team reviewed the challenges that they faced in their pre-production environments from configuration synchronisation, to valid data setup, to third party service predictability. In this instance the solution the team came up with was that it would be more efficient, and higher quality, to release code straight to production and test it there. Hudson Bay Company manage a platform product that support multiple brands such as Saks Fifth Avenue, Galeria Kaufhof, Gilt and more. Each brand is isolated from the other on the platform so the team created a new company just for testing. Code is released to this brand where is is tested under more real-world conditions. Once everything passes the code is released to other brands. When teams are in learning mode many different solution to previously challenging problems can appear.

> “When teams are in learning mode many different solution to previously challenging problems can appear.” - Tweet this 

# Deploy
![uxdx-model-deploy.png]({{site.baseurl}}/images/uxdx-model-deploy.png)

After all of the hard work it’s now time to get your new features into the hands of your customers. 

## Frequent Deployments
There are numerous benefits to releasing frequently from reducing the risk of the deployment to enabling better customer insights through more granular and isolated changes. There are overheads associated with deployments though so the challenge is to find the right frequency of deployments based on the cost of deploying. Automation has dramatically reduced the cost of deploying so the cost tradeoff continues to drop. This has enabled companies like Amazon and Google to deploy over 10,000 times a day. 

The tools and techniques to automate code migrations across the non-production environments can help with deployments but since your customers are using your production product so you can’t just build a new environment and tear down the old one like you can with your other environments. You can do something similar to that though. With Blue/Green or Canary releases you build a new production stack which includes your new feature and then you start migrating traffic in stages across to the new stack. This piecemeal migration enables teams to verify everything is working while impacting only a small percentage of customers. If problems arise all of the traffic reverts to the old instance and the issues are investigated. Once all of the traffic is migrated to the new environment you can retire the old stack. As teams start to release more frequently even this gradual migration process becomes automated. The only need for human intervention is when one of the health metrics being monitored drops and the code needs to be investigated.

> Deployments used to be big events but as teams automate more and release more frequently they become routine and boring! - Tweet this 

# Monitor
![uxdx-model-monitor.png]({{site.baseurl}}/images/uxdx-model-monitor.png)

The final step in the UXDX cycle is where the real learning comes in. Having specified your assumptions and experiments up front you can track customer behaviours and prove or disprove your hypothesis . Not every idea will work but the key thing is that you will have uncovered this before investing many more months building more complex iterations of a feature. 

> Build-Measure-Learn - the simple process that leads to amazing products. - Tweet this

# From Delivery to Use
You've built an amazing product. But where are the customers. The final section of the UXDX community series will touch on the talks that people gave around raising awareness for their products, but also how to keep people engaged and promote feature discovery once they are engaged.


## UXDX Community
[UXDX](https://uxdxconf.com) has a mission to help teams accelerate product success. We believe that this is done by incorporating UX into the product lifecycle and breaking down the silos within teams. Throughout May and June 2018 UXDX ran community events in 8 different cities across Europe. The core concept was the same; bring together different speakers, from UXers, designers, product managers and developers, to give insights across the whole product life-cycle. This series of blogs will go through the trends uncovered during the events.

- [Agile Transformation](https://uxdxconf.com/blog/uxdx-community-2018-agile-transformation)
- [Product Vision](https://uxdxconf.com/blog/uxdx-community-2018-product-vision)
- [Execution: UX](https://uxdxconf.com/blog/uxdx-community-2018-execution-ux)
- Execution: DX
- Launch
