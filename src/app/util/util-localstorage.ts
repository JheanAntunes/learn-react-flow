interface LocalStorageNode {
  id: string;
  label: string;
}

type LocalStorageNodes = LocalStorageNode[];

const getLocalStorageNodes = (key: string): LocalStorageNodes => {
  const storedNodes = localStorage.getItem(key);
  return storedNodes ? JSON.parse(storedNodes) : [];
};

const updateLocalStorageNode = (key: string, id: string, label: string) => {
  const nodes = getLocalStorageNodes(key);
  const existingNodeIndex = nodes.findIndex((node) => node.id === id);

  if (existingNodeIndex > -1) {
    nodes[existingNodeIndex].label = label;
  } else {
    nodes.push({ id, label });
  }

  localStorage.setItem(key, JSON.stringify(nodes));
};

const getNodeContentFromLocalStorage = (
  key: string,
  id: string
): string | null => {
  const nodes = getLocalStorageNodes(key);
  const node = nodes.find((node) => node.id === id);
  return node ? node.label : null;
};

export {
  getLocalStorageNodes,
  getNodeContentFromLocalStorage,
  updateLocalStorageNode,
};
