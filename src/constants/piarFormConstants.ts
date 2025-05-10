
// Define wizard steps
export const WIZARD_STEPS = [
  { name: 'Paso 1 - Información General' },
  { name: 'Paso 2 - Caracterización y Ajustes' },
  { name: 'Paso 3 - Acta de Acuerdo' },
];

// Define sections within each step
export const STEP_SECTIONS = [
  // Step 1 sections
  [
    { id: 'encabezado', title: 'Encabezado del formulario' },
    { id: 'identificacion', title: 'Identificación del estudiante' },
    { id: 'info_general', title: 'Información general del estudiante' },
    { id: 'salud', title: 'Entorno Salud' },
    { id: 'hogar', title: 'Entorno Hogar' },
    { id: 'educativo', title: 'Entorno Educativo' },
  ],
  // Step 2 sections
  [
    { id: 'docentes', title: 'Docentes responsables del PIAR' },
    { id: 'caracteristicas', title: 'Características del Estudiante' },
    { id: 'ajustes', title: 'Ajustes razonables' },
    { id: 'recomendaciones', title: 'Recomendaciones institucionales' },
  ],
  // Step 3 sections
  [
    { id: 'participantes', title: 'Participantes' },
    { id: 'compromisos', title: 'Compromisos' },
    { id: 'firmas', title: 'Firmas' },
  ],
];

// Options for select fields
export const TIPO_DOCUMENTO_OPTIONS = [
  { value: 'cc', label: 'Cédula de Ciudadanía' },
  { value: 'ti', label: 'Tarjeta de Identidad' },
  { value: 'rc', label: 'Registro Civil' },
  { value: 'otro', label: 'Otro' },
];

export const SI_NO_OPTIONS = [
  { value: 'si', label: 'Sí' },
  { value: 'no', label: 'No' },
];

export const REGIMEN_OPTIONS = [
  { value: 'contributivo', label: 'Contributivo' },
  { value: 'subsidiado', label: 'Subsidiado' },
  { value: 'especial', label: 'Especial' },
];

export const NIVEL_EDUCATIVO_OPTIONS = [
  { value: 'primaria', label: 'Primaria' },
  { value: 'secundaria', label: 'Secundaria' },
  { value: 'media', label: 'Media' },
  { value: 'tecnico', label: 'Técnico' },
  { value: 'tecnologico', label: 'Tecnológico' },
  { value: 'profesional', label: 'Profesional' },
  { value: 'postgrado', label: 'Postgrado' },
  { value: 'ninguno', label: 'Ninguno' },
];

export const TRANSPORTE_OPTIONS = [
  { value: 'caminando', label: 'Caminando' },
  { value: 'bicicleta', label: 'Bicicleta' },
  { value: 'transporte_publico', label: 'Transporte Público' },
  { value: 'transporte_escolar', label: 'Transporte Escolar' },
  { value: 'vehiculo_particular', label: 'Vehículo Particular' },
  { value: 'otro', label: 'Otro' },
];
