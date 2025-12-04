/**
 * FILE: components/conditions/ConditionAutosuggest.tsx
 * PURPOSE: Autosuggest search input for eye conditions with spelling assistance
 * CREATED: 2025-11-21
 */

"use client";

import { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { searchConditions, SearchCondition } from '@/data/conditions-search';

interface ConditionAutosuggestProps {
  onSearch: (query: string) => void;
  onSelect: (condition: SearchCondition) => void;
  placeholder?: string;
  className?: string;
}

export default function ConditionAutosuggest({
  onSearch,
  onSelect,
  placeholder = "Search conditions (e.g., dry eye, keratoconus, glaucoma...)",
  className = ''
}: ConditionAutosuggestProps) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SearchCondition[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length >= 2) {
        const results = searchConditions(query);
        setSuggestions(results.slice(0, 10)); // Limit to 10 suggestions
        setShowSuggestions(results.length > 0);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
      onSearch(query);
    }, 150);

    return () => clearTimeout(timer);
  }, [query, onSearch]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev =>
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev =>
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0 && suggestions[highlightedIndex]) {
          handleSelect(suggestions[highlightedIndex]);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setHighlightedIndex(-1);
        break;
    }
  };

  // Handle selection
  const handleSelect = (condition: SearchCondition) => {
    setQuery(condition.name);
    setShowSuggestions(false);
    setHighlightedIndex(-1);
    onSelect(condition);
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Clear input
  const handleClear = () => {
    setQuery('');
    setSuggestions([]);
    setShowSuggestions(false);
    onSearch('');
    inputRef.current?.focus();
  };

  // Highlight matching text
  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <span key={i} className="font-bold text-eyecare-blue">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length >= 2 && suggestions.length > 0 && setShowSuggestions(true)}
          placeholder={placeholder}
          className="w-full pl-12 pr-10 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-eyecare-blue focus:border-eyecare-blue transition-all"
          autoComplete="off"
          aria-autocomplete="list"
          aria-controls="condition-suggestions"
          aria-expanded={showSuggestions}
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          id="condition-suggestions"
          className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
          role="listbox"
        >
          <div className="max-h-80 overflow-y-auto">
            {suggestions.map((condition, index) => (
              <button
                key={`${condition.slug}-${index}`}
                onClick={() => handleSelect(condition)}
                onMouseEnter={() => setHighlightedIndex(index)}
                className={`w-full px-4 py-3 text-left flex items-start gap-3 transition-colors ${index === highlightedIndex
                    ? 'bg-eyecare-blue/10'
                    : 'hover:bg-gray-50'
                  }`}
                role="option"
                aria-selected={index === highlightedIndex}
              >
                <Search className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900">
                    {highlightMatch(condition.name, query)}
                  </div>
                  <div className="text-sm text-gray-500">
                    {condition.category}
                    {condition.aliases && condition.aliases.length > 0 && (
                      <span className="ml-2 text-gray-400">
                        • Also: {condition.aliases.slice(0, 2).join(', ')}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div className="px-4 py-2 bg-gray-50 text-xs text-gray-500 border-t">
            Press ↑↓ to navigate, Enter to select, Esc to close
          </div>
        </div>
      )}

      {/* No results message */}
      {query.length >= 2 && suggestions.length === 0 && showSuggestions && (
        <div
          className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 p-4 text-center"
        >
          <p className="text-gray-600">No conditions found matching "{query}"</p>
          <p className="text-sm text-gray-400 mt-1">Try a different spelling or browse by category below</p>
        </div>
      )}
    </div>
  );
}
