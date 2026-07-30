import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

interface CertificatePreviewProps {
  studentName?: string;
}

export const CertificatePreview: React.FC<CertificatePreviewProps> = ({ studentName = '___________________' }) => {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-amber-500/40 shadow-2xl shadow-amber-500/10 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent" />

      <div className="relative">
        <div className="flex justify-center mb-6">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: 'spring' }}>
            <Award className="w-16 h-16 text-amber-400" />
          </motion.div>
        </div>

        <h1 className="text-3xl font-black text-center text-amber-400 mb-2 tracking-wider">CERTIFICADO</h1>

        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6" />

        <p className="text-slate-400 text-sm text-center mb-4">AUDIO WORKSHOP</p>

        <p className="text-slate-300 text-sm text-center mb-2">Certificamos que</p>
        <p className="text-white text-2xl font-bold text-center mb-4">{studentName}</p>
        <p className="text-slate-300 text-sm text-center mb-6">
          concluiu com êxito o workshop completo de operação de áudio,<br />
          totalizando 24 horas de aprendizado prático e teórico.
        </p>

        <div className="flex justify-between items-end mt-8 pt-6 border-t border-slate-800">
          <div className="text-center">
            <div className="w-32 h-0.5 bg-slate-700 mb-2" />
            <p className="text-slate-500 text-xs">Data</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-0.5 bg-slate-700 mb-2" />
            <p className="text-slate-500 text-xs">Instrutor</p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-slate-600 text-xs">24 horas | Áudio Sem Mistério</p>
        </div>
      </div>
    </motion.div>
  );
};
