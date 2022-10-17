# Gib SSI Integration service

## Extrimian NPM dependency

This template has extrimian-npm repository as submodule.

After clone, run git command to initialize submodules

`
git submodule update --init --recursive
`

## Env Variables

File with example values is available in `.env.example` at project root.

- **PORT**: Port to be used by the API
- **WACI_INVITATION_ENDPOINT_URL**: WACI Invitation creation endpoint
- **DEEPLINK_SCHEMA**: Target app schema for the invitation to be created