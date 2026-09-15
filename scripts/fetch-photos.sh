#!/usr/bin/env bash
# Pull the two photos still hosted on the client's Squarespace CDN into
# public/images/, replacing the remaining "PHOTO PENDING" placeholders.
#
# The other eight slots have been filled with the client's own photography,
# so only these two are still sourced from the old site.
#
#   bash scripts/fetch-photos.sh
#
# Run this from a machine with plain internet access. The CDN will stop
# serving these the moment the Squarespace subscription lapses, so do it soon
# and commit the results — nothing on the site links to Squarespace directly.
#
# When the client sends real project photography, just drop the new files over
# the ones in public/images/ using the same filenames. No code changes needed.

set -euo pipefail
cd "$(dirname "$0")/.."
OUT=public/images
BASE="https://images.squarespace-cdn.com/content/v1/66727dfb02d9063005de9166"

get() {
  echo "  → $2"
  curl -fsSL --retry 3 --retry-delay 2 -o "$OUT/$2" "$1"
}

# Subjects verified by eye — several were mislabelled in the original site's
# filenames, so trust these descriptions over the source filename.
get "$BASE/bc82364b-e071-4ea7-b696-89ab7c7a1122/Copy+of+DSC07512.jpg?format=2500w" hero-interior.jpg    # dim interior — home hero
get "$BASE/a8815dcc-bed6-43c4-a6c1-402d6c26bfbc/Copy+of+DSC07600+(1).jpg?format=2500w" crew-site.jpg    # crew on site

echo
echo "Done. Check them in public/images, then run: npm run build"
