'use client';

interface FilterTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  categories: { id: string; label: string }[];
}

export default function FilterTabs({ activeCategory, onCategoryChange, categories }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeCategory === category.id
              ? 'bg-gradient-to-r from-primary to-secondary text-background'
              : 'bg-surface text-text-muted hover:text-text-primary border border-white/5'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
