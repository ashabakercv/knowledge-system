# Knowledge base and documentation

Searchable guidance with ownership, lifecycle controls and a useful route to resolution.

**[Open the interactive project](https://ashabakercv.github.io/projects/knowledge-system/demo/)**

## Scenario
A fictional support team has useful guidance spread across inconsistent documents. The demonstration organizes answers by task, gives each article an owner and review date, and excludes retired guidance from normal search.

## Design decision
Treat findability and maintenance as one system. Search results include audience and review state so a matching title does not imply that an article is current.

## Explore the work
- [Content Model](docs/content-model.md)
- [Governance](docs/governance.md)
- [Troubleshooting Standard](docs/troubleshooting-standard.md)
- [Fictional source data](data/fixtures.json)
- [Functional logic](src/model.mjs)
- [Functional checks](tests/model.test.mjs)

## Run locally
Use Node.js 22 or later to run `npm test`. No dependency installation is required. To view the demo, serve this repository over local HTTP with any static server and open `/demo/`. For example: `python3 -m http.server 8000` followed by `http://localhost:8000/demo/`.

## Scope and limitations
This is a small static knowledge base. It demonstrates search and content governance without claiming enterprise search, SSO integration or automated semantic verification.

## Contribution and provenance
This is an AI-assisted personal portfolio demonstration prepared for Asha Baker. The scenario, source records and sample responses are fictional. It is separate from employer deliverables and does not imply a production deployment, client outcome or prior employment in software engineering. Professional experience is described on the portfolio home page. Asha can use the documentation and source files to review, adapt and explain the implementation.

## Tools and relevant work
Information architecture / Markdown / Content lifecycle. Relevant areas: Knowledge, Implementation.

## Version history
Version 1.0 introduces the documented scenario, browser demonstration, source data and functional checks. Subsequent changes should record the user need, change made and verification performed. GitHub Actions results should be described as passing only after a real workflow run succeeds.

## Reuse
The code and documentation are available for portfolio review. No license granting reuse has been selected; contact the owner for permission.
