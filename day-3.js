function lcaDeepestLeaves() {
  let root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];

  function dfs(node) {
    if (!node) return [0, null];

    let [leftDepth, leftLCA] = dfs(node.left);
    let [rightDepth, rightLCA] = dfs(node.right);

    if (leftDepth > rightDepth) {
      return [leftDepth + 1, leftLCA];
    } else if (rightDepth > leftDepth) {
      return [rightDepth + 1, rightLCA];
    } else {
      return [leftDepth + 1, node];
    }
  }

  return dfs(root)[1];
}

console.log(lcaDeepestLeaves());
