#!/bin/bash
# This is a sample script for a clean Next.js build

echo "Starting clean Next.js build..."

# Stop any running Next.js server (optional, depends on setup)
# You might need to kill processes manually if they're not backgrounded

echo "Deleting .next directory..."
rm -rf .next

echo "Deleting node_modules directory..."
rm -rf node_modules

echo "Deleting package-lock.json..."
rm -f package-lock.json

echo "Installing dependencies..."
npm install

echo "Running Next.js build..."
npm run build

echo "Clean build process finished!"
