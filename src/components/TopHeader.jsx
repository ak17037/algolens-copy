import React from 'react';
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import { SIDEBAR_ITEMS } from './Sidebar';

export default function TopHeader({
  activePageId,
  onNavigate,
  onToggleSidebar,
  sidebarCollapsed
}) {
  const currentIndex = SIDEBAR_ITEMS.findIndex((p) => p.id === activePageId);
  const currentPage = SIDEBAR_ITEMS[currentIndex] || SIDEBAR_ITEMS[0];

  const handlePrev = () => {
    if (currentIndex > 0) {
      onNavigate(SIDEBAR_ITEMS[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < SIDEBAR_ITEMS.length - 1) {
      onNavigate(SIDEBAR_ITEMS[currentIndex + 1].id);
    }
  };

  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 90,
        background: 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--line)',
        padding: '12px 36px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '16px'
      }}
    >
      {/* Left: Breadcrumbs & Toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          onClick={onToggleSidebar}
          title="Toggle Navigation Sidebar"
          style={{
            background: 'var(--paper-2)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius-sm)',
            padding: '6px 8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            color: 'var(--ink)'
          }}
        >
          <Menu size={16} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="mono" style={{ fontSize: '0.74rem', color: 'var(--primary)', fontWeight: 600 }}>
            {currentPage.num}
          </span>
          <span style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--ink)' }}>
            {currentPage.label}
          </span>
        </div>
      </div>

      {/* Right: Stepper */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
            background: 'var(--paper-2)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius-full)',
            padding: '3px 6px'
          }}
        >
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            title="Previous Page (←)"
            style={{
              background: 'none',
              border: 'none',
              color: currentIndex === 0 ? 'var(--ink-faint)' : 'var(--ink)',
              cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
              padding: '4px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <ChevronLeft size={16} />
          </button>

          <span className="mono" style={{ fontSize: '0.74rem', color: 'var(--ink)', fontWeight: 600, padding: '0 8px' }}>
            Page {currentPage.num} / 06
          </span>

          <button
            onClick={handleNext}
            disabled={currentIndex === SIDEBAR_ITEMS.length - 1}
            title="Next Page (→)"
            style={{
              background: 'none',
              border: 'none',
              color: currentIndex === SIDEBAR_ITEMS.length - 1 ? 'var(--ink-faint)' : 'var(--ink)',
              cursor: currentIndex === SIDEBAR_ITEMS.length - 1 ? 'not-allowed' : 'pointer',
              padding: '4px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
