## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  

<pr>
#### add

git add : Before you can commit your changes to Github, you need to use git add to add the files to the 'staging area'. This has to be done for
any New files or existing files that you have modified.

#### branch
git branch: git branch will list out all the branches under the current repository. We can also do 'git branch week_9' this will create a New branch
Under the current repository

#### checkout
git checkout: git checkout allows you to navigate between branches. Checking out a branch updates the files in the working directory to the version stored 
in that branch.

#### clone
<!-- Your defnition here -->
git clone: git clone allows you to clone a repository onto newly created directory. It will also create remote tracking for each branch in the cloned repository

#### commit
<!-- Your defnition here -->

git commit will commit your changed (made locally) to github.

#### fetch
<!-- Your defnition here -->

git fectch pulls commits from a remote repository into your local repo.The results are stored as remote branches instead of local branches.
You need to use git merge to merge the changes 

#### log
<!-- Your defnition here -->
git log will show you all the commits you have made on that branch. It has all the History of commits made

#### merge
<!-- Your defnition here -->

git merge: Allows you to merge changes you made on your Master branch

#### pull
<!-- Your defnition here -->

git pull: git pull is automated form of git fetch. It allows you to pull changes made to remote repository as well as merge them in a single command

#### push
<!-- Your defnition here -->
git push pushes changes from your local repository to the remote repository.

#### reset
<!-- Your defnition here -->
git reset is a way to undo any changes you made permanently.
#### rm
<!-- Your defnition here -->

#### status

git status will show you state of working directory and staging area. It lets you see which changes have been staged and which havent and which files are not tracked by Git.

</pr>
## Release 3: Git Workflow

<pr>
- Push files to a remote repository

In order to push files to remote repository you need to do the below - 

- Naviage to the directory in which your file is created/modified
- Type git add 'filename'
- Type git commit -m "Added filename"
- Type git push origin master

- Fetch changes

git fetch

- Commit locally

git merge

</pr>

#Reflections

<pr>

What parts of your strategy worked? What problems did you face?

Had to research on some of the commands since I havent used them before. I was able to use the commands effectively and commit my changes to 
github! 

What questions did you have while coding? What resources did you find to help you answer them?

On what some of the commands do and how to use them (syntax). I found these two resources really helpful:

https://www.atlassian.com/git/tutorial
http://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging

What concepts are you having trouble with, or did you just figure something out? If so, what?

I havent used git branch yet. I understand what its used for and how to use it.

Did you learn any new skills or tricks?

Yes I hadnt use most of the commands before, so learnt lot of new commands

How confident are you with each of the Learning Competencies?

Fairly. Need lot of practise.
Which parts of the challenge did you enjoy?

Doing a commit and it showing up on github was amazing

Which parts of the challenge did you find tedious?

None.

</pr>