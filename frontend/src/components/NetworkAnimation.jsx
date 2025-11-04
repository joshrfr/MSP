import React from 'react';
import { Server, Network, Database, Shield, Cloud } from 'lucide-react';
import '../NetworkAnimation.css';

const NetworkAnimation = () => {
  return (
    <div className="network-animation-container">
      <div className="network-grid">
        {/* Central Server */}
        <div className="network-node central-node">
          <Server size={48} />
        </div>
        
        {/* Network nodes */}
        <div className="network-node node-1">
          <Network size={32} />
        </div>
        <div className="network-node node-2">
          <Database size={32} />
        </div>
        <div className="network-node node-3">
          <Shield size={32} />
        </div>
        <div className="network-node node-4">
          <Cloud size={32} />
        </div>
        
        {/* Connection lines */}
        <div className="connection-line line-1"></div>
        <div className="connection-line line-2"></div>
        <div className="connection-line line-3"></div>
        <div className="connection-line line-4"></div>
        
        {/* Floating particles */}
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>
    </div>
  );
};

export default NetworkAnimation;
