###### 作业答案：

**选择题：** 

1. D
2. C

**简答题：**

> patchVnode的作用是对比新旧节点，更新他们的差异

###### 执行过程：

- 首先在对照节点前会调用prepatch、update两个钩子函数

- 在对比新旧节点中：

  - 如果新节点有text属性，且不等于旧节点的text属性：

    - 如果老节点有children，会通过removeVnodes移除老节点children对应的DOM元素

    - 并且设置新节点对应DOM元素的textContent

  - 如果新老节点都有children，且不相等：

    - 调用updateChildren()，对比新旧节点的子节点，并且更新子节点的差异

  - 如果只有新节点有children属性：
    - 如果老节点有text属性，则清空对应DOM元素的textContent，添加所有的子节点
  - 如果只有老节点有children属性：
    - 移除所有的老节点
  - 如果只有老节点有text属性：
    - 清空对应的DOM元素的textContent

- 最后节点对照完成后会执行用户传入的postpatch钩子函数

