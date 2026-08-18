import React from 'react';
import { ArrowUp } from 'lucide-react';
import { SIDEBAR_ITEMS } from './Sidebar';

export default function Footer({ onScrollTop, onNavigate }) {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--line)',
        padding: '28px 0 24px',
        marginTop: '40px',
        background: 'var(--panel)'
      }}
    >
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          {/* Brand & Status */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <div style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--ink)' }}>
              Algo<span style={{ color: 'var(--primary)' }}>Lens</span>
            </div>
            <div
              className="mono"
              style={{
                fontSize: '0.68rem',
                background: 'var(--paper-2)',
                padding: '4px 10px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--line)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--ink-dim)'
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
              <span>LeetCode · Codeforces · CodeChef Connected</span>
            </div>
          </div>

          {/* Quick Page Jumper Chips */}
          <div style={{ display: 'flex', gap: '4px', alignItems: 'center', flexWrap: 'wrap' }}>
            {SIDEBAR_ITEMS.map((p) => (
              <button
                key={p.id}
                onClick={() => onNavigate(p.id)}
                className="mono"
                title={p.label}
                style={{
                  background: 'var(--paper-2)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '3px 8px',
                  fontSize: '0.68rem',
                  color: 'var(--ink-dim)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {p.num}
              </button>
            ))}
          </div>

          {/* Scroll to Top */}
          <button
            onClick={onScrollTop}
            className="mono"
            style={{
              background: 'var(--paper-2)',
              border: '1px solid var(--line)',
              padding: '6px 12px',
              borderRadius: 'var(--radius-full)',
              color: 'var(--ink)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.72rem',
              fontWeight: 600
            }}
          >
            <ArrowUp size={13} color="var(--primary)" />
            <span>Top</span>
          </button>
        </div>

        <div
          style={{
            borderTop: '1px solid var(--line)',
            paddingTop: '14px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--ink-faint)',
            flexWrap: 'wrap',
            gap: '8px'
          }}
        >
          <span>AlgoLens © 2026 — Unified CP Intelligence</span>
          <span>Fast, Modern &amp; Smooth</span>
        </div>
      </div>
    </footer>
  );
}
