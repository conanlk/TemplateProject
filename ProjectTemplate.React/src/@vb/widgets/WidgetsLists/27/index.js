import React, { useState } from 'react'
import SortableTree from 'react-sortable-tree'
import { Checkbox } from 'antd'

const List27 = () => {
  const completedDefault = [
    { name: 'Level 0', checked: true },
    { name: 'Level 0', checked: true },
    { name: 'Level 0', checked: true },
  ]
  const [completed, setCompleted] = useState(completedDefault)

  return (
    <div>
      <SortableTree
        isVirtualized={false}
        reactVirtualizedListProps={{ height: 20000 }}
        treeData={completed}
        onChange={(tree) => setCompleted(tree)}
        generateNodeProps={({ node }) => ({
          title: !node.children ? (
            <Checkbox checked={node.checked}>{node.name}</Checkbox>
          ) : (
            <span>{node.name}:</span>
          ),
        })}
      />
    </div>
  )
}

export default List27
