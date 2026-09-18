import React, { useState } from 'react';
import { Smartphone, WifiOff, AlertTriangle, Send } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const MeshNetworkVisual: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [broadcastActive, setBroadcastActive] = useState(false);

  const triggerBroadcast = () => {
    setBroadcastActive(true);
    setTimeout(() => setBroadcastActive(false), 4000);
  };

  const phones = [
    { id: 'N1', label: 'Node A (Origin)', x: 100, y: 70, isOrigin: true },
    { id: 'N2', label: 'Node B (Relay)', x: 380, y: 70 },
    { id: 'N3', label: 'Node C (Relay)', x: 100, y: 210 },
    { id: 'N4', label: 'Node D (Relay)', x: 380, y: 210 },
    { id: 'N5', label: 'Node E (Target)', x: 100, y: 320, isTarget: true },
  ];

  return (
    <div className="w-full bg-surface-elevated/60 border border-border-subtle rounded-xl p-4 md:p-5 font-mono select-none overflow-hidden">
      {/* Mesh Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border-subtle text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
          <span className="font-semibold text-foreground">DISASTERMESH TOPOLOGY SIMULATOR</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-muted">
          <div className="flex items-center gap-1 text-rose-400">
            <WifiOff className="w-3.5 h-3.5" />
            <span>Cellular: Down</span>
          </div>
          <span className="text-accent-cyan">BLE GATT: Active</span>
        </div>
      </div>

      {/* SVG Canvas for Mesh Network */}
      <div className="relative w-full aspect-[480/340] my-2">
        <svg viewBox="0 0 480 340" className="w-full h-full overflow-visible">
          {/* Peer Links */}
          <g stroke="currentColor" strokeWidth="1.5" className="text-white/15">
            {/* Phone A - Phone B */}
            <line x1="100" y1="70" x2="380" y2="70" strokeDasharray="3 3" />
            {/* Phone A - Phone C */}
            <line x1="100" y1="70" x2="100" y2="210" strokeDasharray="3 3" />
            {/* Phone B - Phone D */}
            <line x1="380" y1="70" x2="380" y2="210" strokeDasharray="3 3" />
            {/* Phone C - Phone D */}
            <line x1="100" y1="210" x2="380" y2="210" strokeDasharray="3 3" />
            {/* Phone C - Phone E */}
            <line x1="100" y1="210" x2="100" y2="320" strokeDasharray="3 3" />
          </g>

          {/* Regular continuous packet hop */}
          {!reducedMotion && (
            <>
              {/* Hop 1: A -> B */}
              <circle cx="100" cy="70" r="3" fill="#06B6D4">
                <animate attributeName="cx" from="100" to="380" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="cy" from="70" to="70" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
              </circle>
              {/* Hop 2: A -> C */}
              <circle cx="100" cy="70" r="3" fill="#06B6D4">
                <animate attributeName="cx" from="100" to="100" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
                <animate attributeName="cy" from="70" to="210" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
              </circle>
              {/* Hop 3: C -> E */}
              <circle cx="100" cy="210" r="3" fill="#06B6D4">
                <animate attributeName="cx" from="100" to="100" dur="2.5s" begin="1.2s" repeatCount="indefinite" />
                <animate attributeName="cy" from="210" to="320" dur="2.5s" begin="1.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="1.2s" repeatCount="indefinite" />
              </circle>
            </>
          )}

          {/* Broadcast Trigger Animation */}
          {broadcastActive && !reducedMotion && (
            <circle cx="100" cy="70" r="10" fill="none" stroke="#06B6D4" strokeWidth="2">
              <animate attributeName="r" from="10" to="80" dur="1.2s" repeatCount="2" />
              <animate attributeName="opacity" from="1" to="0" dur="1.2s" repeatCount="2" />
            </circle>
          )}

          {/* Render Nodes */}
          {phones.map((phone) => (
            <g key={phone.id} transform={`translate(${phone.x}, ${phone.y})`}>
              <circle
                cx="0"
                cy="0"
                r="22"
                fill="#0D0D0F"
                stroke={phone.isOrigin ? '#06B6D4' : phone.isTarget ? '#10B981' : 'rgba(255,255,255,0.2)'}
                strokeWidth="1.5"
              />
              <foreignObject x="-9" y="-9" width="18" height="18">
                <Smartphone
                  className={`w-4.5 h-4.5 ${
                    phone.isOrigin
                      ? 'text-accent-cyan'
                      : phone.isTarget
                      ? 'text-accent-emerald'
                      : 'text-slate-300'
                  }`}
                />
              </foreignObject>
              <text
                x={phone.x > 250 ? 30 : -30}
                y="5"
                textAnchor={phone.x > 250 ? 'start' : 'end'}
                fill="#EDEDED"
                className="text-[10px] font-semibold select-none"
              >
                {phone.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Control Bar & Broadcast Simulator */}
      <div className="bg-surface p-3 rounded-lg border border-border-subtle mt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs min-w-0">
          <AlertTriangle className="w-4 h-4 text-accent-cyan shrink-0" />
          <span className="text-muted truncate sm:overflow-visible">
            Packet Payload: <span className="text-foreground">SOS | Lat: 11.0168 | Lon: 76.9558</span>
          </span>
        </div>

        <button
          onClick={triggerBroadcast}
          disabled={broadcastActive}
          className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-3 py-1.5 bg-accent-cyan/10 hover:bg-accent-cyan/20 border border-accent-cyan/30 text-accent-cyan text-xs font-semibold rounded transition-colors disabled:opacity-50 shrink-0"
        >
          <Send className="w-3 h-3" />
          <span>{broadcastActive ? 'BROADCASTING...' : 'BROADCAST TEST SOS'}</span>
        </button>
      </div>
    </div>
  );
};
