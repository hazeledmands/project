# project

A git project directory tool. Assumes you keep all your projects in a directory called `$PROJECTS`.
If true, running `project <projname>` does the following:

1. Checks to see if `<your github username>/<projname>` exists.
  1. If yes, clones the project into `$PROJECTS/<projname>`
  2. If no, initializes a new project in `$PROJECTS/<projname>`
2. Runs whatever is in `$HOME/.project/post-all`
