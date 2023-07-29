import html2pdf from 'html2pdf.js';

export const generatePDF = () => {
  const element = document.getElementById('pdf-content');

  const opt = {
    margin: 0.5,
    filename: 'sumula_angulo.pdf',
    image: { type: 'png', quality: 1 },
    html2canvas: { scale: 3 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
  };

  if (element) {
    html2pdf(element, opt).from(element).set(opt).save();
  } else {
    console.error('Element with id "pdf-content" not found.');
  }
};