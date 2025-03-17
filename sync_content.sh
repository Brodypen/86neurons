
#!/bin/bash

SUBMODULE_NAME="content"
PRIVATE_REPO_BRANCH="v4"
PUBLIC_REPO_BRANCH="main"

echo "Navigating to submodule directory: $SUBMODULE_NAME"
cd "$SUBMODULE_NAME" || {
  echo "Error: Submodule '$SUBMODULE_NAME' not found."
  exit 1
}

echo "Pulling latest changes from public repository: git pull origin $PUBLIC_REPO_BRANCH"
git pull origin "$PUBLIC_REPO_BRANCH" || {
  echo "Error: Failed to pull changes from public repository."
  exit 1
}

echo "Adding local changes in submodule: git add ."
git add . || {
  echo "Error: Failed to add local changes in submodule."
  exit 1
}

if ! git diff --cached --quiet; then
  echo "Committing changes in submodule"

  DATESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
  git commit -m "Update submodule with local and remote changes - $DATESTAMP" || {
    echo "Error: Failed to commit changes in submodule."
    exit 1
  }

  echo "Pushing changes from submodule: git push origin $PUBLIC_REPO_BRANCH"
  git push origin "$PUBLIC_REPO_BRANCH" || {
    echo "Error: Failed to push changes from submodule."
    exit 1
  }
else
  echo "No submodule changes to commit."
fi

echo "Navigating back to private repository root"
cd ..

echo "Updating submodule pointer in private repository: git submodule update --remote $SUBMODULE_NAME"
git submodule update --remote "$SUBMODULE_NAME" || {
  echo "Error: Failed to update submodule pointer in private repository."
  exit 1
}

echo "Staging submodule pointer update: git add $SUBMODULE_NAME"
git add "$SUBMODULE_NAME"

if ! git diff --cached --quiet; then
  echo "Committing changes in private repository"

  DATESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
  git commit -m "Update submodule pointer to latest commit - $DATESTAMP" || {
    echo "Error: Failed to commit changes in private repository."
    exit 1
  }

  echo "Private repository commit completed. Please manually push to: git push origin $PRIVATE_REPO_BRANCH"
else
  echo "No private repository changes to commit."
fi

echo "Submodule and private repository update completed. Manual push required for private repo."
exit 0
