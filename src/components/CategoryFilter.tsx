import React from 'react';
import { EventCategory } from '../types/event';
import { Sparkles } from 'lucide-react';

interface CategoryFilterProps {
  categories: EventCategory[];
  activeCategory: EventCategory;
  onSelectCategory: (category: EventCategory) => void;
  categoryCounts: Record<string, number>;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  categoryCounts,
}) => {
  return (
    <div className="w-full flex items-center justify-center overflow-x-auto py-2 no-scrollbar scroll-smooth">
      <div className="flex items-center gap-2 px-2 py-1.5 bg-cosmic-900/80 rounded-2xl border border-white/10 backdrop-blur-md">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          const count = categoryCounts[cat] || 0;

          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium uppercase tracking-wider transition-all duration-200 whitespace-nowrap flex items-center gap-2 ${
                isActive
                  ? 'bg-gradient-to-r from-crimson-800 to-crimson-600 text-white border border-crimson-500 shadow-[0_0_15px_rgba(220,38,38,0.4)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat === 'Creative & Art' && (
                <Sparkles className="w-3.5 h-3.5 text-crimson-400 animate-pulse" />
              )}
              <span>{cat}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive
                    ? 'bg-black/40 text-white font-bold'
                    : 'bg-cosmic-800 text-gray-400'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
