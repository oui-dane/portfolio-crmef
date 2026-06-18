function getFileIcon(path) {
  const ext = path.split(".").pop().toLowerCase();
  const icons = {
    pdf: "fa-file-pdf",
    odt: "fa-file-lines",
    docx: "fa-file-lines",
    pptx: "fa-file-powerpoint",
    html: "fa-file-code",
    jpg: "fa-file-image",
    jpeg: "fa-file-image",
    png: "fa-file-image"
  };
  return icons[ext] || "fa-file";
}

function getFileType(path) {
  const ext = path.split(".").pop().toLowerCase();
  const types = {
    pdf: "PDF",
    odt: "Document",
    docx: "Document",
    pptx: "Présentation PowerPoint",
    html: "Document interactif",
    jpg: "Image",
    jpeg: "Image",
    png: "Image"
  };
  return types[ext] || "Fichier";
}

function createDocumentCard(doc) {
  const icon = getFileIcon(doc.path);
  const fileType = getFileType(doc.path);
  const isHtml = doc.path.endsWith(".html");

  let buttons = "";
  if (isHtml) {
    buttons = `
      <div class="doc-actions">
        <a class="btn btn-primary" href="${doc.path}" target="_blank">
          <i class="fa-solid fa-eye"></i> Lire le rapport interactif
        </a>
      </div>`;
  } else {
    buttons = `
      <div class="doc-actions">
        <a class="btn btn-primary" href="${doc.path}" target="_blank">
          <i class="fa-solid fa-eye"></i> Consulter
        </a>
        <a class="btn btn-outline" href="${doc.path}" download>
          <i class="fa-solid fa-download"></i> Télécharger
        </a>
      </div>`;
  }

  return `
    <div class="doc-card" data-aos="fade-up">
      <div class="doc-card-icon"><i class="fa-solid ${icon}"></i></div>
      <span class="doc-card-type">${fileType}</span>
      <h3>${doc.title}</h3>
      <p>${doc.description}</p>
      ${buttons}
    </div>`;
}

function createImageCard(img) {
  return `
    <a href="${img.path}" target="_blank" class="gallery-item">
      <img src="${img.path}" alt="${img.title}" loading="lazy">
    </a>`;
}

function renderModuleDocuments() {
  const body = document.body;
  const moduleName = body.dataset.module;
  if (!moduleName || !MODULE_DOCUMENTS[moduleName]) return;

  const moduleData = MODULE_DOCUMENTS[moduleName];
  const container = document.getElementById("documents-container");
  if (!container) return;

  container.innerHTML = "";

  let hasAnyContent = false;

  // HTML Reports
  if (moduleData.htmlReports && moduleData.htmlReports.length > 0) {
    hasAnyContent = true;
    const section = document.createElement("div");
    section.className = "doc-category";
    section.innerHTML = `
      <h3 class="doc-category-title"><i class="fa-solid fa-file-code"></i> Rapports interactifs</h3>
      <div class="docs-grid">
        ${moduleData.htmlReports.map(doc => createDocumentCard(doc)).join("")}
      </div>`;
    container.appendChild(section);
  }

  // PDF Reports
  if (moduleData.pdfReports && moduleData.pdfReports.length > 0) {
    hasAnyContent = true;
    const section = document.createElement("div");
    section.className = "doc-category";
    section.innerHTML = `
      <h3 class="doc-category-title"><i class="fa-solid fa-file-pdf"></i> Rapports PDF</h3>
      <div class="docs-grid">
        ${moduleData.pdfReports.map(doc => createDocumentCard(doc)).join("")}
      </div>`;
    container.appendChild(section);
  }

  // Presentations
  if (moduleData.presentations && moduleData.presentations.length > 0) {
    hasAnyContent = true;
    const section = document.createElement("div");
    section.className = "doc-category";
    section.innerHTML = `
      <h3 class="doc-category-title"><i class="fa-solid fa-file-powerpoint"></i> Présentations</h3>
      <div class="docs-grid">
        ${moduleData.presentations.map(doc => createDocumentCard(doc)).join("")}
      </div>`;
    container.appendChild(section);
  }

  // Resources
  if (moduleData.resources && moduleData.resources.length > 0) {
    hasAnyContent = true;
    const section = document.createElement("div");
    section.className = "doc-category";
    section.innerHTML = `
      <h3 class="doc-category-title"><i class="fa-solid fa-book"></i> Ressources pédagogiques</h3>
      <div class="docs-grid">
        ${moduleData.resources.map(doc => createDocumentCard(doc)).join("")}
      </div>`;
    container.appendChild(section);
  }

  // Images
  if (moduleData.images && moduleData.images.length > 0) {
    hasAnyContent = true;
    const section = document.createElement("div");
    section.className = "doc-category";
    section.innerHTML = `
      <h3 class="doc-category-title"><i class="fa-solid fa-images"></i> Galerie photos</h3>
      <div class="module-gallery">
        ${moduleData.images.map(img => createImageCard(img)).join("")}
      </div>`;
    container.appendChild(section);
  }

  // Hide section if no content
  const sectionEl = document.getElementById("module-documents");
  if (!hasAnyContent && sectionEl) {
    sectionEl.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", renderModuleDocuments);
