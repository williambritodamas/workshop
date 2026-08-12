import { motion } from 'framer-motion';
import { Award, Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface CertificadoCompleteProps {
  nomeAluno: string;
  dataAtual?: string;
  aulasCompletadas?: number;
  totalAulas?: number;
}

export const CertificadoComplete: React.FC<CertificadoCompleteProps> = ({
  nomeAluno,
  dataAtual = new Date().toLocaleDateString('pt-BR'),
  aulasCompletadas = 12,
  totalAulas = 12,
}) => {
  const gerarPDF = async () => {
    const elemento = document.getElementById('certificado-para-pdf');
    if (!elemento) return;

    try {
      // Capturar o elemento como imagem
      const canvas = await html2canvas(elemento, {
        scale: 2,
        backgroundColor: '#020617',
      });

      // Criar PDF
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4',
      });

      const imgData = canvas.toDataURL('image/png');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Certificado_${nomeAluno.replace(/\s+/g, '_')}.pdf`);
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert('Erro ao gerar PDF. Tente novamente.');
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Certificado para Exibição e Captura */}
      <motion.div
        id="certificado-para-pdf"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl aspect-video relative p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-4 border-amber-500/50 shadow-2xl shadow-amber-500/20 flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Padrão decorativo de fundo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-8 right-8 w-32 h-32 border-4 border-amber-400 rounded-full" />
          <div className="absolute bottom-8 left-8 w-24 h-24 border-4 border-amber-400 rounded-full" />
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 text-center">
          {/* Ícone */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="flex justify-center mb-4"
          >
            <Award className="w-16 h-16 text-amber-400" />
          </motion.div>

          {/* Título */}
          <h1 className="text-4xl font-black text-amber-400 mb-2 tracking-widest">
            CERTIFICADO
          </h1>

          {/* Decoração */}
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6" />

          {/* Subtítulo */}
          <p className="text-slate-300 text-lg mb-2 font-semibold">DE CONCLUSÃO</p>

          {/* Conteúdo Principal */}
          <div className="my-8">
            <p className="text-slate-400 text-base mb-3">Certificamos que</p>

            <p className="text-white text-3xl font-black mb-4">{nomeAluno}</p>

            <p className="text-slate-300 text-base leading-relaxed max-w-lg mx-auto mb-4">
              concluiu com êxito o <span className="font-bold">Workshop Completo de Operação de Áudio</span>,
              <br />
              totalizando <span className="font-bold">24 horas</span> de aprendizado prático e teórico em engenharia de áudio,
              <br />
              abrangendo {aulasCompletadas} aulas sobre som, microfones, mesas de som, processamento de áudio e muito mais.
            </p>

            <div className="text-sm text-slate-400 mt-2">
              Completado em {dataAtual}
            </div>
          </div>

          {/* Assinatura e Data */}
          <div className="mt-8 pt-6 border-t border-slate-700 flex justify-between items-end">
            <div className="text-center">
              <div className="w-32 h-0.5 bg-slate-600 mb-2" />
              <p className="text-slate-500 text-xs font-semibold">Data</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-0.5 bg-slate-600 mb-2" />
              <p className="text-slate-500 text-xs font-semibold">Instrutor - Áudio Sem Mistério</p>
            </div>
          </div>

          {/* Rodapé */}
          <div className="mt-6 text-xs text-slate-500">
            <p>Audio Workshop • 12 Aulas • 24 Horas de Aprendizado</p>
            <p>www.audioworkshop.com</p>
          </div>
        </div>
      </motion.div>

      {/* Botão Gerar PDF */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={gerarPDF}
        className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-lg hover:from-amber-400 hover:to-orange-500 transition-all cursor-pointer shadow-lg shadow-amber-500/30"
      >
        <Download className="w-5 h-5" />
        Baixar Certificado em PDF
      </motion.button>

      {/* Informações */}
      <div className="text-center text-slate-400 text-sm">
        <p>✓ Certificado autenticado e válido</p>
        <p>✓ Salvo automaticamente em seu dispositivo</p>
      </div>
    </div>
  );
};
