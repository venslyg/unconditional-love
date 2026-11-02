'use client';

import React, { useState, useId } from 'react';
import { FAQItem, FAQ_CATEGORIES, FAQ_DATA } from '@/data/faq';
import { ChevronDown, Search, HelpCircle, CheckCircle2, Clock } from 'lucide-react';

export function FAQAccordion() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['faq-1', 'faq-4']));
  const searchInputId = useId();

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory =
      selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full space-y-8">
      
      {/* Search and Category Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
        
        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <label htmlFor={searchInputId} className="sr-only">
            Search Frequently Asked Questions
          </label>
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ink-subtle">
            <Search className="w-4 h-4" aria-hidden="true" />
          </div>
          <input
            id={searchInputId}
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. fee, venue, ticket)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-paper-light border border-violet/15 text-xs sm:text-sm text-ink placeholder:text-ink-subtle/70 focus:outline-none focus:ring-2 focus:ring-violet-deep art-paper-shadow"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 self-start sm:self-auto">
          {FAQ_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-violet-deep text-white shadow-xs'
                  : 'bg-paper-light border border-violet/10 text-ink-muted hover:text-ink hover:bg-paper-warm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

      </div>

      {/* Accordion List */}
      <div className="space-y-3" role="region" aria-label="Frequently Asked Questions Accordion">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq: FAQItem) => {
            const isOpen = openIds.has(faq.id);
            const contentId = `faq-content-${faq.id}`;
            const buttonId = `faq-button-${faq.id}`;

            return (
              <div
                key={faq.id}
                className="art-card art-paper-shadow overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-deep"
                >
                  <div className="space-y-1.5 flex-1 pr-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-violet-deep flex-shrink-0" aria-hidden="true" />
                      <span className="font-display font-bold text-sm sm:text-base text-ink">
                        {faq.question}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 pt-0.5">
                      {faq.isConfirmed ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-leaf-deep bg-leaf/15 px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                          <span>Confirmed Fact</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-coral-deep bg-coral/15 px-2 py-0.5 rounded-full">
                          <Clock className="w-3 h-3" aria-hidden="true" />
                          <span>Details to be announced</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={`w-8 h-8 rounded-full bg-canvas border border-violet/10 flex items-center justify-center flex-shrink-0 transition-transform duration-200 mt-0.5 ${
                    isOpen ? 'rotate-180 bg-violet/10 text-violet-deep' : 'text-ink-subtle'
                  }`}>
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-ink-muted leading-relaxed border-t border-violet/10 bg-canvas/40"
                  >
                    <p className="pl-6">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="art-card p-8 text-center space-y-2">
            <p className="text-sm font-semibold text-ink">No questions matched your search.</p>
            <p className="text-xs text-ink-muted">Try a different keyword or reset the category filter.</p>
          </div>
        )}
      </div>

    </div>
  );
}

