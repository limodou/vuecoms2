import { expect } from 'chai'
import List from '../src/components/utils/list'
let alist = [
  {id: 1, title: 'A'},
  {id: 2, title: 'B'},
]
let treelist = [
  {id: '1', title: 'A', parent: '0'},
  {parent: '1', id: '10', title: 'A-1'},
  {parent: '10', title: 'A-1-1', id: '100'},
  {id: '2', title: 'B', parent: '0'},
  {parent: '2', id: '20', title: 'B-1'},
  {parent: '20', title: 'B-1-1', id: '200'},
]

describe('list', function () {
  it('Test get', function() {
    let c = List.get(alist, 1)
    expect(c).to.eql({id:1, title: 'A'})
  })
  it('Test tree', function() {
    let tree = List.tree(treelist, {parent: 'parent', children: 'children'})
    console.log(JSON.stringify(tree))
    expect(tree).to.eql([
      {id:'1', title: 'A', parent: '0', children: [
        {parent: '1', id: '10', title: 'A-1', children: [{parent: '10', id: '100', title: 'A-1-1'}]},
      ]},
      {id:'2', title: 'B', parent: '0', children: [
        {parent: '2', id: '20', title: 'B-1', children: [{parent: '20', id: '200', title: 'B-1-1'}]},
      ]},
    ]
    )
  })
})
