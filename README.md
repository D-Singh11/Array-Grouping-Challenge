# Array-Grouping-Challenge

## Introduction

This commandline application is used to break an array into smaller sub-groups.

It propmts for 2 user inputs to transform it accordingly:

- elements of an array
- number of groups

Example: Breaking [1, 2 , 3, 4, 5] to 3 groups will result in [[1, 2], [3, 4],[5]]

### Psuedo-Code

1. Create a new emprty array

2. Loop through original array until no more groups left.
   - calcluate size of group
   - slice original array using the group size and add that slice to array created in step 1
   - remove sliced elements from original array
   - decrement the number of groups left by 1.

## Installation Instructions

To run application you must have Node, git and npm installed.

Clone application locally

> \$ git clone https://github.com/D-Singh11/Array-Grouping-Challenge.git

Install all dependencies by navigating to Array-Grouping-Challenge directory and using following command in terminal:

> \$ npm install

## Run application

Next, start the application by running following command in terminal:

> \$ npm start

## Testing application

Test cases can be run using following command:

> \$ npm run test
