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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
      {/* Certificado para Exibição e Captura */}
      <motion.div
        id="certificado-para-pdf"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          width: '100%',
          maxWidth: '640px',
          aspectRatio: '16/9',
          position: 'relative',
          padding: '48px',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
          border: '4px solid rgba(217, 119, 6, 0.5)',
          boxShadow: '0 25px 50px rgba(217, 119, 6, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Padrão decorativo de fundo */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
          <div
            style={{
              position: 'absolute',
              top: '32px',
              right: '32px',
              width: '128px',
              height: '128px',
              border: '4px solid #fbbf24',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '32px',
              left: '32px',
              width: '96px',
              height: '96px',
              border: '4px solid #fbbf24',
              borderRadius: '50%',
            }}
          />
        </div>

        {/* Conteúdo */}
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          {/* Ícone */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}
          >
            <Award style={{ width: '64px', height: '64px', color: '#fbbf24' }} />
          </motion.div>

          {/* Título */}
          <h1
            style={{
              fontSize: '36px',
              fontWeight: 'black',
              color: '#fbbf24',
              marginBottom: '8px',
              letterSpacing: '0.1em',
            }}
          >
            CERTIFICADO
          </h1>

          {/* Decoração */}
          <div
            style={{
              width: '128px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #fbbf24, transparent)',
              margin: '24px auto',
            }}
          />

          {/* Subtítulo */}
          <p style={{ color: '#cbd5e1', fontSize: '18px', marginBottom: '8px', fontWeight: '600' }}>
            DE CONCLUSÃO
          </p>

          {/* Conteúdo Principal */}
          <div style={{ margin: '32px 0' }}>
            <p style={{ color: '#94a3b8', fontSize: '16px', marginBottom: '12px' }}>
              Certificamos que
            </p>

            <p
              style={{
                color: '#ffffff',
                fontSize: '30px',
                fontWeight: 'black',
                marginBottom: '16px',
              }}
            >
              {nomeAluno}
            </p>

            <p
              style={{
                color: '#cbd5e1',
                fontSize: '16px',
                lineHeight: '1.5',
                maxWidth: '576px',
                margin: '16px auto',
              }}
            >
              concluiu com êxito o <span style={{ fontWeight: 'bold' }}>Workshop Completo de Operação de Áudio</span>,
              <br />
              totalizando <span style={{ fontWeight: 'bold' }}>24 horas</span> de aprendizado prático e teórico em engenharia de áudio,
              <br />
              abrangendo {aulasCompletadas} aulas sobre som, microfones, mesas de som, processamento de áudio e muito mais.
            </p>

            <div style={{ fontSize: '14px', color: '#64748b', marginTop: '8px' }}>
              Completado em {dataAtual}
            </div>
          </div>

          {/* Assinatura e Data */}
          <div
            style={{
              marginTop: '32px',
              paddingTop: '24px',
              borderTop: '1px solid #475569',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '128px', height: '2px', background: '#4b5563', marginBottom: '8px' }} />
              <p style={{ color: '#64748b', fontSize: '12px', fontWeight: '600' }}>Data</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '128px', height: '2px', background: '#4b5563', marginBottom: '8px' }} />
              <p style={{ color: '#64748b', fontSize: '12px', fontWeight: '600' }}>Instrutor - Áudio Sem Mistério</p>
            </div>
          </div>

          {/* Rodapé */}
          <div style={{ marginTop: '24px', fontSize: '12px', color: '#64748b' }}>
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
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '16px 32px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '18px',
          cursor: 'pointer',
          border: 'none',
          boxShadow: '0 10px 25px rgba(217, 119, 6, 0.3)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as any).style.background = 'linear-gradient(135deg, #fbbf24, #d97706)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as any).style.background = 'linear-gradient(135deg, #f59e0b, #ea580c)';
        }}
      >
        <Download style={{ width: '20px', height: '20px' }} />
        Baixar Certificado em PDF
      </motion.button>

      {/* Informações */}
      <div style={{ textAlign: 'center', color: '#64748b', fontSize: '14px' }}>
        <p>✓ Certificado autenticado e válido</p>
        <p>✓ Salvo automaticamente em seu dispositivo</p>
      </div>
    </div>
  );
};
