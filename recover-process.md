# Recover from Backup Branch

This guide explains how to recover your repository using the backup branch that was created by the [Daily Backup](backup-process.md) workflow.

## Steps

1. **Clone the repository:** If you do not have a local copy of the repository, clone it to your local machine.

```bash
git clone https://github.com/NJIT-WIS/project-2-team-sar.git
```

2. **Switch to the backup branch:** Use the `git checkout` command to switch to the backup branch.

```bash
git checkout backup
```

3. **Restore the repository:** Copy the files from the backup branch to your current branch to restore the repository.

```bash
git checkout <current-branch>
git merge backup
```

Note: If there are any merge conflicts, resolve them and commit the changes.

4. **Push the changes:** Push the restored repository to the remote repository.

```bash
git push origin <current-branch>
```

Congratulations! You have successfully recovered your repository using the backup branch.