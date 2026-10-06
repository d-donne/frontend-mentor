## Migration Script

This script is used to clone and consolidate my frontend mentor repos into a single repo

## Clean up

This script is used to archive or delete old repos that have been consolidated into the monorepo.
It requires the GitHub CLI (https://cli.github.com) and, for deleting, you will need to
run `gh auth refresh -h github.com -s delete_repo` first.

### Usage

```bash
# dry run: only reports what it WOULD do
bash cleanup.sh
```

```bash
# archive (reversible, recommended first)
bash cleanup.sh --archive
```

```bash
# permanently delete (asks you to confirm)
bash cleanup.sh --delete
```
