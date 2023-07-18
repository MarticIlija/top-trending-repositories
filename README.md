# top-trending-repositories

App for displaying Github top-trending repositories

Evaluation Component
The premise of this assignment is to construct a minimalistic client application designed for the
identification of top-trending GitHub repositories.

We expect the program to present a list of repositories established in the previous week,
prioritized by the count of stars on GitHub. The user interface should permit users to 'star' these
repositories.

These 'starred' repositories should be readily accessible either by utilizing a filter or within a
separate tab. Basic details about each repository should be displayed, such as repository name,
hyperlink to GitHub, a brief description, and the count of stars.

In order to maintain simplicity, the 'starred' repositories need not be synchronized back to
GitHub's servers but can be preserved locally (e.g., localstorage, cookies, etc.).

You have the liberty to choose the libraries/design systems that you deem fit for accomplishing
this task.

Optional Component: If you have sufficient time, integrating a feature that allows users to filter
repositories based on the programming languages utilized would be an excellent enhancement.

Execution Specifics
GitHub offers a public search endpoint that can be harnessed for fetching the repositories with
the highest star count:

https://api.github.com/search/repositories?q=created:>2017-01-10&sort=stars&order=desc
We place importance on lucid, easily comprehendible code, application of semantic HTML,
adherence to CSS naming conventions, and the inclusion of tests.
