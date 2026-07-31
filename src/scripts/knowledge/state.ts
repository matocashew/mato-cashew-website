export interface KnowledgeState {
  selectedCategory: string;
  selectedTag: string;
}

export function createKnowledgeState(): KnowledgeState {
  return {
    selectedCategory: "all",
    selectedTag: "",
  };
}