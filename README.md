# CompoundTable
Table component using compound component pattern

## tl;dr

This repository contains the Table Component using compound component design pattern.

## Pros and Cons

> [Pros]

* Separation Of Concerns
  * Developer who tries to use library using compound component pattern don't have to concern about logics.
  * Parent component represents only UI.

* Reduce component complexity
  * Child components represent UI and logics, but logics are separated with each child component, so it's easy to understand.
 
* Solve prop drilling

> [Cons]

* High cohesion
  * Child components must be wrapped in Parent component.

* Need lots of initialization jobs

## references

* https://bum-developer.tistory.com/entry/React-Compound-Component-%ED%8C%A8%ED%84%B4
* https://im-developer.tistory.com/238
* https://medium.com/@xiaominghu19922/compound-component-pattern-in-react-a9eef063ed1b
* https://medium.com/@win.le/react-compound-component-with-typescript-d7944ac0d1d6
