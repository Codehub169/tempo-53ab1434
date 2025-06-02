#!/bin/bash

# Install dependencies
echo "Installing project dependencies..."
npm install

# Check if installation was successful
if [ $? -ne 0 ]; then
  echo "Failed to install dependencies. Please check npm logs."
  exit 1
fi

# Attempt to fix vulnerabilities which might be causing issues
echo "Attempting to fix vulnerabilities..."
npm audit fix --force

# Run the Next.js development server on port 9000
echo "Starting Next.js development server on port 9000..."
npm run dev -- -p 9000

# If you need to build and then start a production server on port 9000:
# echo "Building the project..."
# npm run build
# if [ $? -ne 0 ]; then
#   echo "Project build failed."
#   exit 1
# fi
# echo "Starting Next.js production server on port 9000..."
# npm start -- -p 9000