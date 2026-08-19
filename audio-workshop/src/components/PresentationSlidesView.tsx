import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { listenMessages, sendMessage } from '../utils/presentationChannel';
import type { PresentationMessage } from '../utils/presentationChannel';
import { registroAulas } from './slides/registroAulas';

export default function PresentationSlidesView() {
  const params = new URLSearchParams(window.location.search);
  const [lesson, setLesson] = useState(Number(params.get('lesson')) || 1);
  const [slide, setSlide] = useState(Number(params.get('slide')) || 0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return listenMessages((msg: PresentationMessage) => {
      if (msg.type === 'CLICK' && msg.x !== undefined && msg.y !== undefined) {
        const el = containerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const tx = rect.left + msg.x * rect.width;
        const ty = rect.top + msg.y * rect.height;
        const target = document.elementFromPoint(tx, ty);
        if (target) {
          (target as HTMLElement).click();
          target.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, clientX: tx, clientY: ty }));
          target.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, clientX: tx, clientY: ty }));
        }
        return;
      }
      if (msg.type === 'SLIDE_CHANGE' || msg.type === 'LESSON_CHANGE') {
        setLesson(msg.lesson);
        setSlide(msg.slide);
      }
      if (msg.type === 'CLOSE') {
        window.close();
      }
    });
  }, []);

  useEffect(() => {
    sendMessage({ type: 'SLIDE_CHANGE', lesson, slide });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') window.close();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.documentElement.requestFullscreen().catch(() => {});
  }, []);

  const slides = registroAulas[lesson]?.slides || [];
  const slideEl = slides[slide] || null;

  return (
    <div ref={containerRef} className="w-screen h-screen bg-slate-950 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${lesson}-${slide}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          {slideEl}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}