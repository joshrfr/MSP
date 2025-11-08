import React from 'react';
import './TechnicianAnimation.css';

const TechnicianAnimation = () => {
  return (
    <div className="technician-animation-container">
      <svg className="technician-svg" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        {/* Server Rack */}
        <g className="server-rack">
          {/* Rack Frame */}
          <rect x="250" y="150" width="300" height="400" fill="#1a1a2e" stroke="#87CEEB" strokeWidth="3" rx="10"/>
          
          {/* Server Units */}
          <g className="server-unit">
            <rect x="270" y="180" width="260" height="60" fill="#16213e" stroke="#87CEEB" strokeWidth="2" rx="5"/>
            <circle cx="290" cy="210" r="5" className="led-green pulse-led"/>
            <circle cx="310" cy="210" r="5" className="led-blue pulse-led-delay"/>
            <circle cx="330" cy="210" r="5" className="led-green pulse-led"/>
            <line x1="360" y1="195" x2="510" y2="195" stroke="#4a5568" strokeWidth="2"/>
            <line x1="360" y1="210" x2="510" y2="210" stroke="#4a5568" strokeWidth="2"/>
            <line x1="360" y1="225" x2="510" y2="225" stroke="#4a5568" strokeWidth="2"/>
          </g>
          
          <g className="server-unit">
            <rect x="270" y="260" width="260" height="60" fill="#16213e" stroke="#87CEEB" strokeWidth="2" rx="5"/>
            <circle cx="290" cy="290" r="5" className="led-orange blink-led"/>
            <circle cx="310" cy="290" r="5" className="led-green pulse-led"/>
            <circle cx="330" cy="290" r="5" className="led-green pulse-led-delay"/>
            <line x1="360" y1="275" x2="510" y2="275" stroke="#4a5568" strokeWidth="2"/>
            <line x1="360" y1="290" x2="510" y2="290" stroke="#4a5568" strokeWidth="2"/>
            <line x1="360" y1="305" x2="510" y2="305" stroke="#4a5568" strokeWidth="2"/>
          </g>
          
          <g className="server-unit">
            <rect x="270" y="340" width="260" height="60" fill="#16213e" stroke="#87CEEB" strokeWidth="2" rx="5"/>
            <circle cx="290" cy="370" r="5" className="led-green pulse-led-delay"/>
            <circle cx="310" cy="370" r="5" className="led-blue pulse-led"/>
            <circle cx="330" cy="370" r="5" className="led-green pulse-led-delay"/>
            <line x1="360" y1="355" x2="510" y2="355" stroke="#4a5568" strokeWidth="2"/>
            <line x1="360" y1="370" x2="510" y2="370" stroke="#4a5568" strokeWidth="2"/>
            <line x1="360" y1="385" x2="510" y2="385" stroke="#4a5568" strokeWidth="2"/>
          </g>
          
          <g className="server-unit problem-server">
            <rect x="270" y="420" width="260" height="60" fill="#16213e" stroke="#ff6b6b" strokeWidth="2" rx="5"/>
            <circle cx="290" cy="450" r="5" className="led-red blink-fast"/>
            <circle cx="310" cy="450" r="5" className="led-red blink-fast"/>
            <circle cx="330" cy="450" r="5" className="led-orange blink-led"/>
            <line x1="360" y1="435" x2="510" y2="435" stroke="#4a5568" strokeWidth="2"/>
            <line x1="360" y1="450" x2="510" y2="450" stroke="#4a5568" strokeWidth="2"/>
            <line x1="360" y1="465" x2="510" y2="465" stroke="#4a5568" strokeWidth="2"/>
          </g>
        </g>

        {/* Technician/Engineer */}
        <g className="technician">
          {/* Body */}
          <ellipse cx="150" cy="460" rx="40" ry="25" fill="#2d3748"/>
          <rect x="130" y="400" width="40" height="60" fill="#4a5568" rx="5"/>
          
          {/* Head */}
          <circle cx="150" cy="360" r="25" fill="#d4a574"/>
          
          {/* Hair */}
          <path d="M 130 355 Q 150 340 170 355" fill="#2d3748"/>
          
          {/* Arms */}
          <g className="arm-left swing-arm">
            <rect x="110" y="410" width="15" height="50" fill="#4a5568" rx="7" transform="rotate(-20 120 410)"/>
            <circle cx="110" cy="465" r="8" fill="#d4a574"/>
          </g>
          
          <g className="arm-right">
            <rect x="175" y="410" width="15" height="50" fill="#4a5568" rx="7" transform="rotate(45 180 410)"/>
            <circle cx="205" cy="455" r="8" fill="#d4a574"/>
            
            {/* Wrench in hand */}
            <g className="wrench-tool rotate-wrench">
              <rect x="200" y="445" width="35" height="8" fill="#87CEEB" rx="2"/>
              <circle cx="237" cy="449" r="8" fill="none" stroke="#87CEEB" strokeWidth="3"/>
            </g>
          </g>
          
          {/* Legs */}
          <rect x="135" y="460" width="12" height="35" fill="#2d3748" rx="3"/>
          <rect x="153" y="460" width="12" height="35" fill="#2d3748" rx="3"/>
          
          {/* Feet */}
          <ellipse cx="141" cy="497" rx="12" ry="6" fill="#1a1a2e"/>
          <ellipse cx="159" cy="497" rx="12" ry="6" fill="#1a1a2e"/>
          
          {/* Hard Hat */}
          <ellipse cx="150" cy="345" rx="30" ry="12" fill="#ffd700"/>
          <rect x="135" y="335" width="30" height="10" fill="#ffd700" rx="2"/>
        </g>

        {/* Tools on ground */}
        <g className="tools">
          <rect x="80" y="510" width="60" height="30" fill="#2d3748" stroke="#87CEEB" strokeWidth="2" rx="3"/>
          <circle cx="95" cy="525" r="4" fill="#87CEEB"/>
          <circle cx="110" cy="525" r="4" fill="#87CEEB"/>
          <circle cx="125" cy="525" r="4" fill="#87CEEB"/>
        </g>

        {/* Diagnostic Laptop */}
        <g className="laptop">
          <rect x="180" y="500" width="80" height="50" fill="#1a1a2e" stroke="#87CEEB" strokeWidth="2" rx="3"/>
          <rect x="190" y="510" width="60" height="35" fill="#0a192f" stroke="#87CEEB" strokeWidth="1" rx="2"/>
          
          {/* Screen content - diagnostic info */}
          <text x="200" y="525" fill="#00ff00" fontSize="8" fontFamily="monospace">Server</text>
          <text x="200" y="535" fill="#00ff00" fontSize="8" fontFamily="monospace">Status</text>
          <circle cx="235" cy="527" r="3" fill="#ff6b6b" className="blink-fast"/>
        </g>

        {/* Floating alert/notification icons */}
        <g className="alert-icon float-icon-1">
          <circle cx="580" cy="200" r="20" fill="#ff6b6b" opacity="0.8"/>
          <text x="573" y="210" fill="white" fontSize="24" fontWeight="bold">!</text>
        </g>
        
        <g className="check-icon float-icon-2">
          <circle cx="600" cy="380" r="18" fill="#00ff88" opacity="0.8"/>
          <text x="593" y="390" fill="white" fontSize="20" fontWeight="bold">✓</text>
        </g>

        {/* Sparkles/work particles */}
        <g className="sparkles">
          <circle cx="240" cy="440" r="3" fill="#87CEEB" className="sparkle sparkle-1"/>
          <circle cx="255" cy="455" r="2" fill="#87CEEB" className="sparkle sparkle-2"/>
          <circle cx="230" cy="465" r="2" fill="#87CEEB" className="sparkle sparkle-3"/>
          <circle cx="250" cy="475" r="3" fill="#87CEEB" className="sparkle sparkle-1"/>
        </g>
      </svg>
    </div>
  );
};

export default TechnicianAnimation;
