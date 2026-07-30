import { motion } from 'framer-motion';

interface StageLayoutProps {
  micPosition?: number;
  monitorAngle?: number;
  showLabels?: boolean;
}

export const StageLayout: React.FC<StageLayoutProps> = ({ micPosition = 50, monitorAngle = 45, showLabels = true }) => {
  const micX = 120 + (micPosition / 100) * 160;
  const monitorX = 180 + Math.cos((monitorAngle * Math.PI) / 180) * 60;
  const monitorY = 200 - Math.sin((monitorAngle * Math.PI) / 180) * 40;

  return (
    <div className="w-full max-w-lg mx-auto">
      <svg viewBox="0 0 400 260" className="w-full">
        <rect x="0" y="220" width="400" height="40" fill="#1E293B" rx="4" />
        <rect x="0" y="218" width="400" height="4" fill="#334155" />

        <text x="200" y="250" textAnchor="middle" fill="#64748B" fontSize="10" fontWeight="bold">PALCO</text>

        <rect x="320" y="50" width="60" height="80" rx="8" fill="#F59E0B" opacity="0.9" />
        <rect x="330" y="42" width="40" height="12" rx="4" fill="#92400E" />
        {showLabels && <text x="350" y="140" textAnchor="middle" fill="#F59E0B" fontSize="9" fontWeight="bold">PA</text>}

        <motion.g animate={{ x: monitorX - 180, y: monitorY - 180 }}>
          <rect x="160" y="170" width="40" height="30" rx="4" fill="#8B5CF6" opacity="0.9" />
          <rect x="165" y="165" width="30" height="8" rx="3" fill="#5B21B6" />
          <polygon points="160,170 145,160 145,178" fill="#8B5CF6" opacity="0.7" />
          {showLabels && <text x="180" y="210" textAnchor="middle" fill="#8B5CF6" fontSize="9" fontWeight="bold">Monitor</text>}
        </motion.g>

        <g>
          <rect x={micX - 8} y={100} width="16" height="30" rx="8" fill="#3B82F6" opacity="0.9" />
          <rect x={micX - 3} y={130} width="6" height="60" rx="2" fill="#64748B" />
          <circle cx={micX} cy={135} r="4" fill="#475569" />
          <line x1={micX} y1={95} x2={micX - 25} y2={70} stroke="#3B82F6" strokeWidth="1.5" opacity="0.5" />
          {showLabels && <text x={micX} y={200} textAnchor="middle" fill="#3B82F6" fontSize="9" fontWeight="bold">Microfone</text>}
        </g>

        <circle cx="200" cy="185" r="15" fill="#475569" opacity="0.5" />
        <circle cx="200" cy="185" r="8" fill="#64748B" />
        <path d="M 195 178 Q 200 170 205 178" fill="none" stroke="#94A3B8" strokeWidth="1.5" />
        <circle cx="198" cy="176" r="1.5" fill="#94A3B8" />
        <circle cx="202" cy="176" r="1.5" fill="#94A3B8" />
        {showLabels && <text x="200" y="212" textAnchor="middle" fill="#94A3B8" fontSize="9" fontWeight="bold">Pessoa</text>}
      </svg>
    </div>
  );
};
