
# Daily Backup

This GitHub Actions workflow runs twice a day to back up your repository to a remote branch.

## Schedule

The workflow is triggered on a schedule using cron syntax. It runs every 12 hours at 12:00am and 12:00pm UTC time.

```yaml
on:
  schedule:
    - cron: '0 */12 * * *' # Backup every 12 hours
```

## Steps

1. **Checkout code:** The workflow checks out the current repository code using the `actions/checkout` action.

    ```yaml
    - name: Checkout code
      uses: actions/checkout@v2
    ```

2. **Check if backup branch exists:** The workflow checks if the backup branch already exists in the local repository. If it does not exist, the workflow creates a new branch called `backup`.

    ```yaml
    - name: Check if backup branch exists
      run: |
        if git rev-parse --verify backup >/dev/null 2>&1
        then
          echo "Backup branch already exists"
        else
          echo "Creating backup branch"
          git branch backup
          git checkout backup
        fi
    ```

3. **Push backup branch to remote:** The workflow pushes the backup branch to a remote repository using the `git push` command. The remote repository is specified by the `origin` keyword in the command. 

    ```yaml
    - name: Push backup branch to remote
      run: |
        git push origin backup
    ```

Note: This workflow assumes that you have already set up the remote repository and added it as a remote to your local repository.