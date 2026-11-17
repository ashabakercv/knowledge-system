# Troubleshooting article standard

Start with the symptom and intended audience. State prerequisites, the checks in a useful order, expected observations and the point at which to escalate.

## Example: sample enrollment contains duplicate identifiers
1. Preserve the original input and work from a copy.
2. Confirm which field is the agreed unique identifier.
3. Compare duplicate rows for conflicting required fields.
4. Ask the client data owner to approve the rule for retaining or correcting rows.
5. Re-run validation on the corrected sample and reconcile accepted and rejected counts.

Do not silently drop conflicting rows. Escalate when the agreed identity rule is unclear, the source owner cannot resolve a conflict, or the counts do not reconcile. Record the sample file identifier, validation result and decision in the issue log without copying unnecessary personal data into the article.
