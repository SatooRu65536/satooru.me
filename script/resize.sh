#!/bin/bash

# $1 がない場合は終了
if [ -z $1 ]; then
    echo "Usage: $0 <directory>"
    exit 1
fi
cd $1
find . -type f -name "*.webp" | while read INPUT; do
    if [ $(identify -format "%w" "$INPUT") -le 810 ]; then
        continue
    fi
    cwebp -resize 1920 0 "$INPUT" -o "$INPUT"
done
