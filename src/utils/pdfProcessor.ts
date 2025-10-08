import { getDocument, GlobalWorkerOptions, version } from 'pdfjs-dist';

const pageCache: { [key: string]: string[] } = {};

export async function extractPagesFromPDF(
    pdfUrl: string,
    startPage: number = 1,
    endPage: number = Infinity
): Promise<string[]> {
  const cacheKey = `${pdfUrl}_${startPage}_${endPage}`;
  if (pageCache[cacheKey]) {
    console.log('Returning cached pages:', pageCache[cacheKey].length);
    return pageCache[cacheKey];
  }

  try {
    console.log('PDF.js version:', version);
    GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
    new Worker(GlobalWorkerOptions.workerSrc);
    const pdf = await getDocument(pdfUrl).promise;
    const pages: string[] = [];

    const maxPage = Math.min(endPage, pdf.numPages);
    for (let i = startPage; i <= maxPage; i++) {
      console.log(`Processing page ${i}`);
      const page = await pdf.getPage(i);
      const viewport = page.getViewport({ scale: 1.5 });
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (!context) throw new Error('Failed to get canvas context');

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      await page.render({ canvasContext: context, viewport }).promise;
      pages.push(canvas.toDataURL('image/jpeg', 0.5));
    }

    pageCache[cacheKey] = pages;
    console.log('Extracted pages:', pages.length);
    return pages;
  } catch (error) {
    console.error('Error processing PDF:', error);
    throw error;
  }
}