import React, { useState } from 'react'
import SortableTree, { changeNodeAtPath } from 'react-sortable-tree'
import { Checkbox } from 'antd'

const List26 = () => {
  const treeDataDefault = [
    { name: 'Level 1' },
    {
      name: 'Level 2',
      expanded: true,
      children: [{ name: 'Level 2' }, { name: 'Level 2' }, { name: 'Level 2' }],
    },
  ]
  const [treeData, setTreeData] = useState(treeDataDefault)
  const getNodeKey = ({ treeIndex }) => treeIndex

  return (
    <div>
      <SortableTree
        isVirtualized={false}
        reactVirtualizedListProps={{ height: 20000 }}
        treeData={treeData}
        onChange={(tree) => setTreeData(tree)}
        generateNodeProps={({ node, path }) => ({
          title: !node.children ? (
            <Checkbox
              checked={node.checked}
              onChange={(event) => {
                const { checked } = event.target
                setTreeData(
                  changeNodeAtPath({
                    treeData,
                    path,
                    getNodeKey,
                    newNode: { ...node, checked },
                  }),
                )
              }}
            >
              {node.name}
            </Checkbox>
          ) : (
            <span>{node.name}:</span>
          ),
        })}
      />
    </div>
  )
}

export default List26
