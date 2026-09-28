export interface KnowledgeImageDimensions {
  width: number;
  height: number;
}

const knowledgeImageDimensions:
  Record<string, KnowledgeImageDimensions> = {
    "cashew-export-guide.webp": {
      width: 1536,
      height: 1024,
    },
    "cashew-export-readiness-flow.webp": {
      width: 1536,
      height: 1024,
    },
    "cashew-food-safety.webp": {
      width: 1536,
      height: 1024,
    },
    "cashew-grade-buyer-selection-flow.webp": {
      width: 1536,
      height: 1024,
    },
    "cashew-grading-standards.webp": {
      width: 1536,
      height: 1024,
    },
    "cashew-kernel-grades-uses.webp": {
      width: 1672,
      height: 941,
    },
    "cashew-moisture-measurement-process.webp": {
      width: 1536,
      height: 1024,
    },
    "cashew-moisture-standards.webp": {
      width: 1536,
      height: 1024,
    },
    "cashew-packaging-guide.webp": {
      width: 1536,
      height: 1024,
    },
    "cashew-packaging-system.webp": {
      width: 1536,
      height: 1024,
    },
    "cashew-processing-guide.webp": {
      width: 1536,
      height: 1024,
    },
    "cashew-quality-standards.webp": {
      width: 1536,
      height: 1024,
    },
    "cashew-shelf-life-guide.webp": {
      width: 1536,
      height: 1024,
    },
    "cashew-shelf-life-validation.webp": {
      width: 1536,
      height: 1024,
    },
    "cashew-storage-guide.webp": {
      width: 1536,
      height: 1024,
    },
    "cashew-tree.webp": {
      width: 1536,
      height: 1024,
    },
    "what-is-cashew.webp": {
      width: 1774,
      height: 887,
    },
  };

export function getKnowledgeImageDimensions(
  imagePath: string
): KnowledgeImageDimensions | undefined {
  const fileName = imagePath
    .split("/")
    .pop();

  if (!fileName) {
    return undefined;
  }

  return knowledgeImageDimensions[fileName];
}