import { motion, AnimatePresence } from 'framer-motion';

interface ConfettiEffectProps {
  active: boolean;
}

const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#06B6D4', '#F97316'];

const particles = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  delay: Math.random() * 2,
  duration: 2 + Math.random() * 3,
  color: colors[Math.floor(Math.random() * colors.length)],
  size: 4 + Math.random() * 6,
  rotation: Math.random() * 360,
}));

export const ConfettiEffect: React.FC<ConfettiEffectProps> = ({ active }) => {
  return (
    <AnimatePresence>
      {active && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 1, y: -20, x: `${p.x}vw`, rotate: 0 }}
              animate={{ opacity: 0, y: '100vh', rotate: p.rotation * 4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: p.duration, delay: p.delay, ease: 'easeIn' }}
              className="absolute top-0 rounded-sm"
              style={{
                width: p.size,
                height: p.size * 0.6,
                backgroundColor: p.color,
                left: `${p.x}%`,
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};
