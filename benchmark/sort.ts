// tslint:disable:no-unused-expression
import { orderBy } from 'lodash'
import * as microtime from 'microtime'

import * as Benchmark from 'benchmark'

let suite = new Benchmark.Suite()
const arr: Array<{value: number}> = Array.from({ length: 100 }, (_, value) => ({ value }))


let before
let after

before = microtime.now()
arr.sort((a,b) => b.value - a.value)
after = microtime.now()

const nativeArraySortSpeed = after - before;

before = microtime.now()
orderBy(arr, ['value'], ['desc'])
after = microtime.now()

const lodashOrderBySpeed = after - before;

console.log('Native Array Sort: ' + nativeArraySortSpeed);
console.log('Lodash OrderBy: ' + lodashOrderBySpeed);

// add tests
// suite
//   .add('Native array sort', function() {
//     arr.sort((a,b) => b.value - a.value)
//   })
//   .add('Lodash orderBy function', function() {
//     orderBy(arr, ['value'], ['desc'])
//   })
//   // add listeners
//   .on('cycle', function(event) {
//     console.log(String(event.target))
//   })
//   .on('complete', function() {
//     console.log('Fastest is ' + (this as any).filter('fastest').map('name'))
//   })
//   // run async
//   .run({ async: true })
