#!/usr/bin/env bash
# Pull the ten photos still hosted on the client's Squarespace CDN into
# public/images/, replacing the "PHOTO PENDING" placeholders.
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
get "$BASE/e30a0c76-8756-4d30-8612-558c63f338a0/PANG001.jpg?format=2000w"          kitchen-island.jpg   # kitchen, island + fridge
get "$BASE/0947033e-723c-4ab5-b215-883a6812d95a/Copy+of+DSC07451.jpg?format=2000w" bathroom-shower.jpg  # bathroom, shower fixture
get "$BASE/15739684-10ef-426d-9a27-8202ffbc8432/Copy+of+DSC07421.jpg?format=2000w" vanity-mirror.jpg    # lit-mirror vanity
get "$BASE/2b079cfb-2637-435a-84ab-443195e4dc6f/PANG006.jpg?format=2500w"          kitchen-shaker.jpg   # kitchen, shaker cabinets
get "$BASE/ee48f571-7d55-4321-884b-ed4ba6dd21b5/KR-AIRBNB-BR1-1.JPG?format=2000w"  bedroom-suite.jpg    # bedroom
get "$BASE/182b032d-6ca4-490d-94b7-a30581af40a7/gym.png?format=2500w"              gym.png              # fitness studio
get "$BASE/6a6b9d0e-e1a0-4a5e-94e6-cfada0fc7a17/NSR-ALG-017.jpg?format=2000w"      design-planning.jpg  # design & planning
get "$BASE/a8815dcc-bed6-43c4-a6c1-402d6c26bfbc/Copy+of+DSC07600+(1).jpg?format=2500w" crew-site.jpg    # crew on site
get "$BASE/c80aceaa-85ea-4fd0-893e-02ca55279fb5/DSC08293.jpg?format=2000w"         norbert.jpg          # Norbert portrait

echo
echo "Done. Check them in public/images, then run: npm run build"
