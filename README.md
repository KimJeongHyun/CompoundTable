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

## Think

* 현재 구현된 방식은 그냥, Table이 추상화된 것에 지나지 않다.

* 내가 원하는 것은.

```
<Table>
 {children}
</Table>

// TableForm.tsx
```

```
<TableCols>
 {children}
</TableCols>
```

형태가 되어 있다면,

```
<TableForm data={data} headSticky columnFixIdx={0}>
 <TableCols dataKey={""} label={이름}/>
 <TableCols dataKey={""} label={순서}/>
 <TableCols dataKey={""} label={설명}/>
</TableForm>
```

최종적으로 이렇게 되어야 하지 않을까 싶고..

TableCols에 주입된 dataKey가 TableForm에 주입된 data의 프로퍼티 이름으로 활용되어 map 형태로 단순히 렌더링되지만

children에 대해, 함수형태로 구현해서 (해당 함수에서는 data[dataKey][0] [1] [2] .... 가 인자로 내려올 것이다...)

```
<TableCols dataKey={""}>
 {
  (data) =>(
    <div> {data} </div>
  )
 }
</TableCols>
```

이런식으로? 개발자가 단순 수치만 보여주는 게 아니라, 이런형태로 컴포넌트를 커스터마이징해서 쓸 수 있게끔 해주면 좋겠다 싶다.
