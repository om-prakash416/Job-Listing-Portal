# Job-Listing-Portal
git remote add origin https://github.com/om-prakash416/Task_Management_Web_Application.git
git branch -M main
git push -u origin main

echo "# Task_Management_Web_Application" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/om-prakash416/Task_Management_Web_Application.git
git push -u origin main


# Fetch remote changes
git fetch origin

# Add and commit any local changes
git add .
git commit -m "Describe your changes"

# Merge or rebase remote changes
# Merge:
git merge origin/main

# OR Rebase:
# git rebase origin/main

# Push your changes
git push -u origin main
